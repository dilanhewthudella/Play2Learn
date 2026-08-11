import AngPlayButton from "./AngPlayButton";
import games from "../../data/game_titles";
import "./AnagramMain.css";

function AnagramMain({ wordLength, setWordLength }) {
  const anagramGame = games.find((game) => game.path === "/anagram");

  return (
    <main className="anagram-settings-page">
      <section className="anagram-settings-card">
        <div
          className="anagram-settings-header"
          style={{
            backgroundImage: `url(${anagramGame?.image})`,
          }}
        >
          <div className="anagram-settings-overlay">
            <span className="anagram-badge">Word Challenge</span>

            <h1>Anagram Hunt</h1>

            <p>
              Rearrange the letters and find as many valid words as possible
              before time runs out.
            </p>
          </div>
        </div>

        <div className="anagram-settings-content">
          <div className="word-length-field">
            <div className="field-step">1</div>

            <div className="field-body">
              <label htmlFor="anagram-input">Choose Word Length</label>

              <input
                id="anagram-input"
                type="number"
                min="5"
                max="8"
                value={wordLength}
                onChange={(event) => setWordLength(Number(event.target.value))}
              />

              <span>Choose a number between 5 and 8.</span>
            </div>
          </div>

          <div className="anagram-setting-summary">
            <div>
              <span>Word Length</span>
              <strong>{wordLength} letters</strong>
            </div>

            <div>
              <span>Game Time</span>
              <strong>60 seconds</strong>
            </div>

            <div>
              <span>Goal</span>
              <strong>Find anagrams</strong>
            </div>
          </div>

          <div className="anagram-play-button">
            <AngPlayButton />
          </div>
        </div>
      </section>

      <section className="anagram-instructions-card">
        <div className="instructions-heading">
          <span>How to Play</span>
          <h2>Game Instructions</h2>
        </div>

        <div className="anagram-instructions-grid">
          <article className="anagram-instruction">
            <div className="instruction-number">1</div>

            <div>
              <h3>Choose a Length</h3>
              <p>Select a word length between 5 and 8 letters.</p>
            </div>
          </article>

          <article className="anagram-instruction">
            <div className="instruction-number">2</div>

            <div>
              <h3>Start the Game</h3>
              <p>Click Play to begin the 60-second countdown.</p>
            </div>
          </article>

          <article className="anagram-instruction">
            <div className="instruction-number">3</div>

            <div>
              <h3>Find Anagrams</h3>
              <p>
                Rearrange the displayed word and enter valid words using the
                same letters.
              </p>
            </div>
          </article>

          <article className="anagram-instruction">
            <div className="instruction-number">4</div>

            <div>
              <h3>Build Your Score</h3>
              <p>Each correct answer adds one point to your score.</p>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

export default AnagramMain;
