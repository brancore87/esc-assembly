import React from "react";
import Title from "./components/Title";
import Description from "./components/Description";
import Status from "./components/Status";
import Language from "./components/Language";
import languages from "./languages";

export default function EscAssembly() {
  return (
    <div className="flex min-h-screen bg-[#262730] items-center flex-col">
      <header>
        <Title />
        <Description />
      </header>
      <div>
        <Status />
      </div>
      <div className="flex items-center my-10 gap-1 justify-center  flex-wrap max-w-[300px]">
        {languages.map((lang) => (
          <Language
            key={lang.id}
            name={lang.name}
            backgroundColor={lang.backgroundColor}
            color={lang.color}
          />
        ))}
      </div>
    </div>
  );
}
