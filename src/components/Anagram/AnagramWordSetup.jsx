import anagrams from "./anagram-data";
import { randElement } from "../../helpers/helpers";

function AnagramWordSetup({ displayWord, anagramsLeft }) {
  return (
    <div className="word-section">
      <p className="word-label">Find anagrams for:</p>

      <div className="display-word">{displayWord}</div>

      <p className="anagrams-left">
        {anagramsLeft} {anagramsLeft === 1 ? "anagram" : "anagrams"} left
      </p>
    </div>
  );
}

export default AnagramWordSetup;
