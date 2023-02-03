import React from "react";

function GuessInput({ submitGuess, disabled }) {
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
        required
        type="text"
        minLength={5}
        maxLength={5}
        id={"guess-input"}
        value={guess}
        disabled={disabled}
        onChange={(event) => {
          setGuess(event.target.value.toUpperCase());
        }}
      />
    </form>
  );
}

export default GuessInput;
