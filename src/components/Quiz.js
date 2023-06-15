/* eslint-disable no-use-before-define */
import React, { useState } from 'react';

import Categories from './Categories';
import Question from './Question';
import Results from './Results';

function Quiz({ questions, categories }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [question, setQuestion] = useState(questions);

  const currentCategorie = (id) => {
    setQuestion(questions.filter((quest) => quest.categorie === id));
    setSelectedCategory(id);
    setCurrentQuestionIndex(0);
  };

  const onClickVariant = (index) => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    if (index === currentQuestion.isCorrect) {
      setCorrect(correct + 1);
    }
  };
  const restartQuizHandle = () => {
    setQuestion(question);
    setCurrentQuestionIndex(0);
    setCorrect(0);
    setSelectedCategory(null);
  };

  const finishQuizHandle = () => {
    setCurrentQuestionIndex(question.length);
  };
  const currentQuestion = question[currentQuestionIndex];

  const percent = Math.floor((currentQuestionIndex / question.length) * 100);


  return (
    <>
      {selectedCategory !== null && (
        <div className="progress">
          <div style={{ width: `${percent}%` }} className="progress__inner" />
        </div>
      )}

      {currentQuestionIndex !== question.length ? (
        <div>
          {selectedCategory ? (
            <Question
              questions={questions}
              title={currentQuestion.title}
              answers={currentQuestion.answers}
              onClickVariant={onClickVariant}
              restartQuiz={restartQuizHandle}
              finishQuizHandle={finishQuizHandle}
            />
          ) : (
            <Categories categories={categories} currentCategorie={currentCategorie} />
          )}
        </div>
      ) : (
        <Results correct={correct} questions={question} restartQuiz={restartQuizHandle} />
      )}
    </>
  );
}

export default Quiz;
