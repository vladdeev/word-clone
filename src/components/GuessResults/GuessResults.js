import React from "react";

import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessResults({ guesses }) {
  console.log("guesses", guesses);
  return (
    <div className={"guess-results"}>
      {range(NUM_OF_GUESSES_ALLOWED).map((rowNum) => (
        <p className={"guess"} key={rowNum}>
          {range(5).map((cellNum) => (
            <span className={"cell"} key={cellNum}>
              {typeof guesses[rowNum] === "undefined"
                ? ""
                : guesses[rowNum][cellNum]}
            </span>
          ))}
        </p>
      ))}
    </div>
  );
}

export default GuessResults;
