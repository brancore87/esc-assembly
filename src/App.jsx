import React, { useState } from "react";
import Title from "./components/Title";
import Description from "./components/Description";
import Status from "./components/Status";
import Language from "./components/Language";
import languages from "./languages";

export default function EscAssembly() {
  const [currentWord, setCurrentWord] = useState("react");
  const [selectedLetter, setSelectedLetter] = useState([]);
  console.log(selectedLetter);

  const selectedLetterElement = selectedLetter.map((letter) => (
    <span className="text-3xl text-red-500" key={letter}>
      {letter}
    </span>
  ));

  function addGuessedLetter(newLetter) {
    setSelectedLetter((prevSelectedLetter) =>
      prevSelectedLetter.includes(newLetter)
        ? prevSelectedLetter
        : [...prevSelectedLetter, newLetter]
    );
  }

  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  const alphabetElements = alphabet.map((letter) => (
    <button
      key={letter}
      className="alphabet-elements"
      onClick={() => addGuessedLetter(letter)}
    >
      {letter.toUpperCase()}
    </button>
  ));

  const arrToString = currentWord.split("");

  const wordElements = arrToString.map((word, id) => (
    <span key={id} className="word-elements">
      {word.toUpperCase()}
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
    </main>
  );
}
