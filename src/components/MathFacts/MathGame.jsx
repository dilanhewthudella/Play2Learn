import React, { useState } from "react";
import { Link } from "react-router-dom";

import Score from "./Score";
import Timer from "./Timer";
import NumberButton from "./NumberButton";
import ClearButton from "./ClearButton";
import Equation from "./Equation";
import Keyboard from "./Keyboard";
import { randInt } from "../../helpers/helpers";

import mathGameImage from "../../assets/maths.png";
import correctSound from "../../assets/sounds/correct.wav";
import wrongSound from "../../assets/sounds/wrong.wav";
import { playSound } from "../../helpers/helpers";

import "./MathGame.css";

function MathGame({ operation, maxNumber }) {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  const numberButtons = numbers.map((number) => (
    <NumberButton value={number} key={number} handleClick={appendToAnswer} />
  ));

  let randNums = getRandNumbers(operation, 0, maxNumber);

  const [operands, setOperands] = useState(randNums);
  const question = operands.num1 + " " + operation + " " + operands.num2;

  const [userAnswer, setUserAnswer] = useState("");
  const [score, setScore] = useState(0);

  const gameLength = 60;
  const [timeLeft, setTimeLeft] = useState(gameLength);

  const [answered, setAnswered] = useState(false);

  function appendToAnswer(num) {
    setUserAnswer(String(Number(userAnswer + num)));
  }

  function checkAnswer(userAnswer) {
    if (isNaN(userAnswer)) return false;

    let correctAnswer;

    switch (operation) {
      case "+":
        correctAnswer = operands.num1 + operands.num2;
        break;

      case "-":
        correctAnswer = operands.num1 - operands.num2;
        break;

      case "x":
        correctAnswer = operands.num1 * operands.num2;
        break;

      default:
        correctAnswer = operands.num1 / operands.num2;
    }

    return parseInt(userAnswer) === correctAnswer;
  }

  if (!answered && checkAnswer(userAnswer)) {
    playSound(correctSound);
    setAnswered(true);
    setScore(score + 1);
    setTimeout(newQuestion, 300);
  }

  function newQuestion() {
    setUserAnswer("");
    setAnswered(false);

    randNums = getRandNumbers(operation, 0, maxNumber);
    setOperands(randNums);
  }

  function restart() {
    setTimeLeft(gameLength);
    setScore(0);
    newQuestion();
  }

  function getRandNumbers(operator, low, high) {
    let num1 = randInt(low, high);
    let num2 = randInt(low, high);

    const numHigh = Math.max(num1, num2);
    const numLow = Math.min(num1, num2);

    if (operator === "-") {
      num1 = numHigh;
      num2 = numLow;
    }

    if (operator === "/") {
      if (num2 === 0) {
        num2 = randInt(1, high);
      }

      num1 = num1 * num2;
    }

    return { num1, num2 };
  }

  const equationClass = answered
    ? "equation-box equation-correct"
    : "equation-box";

  if (timeLeft === 0) {
    return (
      <main className="math-game-page">
        <section className="math-game-card result-card">
          <div className="math-image-container result-image">
            <img
              src={mathGameImage}
              alt="Math Facts game"
              className="math-game-image"
            />
          </div>

          <div className="result-content">
            <span className="result-badge">Game Complete</span>

            <h2>Time&apos;s Up!</h2>

            <p className="result-text">You answered</p>

            <div className="final-score">{score}</div>

            <p className="result-text">
              {score === 1 ? "question correctly" : "questions correctly"}
            </p>

            <div className="result-buttons">
              <button
                className="result-button play-again-button"
                onClick={restart}
              >
                Play Again with Same Settings
              </button>

              <Link className="result-button settings-button" to="/math-facts">
                Change Settings
              </Link>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="math-game-page">
      <section className="math-game-card" id="game-container">
        <div className="math-image-container">
          <img
            src={mathGameImage}
            alt="Math Facts game"
            className="math-game-image"
          />

          <div className="math-image-overlay">
            <span>Math Facts</span>
            <h1>How many can you solve?</h1>
          </div>
        </div>

        <div className="math-game-content">
          <div className="game-information">
            <div className="information-box">
              <span className="information-label">Score</span>

              <div className="information-value">
                <Score score={score} />
              </div>
            </div>

            <div className="information-divider"></div>

            <div className="information-box">
              <span className="information-label">Time Left</span>

              <div className="information-value timer">
                <Timer timeLeft={timeLeft} setTimeLeft={setTimeLeft} />
              </div>
            </div>
          </div>

          <div className={equationClass} id="equation">
            <span className="equation-label">Solve the equation</span>

            <Equation question={question} answer={userAnswer} />

            {answered && <span className="correct-text">Correct!</span>}
          </div>

          <div className="number-buttons" id="buttons">
            {numberButtons}

            <ClearButton handleClick={setUserAnswer} />
          </div>

          <Keyboard
            setUserAnswer={setUserAnswer}
            userAnswer={userAnswer}
            checkAnswer={checkAnswer}
          />

          <p className="keyboard-message">
            Use the buttons or your keyboard to enter the answer.
          </p>
        </div>
      </section>
    </main>
  );
}

export default MathGame;
