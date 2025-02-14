import React, { useEffect, useState } from "react";
import Title from "./components/Title";
import Description from "./components/Description";
import Status from "./components/Status";
import Language from "./components/Language";
import languages from "./languages";
import clsx from "clsx";
import getFarewellText from "./utils";

export default function EscAssembly() {
  // state values
  const [currentWord, setCurrentWord] = useState("react");
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

  console.log(wrongGuessedCount);
  console.log(languageNames);

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
        >
          {letter.toUpperCase()}
        </button>
      );
    });

  const wordElements = currentWord.split("").map((word) => (
    <span key={word} className="word-elements">
      {selectedLetter.includes(word) ? word.toUpperCase() : ""}
    </span>
  ));

  return (
    <main className="main-container">
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
      {isGameOver && <button className="btn-newgame">New Game</button>}
    </main>
  );
}
