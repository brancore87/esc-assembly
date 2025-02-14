import React, { useState } from "react";
import Title from "./components/Title";
import Description from "./components/Description";
import Status from "./components/Status";
import Language from "./components/Language";
import languages from "./languages";
import clsx from "clsx";
import toast, { Toaster } from "react-hot-toast";

export default function EscAssembly() {
  // state values
  const [currentWord, setCurrentWord] = useState("react");
  const [selectedLetter, setSelectedLetter] = useState([]);

  // derived values
  const wrongGuessedCount = selectedLetter.filter(
    (letter) => !currentWord.includes(letter)
<<<<<<< HEAD
  );
=======
  ).length;
>>>>>>> 0a649f9 (added wrong guessed count)

  console.log(wrongGuessedCount);

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
        toast.success(newLetter);
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

      <Status />

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

      <button className="btn-newgame">New Game</button>
      <Toaster position="top-right" />
    </main>
  );
}
