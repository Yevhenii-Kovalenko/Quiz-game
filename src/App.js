import React from 'react';

import './App.css';
import Quiz from './components/Quiz';
import categories from './data/categories';
import questions from './data/questions';

function App() {
  return (
    <div className="App">
      <Quiz questions={questions} categories={categories} />
    </div>
  );
}

export default App;
