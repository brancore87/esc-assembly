import React from "react";
import Title from "./components/Title";
import Description from "./components/Description";

export default function EscAssembly() {
  return (
    <main className="flex min-h-screen bg-[#262730] items-center flex-col">
      <header>
        <Title />
        <Description />
      </header>
    </main>
  );
}
