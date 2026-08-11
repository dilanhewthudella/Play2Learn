import { useEffect } from "react";
import wrongSound from "../../assets/sounds/wrong.wav";
import { playSound } from "../../helpers/helpers";

function Keyboard({ setUserAnswer, userAnswer, checkAnswer }) {
  useEffect(() => {
    const handleKeyUp = (e) => {
      if (e.key === "Enter") {
        // Only check if the user actually entered something
        if (userAnswer !== "") {
          if (!checkAnswer(userAnswer)) {
            console.log("Wrong answer - playing sound");
            playSound(wrongSound);
          }
        }

        setUserAnswer("");
      } else if (e.key === " ") {
        setUserAnswer("");
      } else if (e.key === "Backspace") {
        setUserAnswer((prevUserAnswer) =>
          prevUserAnswer.substring(0, prevUserAnswer.length - 1),
        );
      } else if (!isNaN(e.key) && e.key !== " ") {
        setUserAnswer((prevUserAnswer) =>
          String(Number(prevUserAnswer + e.key)),
        );
      }
    };

    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [userAnswer, checkAnswer, setUserAnswer]);

  return null;
}

export default Keyboard;
