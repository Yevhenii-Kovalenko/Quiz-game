import React from 'react';

function Results({ correct, questions, restartQuiz }) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" alt="victory" />
      <div>
        Your results is : {correct} out of {questions.length}{' '}
      </div>
      <button type="button" onClick={() => restartQuiz()}>
        Restart quiz
      </button>
    </div>
  );
}

export default Results;
