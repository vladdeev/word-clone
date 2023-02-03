import React from "react";

import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults";
import HappyBanner from "../HappyBanner/HappyBanner";
import SadBanner from "../SadBanner/SadBanner";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState("active"); // [win, loss]

  const submitGuess = (guess) => {
    const newGuesses = [...guesses, guess];
    setGuesses(newGuesses);
    if (guess === answer) {
      setGameStatus("win");
    } else if (newGuesses.length === NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("loss");
    }
  };

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput
        submitGuess={submitGuess}
        disabled={gameStatus !== "active"}
      />
      {gameStatus === "win" && <HappyBanner numOfGuesses={guesses.length} />}
      {gameStatus === "loss" && <SadBanner answer={answer} />}
    </>
  );
}

export default Game;
