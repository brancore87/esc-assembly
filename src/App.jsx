import React, { useState } from "react";
import Title from "./components/Title";
import Description from "./components/Description";
import Status from "./components/Status";
import Language from "./components/Language";
import languages from "./languages";
import clsx from "clsx";
import toast, { Toaster } from "react-hot-toast";

export default function EscAssembly() {
  const [currentWord, setCurrentWord] = useState("react");
  const [selectedLetter, setSelectedLetter] = useState([]);

  function addGuessedLetter(newLetter) {
    toast.success(newLetter);
    setSelectedLetter((prevSelectedLetter) =>
      prevSelectedLetter.includes(newLetter)
        ? prevSelectedLetter
        : [...prevSelectedLetter, newLetter]
    );
  }

  const alphabetElements = "abcdefghijklmnopqrstuvwxyz"
    .split("")
    .map((letter) => {
      const isSelected = selectedLetter.includes(letter);
      const isCorrect = isSelected && currentWord.includes(letter);
      const isWrong = isSelected && !currentWord.includes(letter);

      const className = clsx("alphabet-elements bg-[#2D519F]", {
        correct: isCorrect,
        wrong: isWrong,
      });

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
        {languages.map((lang) => (
          <Language
            key={lang.id}
            name={lang.name}
            backgroundColor={lang.backgroundColor}
            color={lang.color}
          />
        ))}
      </section>

      <span className="word-elements-container">{wordElements}</span>

      <section className="alphabet-elements-container">
        {alphabetElements}
      </section>

      <button className="btn-newgame">New Game</button>
      <Toaster position="top-right" />
    </main>
  );
}
