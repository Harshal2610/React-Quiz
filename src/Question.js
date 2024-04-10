import { useQuiz } from "./QuizContext";

function Question() {
  const { dispatch, answer, questions, index } = useQuiz();
  const question = questions[index];
  const hasAnswered = answer !== null;
  console.log(question);
  return (
    <div>
      <h4>{question.question}</h4>

      <div className="options">
        {question.options.map((option, index) => (
          <button
            className={`btn btn-option ${index === answer ? "answer" : ""} ${
              hasAnswered
                ? index === question.correctOption
                  ? "correct"
                  : "wrong"
                : ""
            }`}
            key={option}
            disabled={hasAnswered}
            onClick={() => dispatch({ type: "newAnswer", payload: index })}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Question;
