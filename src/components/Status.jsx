import clsx from "clsx";
import React from "react";

export default function Status(props) {
  const className =
    "flex flex-col items-center justify-center py-2 my-2 font-bold w-[350px] h-[88px] text-center rounded ";

  const gameWon = (
    <>
      <div>
        <span>🎉</span>You<span>🥳</span>
        Win
        <span>🎉</span>
      </div>
      <div>
        <span>🎊</span>Well<span>👏🏻</span>Done<span>🎊</span>
      </div>
    </>
  );
  const gameLost = (
    <>
      <div>
        <span>💀</span>You<span>😭</span>
        Lose
        <span>💀</span>
      </div>
      <div>
        <span>
          Better start learning <span className="font-black">Assembly</span>
        </span>
      </div>
    </>
  );
  const farewellText = (
    <>
      <div>
        <span>🙋🏻‍♂️</span>
        {props.getFarewellText(props.name)}
        <span>🫂</span>
      </div>
    </>
  );

  return (
    <section
      className={clsx(
        className,
        props.className,
        props.isGameOver
          ? props.isGameWon
            ? "bg-[#10A95B] text-amber-300"
            : "bg-[#BA2A2A] text-white"
          : props.wrongGuessedCount && "bg-purple-700  text-white"
      )}
    >
      {props.isGameOver
        ? props.isGameWon
          ? gameWon
          : gameLost
        : props.wrongGuessedCount
        ? farewellText
        : ""}
    </section>
  );
}
