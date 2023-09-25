import React, { useEffect, useState } from "react";
import "./App.css";

const questionsData = [
  {
    question: "هل السماء زرقاء؟",
  },
  {
    question: "هل الون الأزرق بالإنجليزية هو(blue)؟",
  },
  {
    question: "هل انتا جميل",
  },
];

function App() {
  const [countTrue, setCountTrue] = useState(0);
  const [countFalse, setCountFalse] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(null);

  const getRandomIndex = () => {
    return Math.floor(Math.random() * questionsData.length);
  };

  const changeQuestion = () => {
    setCurrentQuestion(questionsData[getRandomIndex()]);
  };

  const handleClick = (answeredQuestion) => {
    currentQuestion.rightAnswer === answeredQuestion
      ? setCountTrue(countTrue + 1)
      : setCountFalse(countFalse + 1);
    changeQuestion();
  };

  useEffect(() => {
    changeQuestion();
  }, []);

  return (
    <div className="app-container">
      <h1>Welcem</h1>
      <div className="score">
        <p>True: {countTrue}</p>
        <p>False: {countFalse}</p>
      </div>
      {currentQuestion ? (
        <div className="question-container">
          <p>{currentQuestion.question}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <div className="card">
        <button className="yes-button" onClick={() => handleClick(currentQuestion.rightAnswer)}>
          Yes
        </button>
        <button className="no-button" onClick={() => handleClick("wrong")}>
          No
        </button>
      </div>
    </div>
  );
}

export default App;
