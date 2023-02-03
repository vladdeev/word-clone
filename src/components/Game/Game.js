import React from "react";

import GuessInput from "./GuessInput/GuessInput";

import { sample } from "../../utils";
import { WORDS } from "../../data";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  const submitGuess = (guess) => {
    console.log("Submitted guess:", guess);
  };
  return (
    <>
      <GuessInput submitGuess={submitGuess} />
    </>
  );
}

export default Game;
