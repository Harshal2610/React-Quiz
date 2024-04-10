import { useQuiz } from "./QuizContext";

function FinishScreen() {
  const { points, maxPoints, dispatch } = useQuiz();
  const precentage = (points / maxPoints) * 100;
  return (
    <>
      <p className="result">
        You have scored <strong>{points}</strong> out of {maxPoints}(
        {Math.ceil(precentage)}%)
      </p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart
      </button>
    </>
  );
}

export default FinishScreen;
