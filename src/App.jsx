import React from "react";
import Title from "./components/Title";
import Description from "./components/Description";
import Status from "./components/Status";

export default function EscAssembly() {
  return (
    <div className="flex min-h-screen bg-[#262730] items-center flex-col">
      <header>
        <Title />
        <Description />
      </header>
      <main>
        <Status />
      </main>
    </div>
  );
}
