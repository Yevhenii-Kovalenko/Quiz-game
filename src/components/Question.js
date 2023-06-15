/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

function Question({ restartQuiz, title, answers, onClickVariant }) {
  return (
    <div className="question">
      <h1>{title}</h1>
      <ul>
        {answers.map((answer, index) => (
          <li key={index} onClick={() => onClickVariant(index)}>
            {answer.answerText}
          </li>
        ))}
      </ul>
      <button type="button" onClick={() => restartQuiz()}>
        {' '}
        Back to categories!
      </button>
    </div>
  );
}

export default Question;
