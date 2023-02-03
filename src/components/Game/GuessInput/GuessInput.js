import React from "react";

function GuessInput({ submitGuess }) {
  const [guess, setGuess] = React.useState("");

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        if (guess.length === 5) {
          submitGuess(guess);
          setGuess("");
        }
      }}
    >
      <label htmlFor={"guess-input"}>Enter guess:</label>
      <input
        type="text"
        minLength={5}
        maxLength={5}
        id={"guess-input"}
        value={guess}
        onChange={(event) => {
          setGuess(event.target.value.toUpperCase());
        }}
      />
    </form>
  );
}

export default GuessInput;
