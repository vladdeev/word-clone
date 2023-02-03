import React from "react";

function GuessResults({ guesses }) {
  console.log("guesses", guesses);
  return (
    <div className={"guess-results"}>
      {guesses.map(({ id, guess }) => (
        <p className={"guess"} key={id}>
          {guess}
        </p>
      ))}
    </div>
  );
}

export default GuessResults;
