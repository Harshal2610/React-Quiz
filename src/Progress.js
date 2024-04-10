import { useQuiz } from "./QuizContext";

function Progress() {
  const { index, numQuestions, points, maxPoints, answer } = useQuiz();
  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      <p>
        Questions <strong>{index + 1}</strong>/{numQuestions}
      </p>
      <p>
        {" "}
        Points <strong>{points}</strong>/{maxPoints}
      </p>
    </header>
  );
}

export default Progress;
