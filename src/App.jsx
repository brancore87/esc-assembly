import React, { useState } from "react";
import Title from "./components/Title";
import Description from "./components/Description";
import Status from "./components/Status";
import Language from "./components/Language";
import languages from "./languages";

export default function EscAssembly() {
  const [currentWord, setCurrentWord] = useState("react");

  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  const alphabetElements = alphabet.map((word, id) => (
    <button
      key={id}
      className="bg-[#2D519F] alphabet font-bold px-5 py-3 flex shadow-[0_1px_1px] hover:shadow-[0_2px_5px] transition-all cursor-pointer text-white shadow-white w-18 items-center flex-col rounded "
    >
      {word.toUpperCase()}
    </button>
  ));

  const arrToString = currentWord.split("");

  const wordElements = arrToString.map((word, id) => (
    <span
      key={id}
      className="bg-slate-600 rounded-t-md mx-1 border-b-2 border-white px-[24px] py-2"
    >
      {word.toUpperCase()}
    </span>
  ));

  return (
    <main className="flex min-h-screen  max-w-[780px] mx-auto bg-[#262730] items-center flex-col  border-lborder-r">
      <header>
        <Title />
        <Description />
      </header>
      <Status />
      <section className="flex items-center my-5 gap-2 justify-center flex-wrap max-w-[300px]">
        {languages.map((lang) => (
          <Language
            key={lang.id}
            name={lang.name}
            backgroundColor={lang.backgroundColor}
            color={lang.color}
          />
        ))}
      </section>
      <span className="text-white font-bold flex items-center justify-center">
        {wordElements}
      </span>

      <section className="flex items-center flex-wrap justify-center max-w-[650px] mt-5 p-1 gap-2">
        {alphabetElements}
      </section>
      <button className="text-white bg-[#6457A6] hover:shadow-[0_0_3px] cursor-pointer transition-all px-8 py-3 my-10 font-black rounded-md">
        New Game
      </button>
    </main>
  );
}
