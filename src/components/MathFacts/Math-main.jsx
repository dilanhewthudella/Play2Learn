import SelectInput from "./SelectInput";
import PlayButton from "./PlayButton";
import games from "../../data/game_titles";
import "./MathFactsMain.css";

function MathFactsMain(props) {
  const operations = [
    ["Addition", "+"],
    ["Subtraction", "-"],
    ["Multiplication", "x"],
    ["Division", "/"],
  ];

  const numbers = [];

  for (let number = 2; number <= 100; number++) {
    numbers.push([number, number]);
  }

  const mathFactsGame = games.find((game) => game.path === "/math-facts");

  return (
    <main className="math-settings-page">
      <section className="math-settings-card">
        <div
          className="math-settings-header"
          style={{
            backgroundImage: `url(${mathFactsGame?.image})`,
          }}
        >
          <div className="math-settings-header-overlay">
            <span className="math-settings-badge">Math Facts Game</span>

            <h1>Mathificent</h1>

            <p>
              Select your operation and maximum number, then answer as many
              questions as possible before time runs out.
            </p>
          </div>
        </div>

        <div className="math-settings-form">
          <div className="settings-field">
            <div className="field-number">1</div>

            <div className="field-content">
              <SelectInput
                label="Operation"
                id="operation"
                values={operations}
                currentValue={props.operation}
                setCurrentValue={props.setOperation}
              />
            </div>
          </div>

          <div className="settings-field">
            <div className="field-number">2</div>

            <div className="field-content">
              <SelectInput
                label="Maximum Number"
                id="max-number"
                currentValue={props.maxNumber}
                setCurrentValue={props.setMaxNumber}
                values={numbers}
              />
            </div>
          </div>

          <div className="play-button-container">
            <PlayButton />
          </div>
        </div>
      </section>
      <section className="instructions-card">
        <div className="instructions-header mt-4">
          <span>📘 How to Play</span>
          <h2>Game Instructions</h2>
        </div>

        <div className="instructions-grid">
          <div className="instruction-item">
            <div className="instruction-icon">1️⃣</div>
            <div>
              <h4>Choose Settings</h4>
              <p>
                Select the math operation and choose the largest number that can
                appear in the questions.
              </p>
            </div>
          </div>

          <div className="instruction-item">
            <div className="instruction-icon">2️⃣</div>
            <div>
              <h4>Start Playing</h4>
              <p>
                Click <strong>Play</strong> to begin the game. You will have
                <strong> 60 seconds</strong> to answer as many questions as
                possible.
              </p>
            </div>
          </div>

          <div className="instruction-item">
            <div className="instruction-icon">3️⃣</div>
            <div>
              <h4>Beat the Timer</h4>
              <p>
                When the timer reaches zero, your final score is displayed. Try
                to beat your previous best!
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default MathFactsMain;
