import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import games from "../../data/game_titles";
import anagrams from "./anagram-data";
import AngInput from "./AngInput";
import AnagramWordSetup from "./AnagramWordSetup";
import AngScore from "./AngScore";
import AngTimer from "./AngTimer";
import correctSound from "../../assets/sounds/correct.wav";
import wrongSound from "../../assets/sounds/wrong.wav";

import "./AnagramGame.css";

const GAME_LENGTH = 60;

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function AnagramGame({ wordLength }) {
  const [remainingGroups, setRemainingGroups] = useState([]);
  const [currentGroup, setCurrentGroup] = useState([]);
  const [displayWord, setDisplayWord] = useState("");
  const [guessedWords, setGuessedWords] = useState([]);

  const [userAnswer, setUserAnswer] = useState("");
  const [message, setMessage] = useState("");

  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(GAME_LENGTH);
  const [gameOver, setGameOver] = useState(false);

  const anagramGame = games.find((game) => game.path === "/anagram");

  const correctAudio = new Audio(correctSound);
  const wrongAudio = new Audio(wrongSound);

  function startRound(group) {
    if (!group || group.length === 0) {
      setGameOver(true);
      return;
    }

    const randomWord = group[getRandomIndex(group)];

    setCurrentGroup(group);
    setDisplayWord(randomWord);
    setGuessedWords([]);
    setUserAnswer("");
    setMessage("");
  }

  function loadNextGroup(groups = remainingGroups) {
    if (groups.length === 0) {
      setGameOver(true);
      return;
    }

    const randomIndex = getRandomIndex(groups);
    const nextGroup = groups[randomIndex];

    const groupsLeft = groups.filter((_, index) => index !== randomIndex);

    setRemainingGroups(groupsLeft);
    startRound(nextGroup);
  }

  useEffect(() => {
    const availableGroups = anagrams[Number(wordLength)] ?? [];

    setScore(0);
    setTimeLeft(GAME_LENGTH);
    setGameOver(false);

    if (availableGroups.length === 0) {
      setCurrentGroup([]);
      setRemainingGroups([]);
      setMessage("No anagrams are available for this word length.");
      setGameOver(true);
      return;
    }

    loadNextGroup(availableGroups);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wordLength]);

  useEffect(() => {
    if (gameOver) return undefined;

    const timerId = setInterval(() => {
      setTimeLeft((previousTime) => Math.max(previousTime - 1, 0));
    }, 1000);

    return () => clearInterval(timerId);
  }, [gameOver]);

  useEffect(() => {
    if (timeLeft === 0) {
      setGameOver(true);
    }
  }, [timeLeft]);

  function handleSubmit(event) {
    event.preventDefault();

    const answer = userAnswer.trim().toLowerCase();

    if (!answer) {
      setMessage("Enter a word.");
      return;
    }

    if (answer === displayWord.toLowerCase()) {
      setMessage("You cannot enter the displayed word itself.");
      setUserAnswer("");
      return;
    }

    if (guessedWords.includes(answer)) {
      setMessage("You already found that word.");
      setUserAnswer("");
      return;
    }

    const validAnswers = currentGroup
      .filter((word) => word !== displayWord)
      .map((word) => word.toLowerCase());

    if (!validAnswers.includes(answer)) {
      wrongAudio.currentTime = 0;
      wrongAudio.play();
      setMessage("That is not a valid anagram.");
      setUserAnswer("");
      return;
    }

    const updatedGuesses = [...guessedWords, answer];

    correctAudio.currentTime = 0;
    correctAudio.play();
    setGuessedWords(updatedGuesses);
    setScore((previousScore) => previousScore + 1);
    setUserAnswer("");
    setMessage("Correct!");

    if (updatedGuesses.length === validAnswers.length) {
      setTimeout(() => {
        loadNextGroup();
      }, 500);
    }
  }

  if (gameOver) {
    return (
      <main className="anagram-game-page">
        <section className="anagram-game-card game-over-card">
          <div
            className="anagram-game-header game-over-header"
            style={{
              backgroundImage: `url(${anagramGame?.image})`,
            }}
          >
            <div className="anagram-game-header-overlay">
              <span>Game Complete</span>
              <h1>Game Over</h1>
            </div>
          </div>

          <div className="game-over-content">
            <p className="game-over-message">
              {timeLeft === 0
                ? "Time is up!"
                : "You completed all available anagram groups!"}
            </p>

            <span className="final-score-label">Final Score</span>

            <div className="final-score-number">{score}</div>

            <div className="game-over-actions">
              <Link className="anagram-action primary-action" to="/anagram">
                Play Again
              </Link>

              <Link className="anagram-action secondary-action" to="/">
                Back to Start Screen
              </Link>
            </div>
          </div>
        </section>
      </main>
    );
  }

  const anagramsLeft =
    currentGroup.length > 0 ? currentGroup.length - 1 - guessedWords.length : 0;

  return (
    <main className="anagram-game-page">
      <section className="anagram-game-card">
        <div
          className="anagram-game-header"
          style={{
            backgroundImage: `url(${anagramGame?.image})`,
          }}
        >
          <div className="anagram-game-header-overlay">
            <span>Anagram Challenge</span>
            <h1>Anagram Hunt</h1>
            <p>Rearrange the letters before the timer reaches zero.</p>
          </div>
        </div>

        <div className="anagram-game-content">
          <div className="game-status">
            <div className="status-item">
              <span className="status-label">Score</span>
              <AngScore score={score} />
            </div>

            <div className="status-divider"></div>

            <div className="status-item">
              <span className="status-label">Time Left</span>
              <AngTimer time={timeLeft} />
            </div>
          </div>

          <AnagramWordSetup
            displayWord={displayWord}
            anagramsLeft={anagramsLeft}
          />

          <div className="answer-section">
            <AngInput
              userAnswer={userAnswer}
              setUserAnswer={setUserAnswer}
              handleSubmit={handleSubmit}
              disabled={gameOver}
            />

            {message && (
              <p
                className={`answer-message ${
                  message === "Correct!"
                    ? "correct-answer-message"
                    : "incorrect-answer-message"
                }`}
              >
                {message}
              </p>
            )}
          </div>

          <div className="guessed-section">
            <div className="guessed-heading">
              <h2>Correct Answers</h2>
              <span>{guessedWords.length} found</span>
            </div>

            {guessedWords.length === 0 ? (
              <p className="empty-guesses">
                Your correct answers will appear here.
              </p>
            ) : (
              <ul className="guessed-list">
                {guessedWords.map((word) => (
                  <li key={word}>{word}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

export default AnagramGame;
