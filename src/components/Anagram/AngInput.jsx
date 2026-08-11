import { Fragment } from "react";
function AngInput({ userAnswer, setUserAnswer, handleSubmit, disabled }) {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="anagram-answer" className="form-label fw-bold">
        Enter an anagram
      </label>

      <div className="input-group">
        <input
          id="anagram-answer"
          type="text"
          className="form-control"
          value={userAnswer}
          onChange={(event) => setUserAnswer(event.target.value)}
          placeholder="Type an answer"
          autoComplete="off"
          autoFocus
          disabled={disabled}
        />

        <button type="submit" className="btn btn-primary" disabled={disabled}>
          Submit
        </button>
      </div>
    </form>
  );
}

export default AngInput;
