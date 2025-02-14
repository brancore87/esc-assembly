import clsx from "clsx";
import React from "react";

export default function Status(props) {
  const className =
    "flex flex-col items-center justify-center py-2 my-2  font-bold w-[380px] h-[88px] status rounded-md text-xl";

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

  return (
    <section
      className={clsx(
        className,
        props.isGameOver
          ? props.isGameWon
            ? "bg-[#10A95B] text-amber-300"
            : "bg-[#BA2A2A] text-white"
          : null
      )}
    >
      {props.isGameOver ? (props.isGameWon ? gameWon : gameLost) : null}
    </section>
  );
}
