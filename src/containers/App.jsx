import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Main from "../components/Main";
import MathFacts from "../components/MathFacts/Math-main";
import Anagram from "../components/Anagram/Anagram-main";
import MathGame from "../components/MathFacts/MathGame";
import AnagramGame from "../components/Anagram/AnagramGame";

import "./App.css";

function App() {
  const [operation, setOperation] = useState("+");
  const [maxNumber, setMaxNumber] = useState(10);
  const [wordLength, setWordLength] = useState(5);

  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<Main />} />

          <Route
            path="/math-facts"
            element={
              <MathFacts
                operation={operation}
                setOperation={setOperation}
                maxNumber={maxNumber}
                setMaxNumber={setMaxNumber}
              />
            }
          />

          <Route
            path="/math-facts/play"
            element={
              <MathGame operation={operation} maxNumber={Number(maxNumber)} />
            }
          />

          <Route
            path="/anagram"
            element={
              <Anagram wordLength={wordLength} setWordLength={setWordLength} />
            }
          />
          <Route
            path="/anagram/play"
            element={<AnagramGame wordLength={wordLength} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
