import { PREMISE, QUESTIONS } from "../data";

export default function Page() {
  return (
    <div>
      {PREMISE}
      <form action="/quiz/result">
        {QUESTIONS.map(({ id: questionId, answers, question }) => (
          <fieldset key={questionId} className="mt-5">
            <legend>
              {questionId}
              {") "}
              {question}
            </legend>
            {answers.map(({ id: answerId, answer, type }) => (
              <div key={answerId}>
                <input
                  type="radio"
                  id={answerId}
                  name={questionId}
                  value={type}
                  required
                />
                <label htmlFor={answerId}> {answer}</label>
              </div>
            ))}
          </fieldset>
        ))}
        <div className="mt-5 flex justify-center">
          <button className="bg-blue-700 p-2 text-white">
            Submit and get gift
          </button>
        </div>
      </form>
    </div>
  );
}
