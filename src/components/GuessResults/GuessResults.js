import React from "react";

import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";

function GuessResults({ guesses, answer }) {
  return (
    <div className={"guess-results"}>
      {range(NUM_OF_GUESSES_ALLOWED).map((rowNum) => {
        const checkedGuess = checkGuess(guesses[rowNum], answer);
        return (
          <p className={"guess"} key={rowNum}>
            {range(5).map((cellNum) =>
              !!checkedGuess ? (
                <span
                  className={`cell ${checkedGuess[cellNum]["status"]}`}
                  key={cellNum}
                >
                  {checkedGuess[cellNum]["letter"]}
                </span>
              ) : (
                <span className={`cell`} key={cellNum}></span>
              )
            )}
          </p>
        );
      })}
    </div>
  );
}

export default GuessResults;
