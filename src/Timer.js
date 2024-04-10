import { useEffect } from "react";
import { useQuiz } from "./QuizContext";

function Timer() {
  const { dispatch, secondsRemaning } = useQuiz();
  const min = Math.floor(secondsRemaning / 60);
  const seconds = secondsRemaning % 60;
  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);

      return () => clearInterval(id);
    },
    [dispatch]
  );
  return (
    <div className="timer">
      {min < 10 && "0"}
      {min}:{seconds < 10 && "0"}
      {seconds}
    </div>
  );
}

export default Timer;
