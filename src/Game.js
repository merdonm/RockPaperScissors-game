import React, { useEffect, useState } from "react";

const Game = () => {
  const [playerChoice, setPlayerChoice] = useState(null);
  const choice = ["Rock", "Paper", "Scissor"];
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState("");
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);

  useEffect(() => {
    if (playerChoice && computerChoice) {
      if (playerChoice === computerChoice) {
        setResult("Match Draw");
      } else if (
        (playerChoice === "Rock" && computerChoice === "Scissor") ||
        (playerChoice === "Paper" && computerChoice === "Rock") ||
        (playerChoice === "Scissor" && computerChoice === "Paper")
      ) {
        setResult("The winner is Player");
        setPlayerScore(playerScore + 1);
      } else {
        setResult("The winner is Computer");
        setComputerScore(computerScore + 1);
      }
    }
  }, [playerChoice, computerChoice]);

  const handleClick = (playerChoice) => {
    setPlayerChoice(playerChoice);
    const int = Math.floor(Math.random() * 3);
    const computersChoice = choice[int];
    setComputerChoice(computersChoice);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-300">
      <div className="bg-blue-600 px-32 py-10 flex flex-col gap-y-2 text-white text-xl">
        <h1 className="text-3xl font-bold py-2">Rock Paper Scissors Game</h1>
        <h2 className="text-2xl font-bold">Player vs Computer</h2>
        <div className="flex gap-10 text-base">
          <button className="px-5 bg-white text-blue-600 my-2 py-3 rounded" onClick={() => handleClick("Rock")}>Rock</button>
          <button className="px-5 bg-white text-blue-600 my-2 py-3 rounded" onClick={() => handleClick("Paper")}>Paper</button>
          <button className="px-5 bg-white text-blue-600 my-2 py-3 rounded" onClick={() => handleClick("Scissor")}>Scissor</button>
        </div>
        <p>Your Choice: {playerChoice}</p>
        <p>Computer's Choice: {computerChoice}</p>
        <p>{result}</p>
        <p>Your Score: {playerScore}</p>
        <p>Computer's Score: {computerScore}</p>
      </div>
    </div>
  );
};

export default Game;
