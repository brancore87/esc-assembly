import React, { useState } from "react";
import Title from "./components/Title";
import Description from "./components/Description";
import Status from "./components/Status";
import Language from "./components/Language";
import languages from "./data/languages";
import clsx from "clsx";
import { getRandomWords, getFarewellText } from "./lib/utils";
import Confetti from "react-confetti";

export default function EscAssembly() {
  // state values
  const [currentWord, setCurrentWord] = useState(() => getRandomWords());
  const [selectedLetter, setSelectedLetter] = useState([]);

  // derived values
  const wrongGuessedCount = selectedLetter.filter(
    (letter) => !currentWord.includes(letter)
  ).length;

  const isGameWon = currentWord
    .split("")
    .every((letter) => selectedLetter.includes(letter));

  const isGameLost = wrongGuessedCount >= languages.length - 1;
  const isGameOver = isGameWon || isGameLost;
  const languageNames = languages.map((lang) => lang.name);

  // static values
  const keyboardElements = "abcdefghijklmnopqrstuvwxyz"
    .split("")
    .map((letter) => {
      const isSelected = selectedLetter.includes(letter);
      const isCorrect = isSelected && currentWord.includes(letter);
      const isWrong = isSelected && !currentWord.includes(letter);

      const className = clsx("keyboard-elements bg-[#2D519F]", {
        correct: isCorrect,
        wrong: isWrong,
      });

      function addGuessedLetter(newLetter) {
        // toast.success(newLetter);
        setSelectedLetter((prevSelectedLetter) =>
          prevSelectedLetter.includes(newLetter)
            ? prevSelectedLetter
            : [...prevSelectedLetter, newLetter]
        );
      }

      return (
        <button
          key={letter}
          className={className}
          onClick={() => addGuessedLetter(letter)}
          disabled={isGameOver}
          aria-disabled={isGameOver}
          aria-label={`Letter ${letter}`}
        >
          {letter.toUpperCase()}
        </button>
      );
    });

  const wordElements = currentWord.split("").map((word, index) => {
    const shouldRevealLetter = isGameLost || selectedLetter.includes(word);

    return (
      <span
        key={index}
        className={clsx(
          "word-elements",
          isGameLost && !selectedLetter.includes(word) && "missed-word"
        )}
      >
        {shouldRevealLetter ? word.toUpperCase() : ""}
      </span>
    );
  });

  function resetGame() {
    setCurrentWord(getRandomWords());
    setSelectedLetter([]);
  }

  return (
    <main className="main-container">
      {isGameWon && <Confetti />}
      <header>
        <Title />
        <Description />
      </header>

      <Status
        isGameOver={isGameOver}
        isGameWon={isGameWon}
        isGameLost={isGameLost}
        wrongGuessedCount={wrongGuessedCount}
        getFarewellText={() =>
          getFarewellText(languageNames[wrongGuessedCount - 1])
        }
      />

      <section className="language-container">
        {languages.map((lang, index) => {
          const isLanguageLost = index < wrongGuessedCount;
          const className = clsx("language", isLanguageLost && "lost");
          return (
            <Language
              key={lang.id}
              name={lang.name}
              backgroundColor={lang.backgroundColor}
              color={lang.color}
              className={className}
            />
          );
        })}
      </section>
      <span className="word-elements-container">{wordElements}</span>
      <section className="keyboard-elements-container">
        {keyboardElements}
      </section>
      {isGameOver && (
        <button className="btn-newgame" onClick={resetGame}>
          New Game
        </button>
      )}
    </main>
  );
}
