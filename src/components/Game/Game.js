import React from "react";

import GuessInput from "./GuessInput/GuessInput";
import GuessResults from "../GuessResults";

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
    const newGuesses = [...guesses, guess];
    setGuesses(newGuesses);
  };
  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessInput submitGuess={submitGuess} />
    </>
  );
}

export default Game;
