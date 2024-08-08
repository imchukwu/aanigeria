import React, { useState, useEffect } from "react";
import "./QuizStyles.css";

const Quiz = ({ questions = [] }) => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [showFeedback, setShowFeedback] = useState(false);

  useEffect(() => {
    if (questions.length > 0) {
      const randomQuestion =
        questions[Math.floor(Math.random() * questions.length)];
      setSelectedQuestion(randomQuestion);
    }
  }, [questions]);

  const handleAnswerOptionClick = (selectedOption) => {
    if (selectedOption === selectedQuestion.answer) {
      setFeedback("Correct");
    } else {
      setFeedback("Wrong, try again");
    }
    setShowFeedback(true);
  };

  if (!selectedQuestion) {
    return <div className="quiz-container">No questions available</div>;
  }

  return (
    <div className="quiz-container">
      <div className="question-section">
        <div className="question-text">{selectedQuestion.question}</div>
      </div>
      <div className="answer-section">
        {selectedQuestion.options.map((option) => (
          <button key={option} onClick={() => handleAnswerOptionClick(option)}>
            {option}
          </button>
        ))}
      </div>
      {showFeedback && <div className="feedback-section">{feedback}</div>}
    </div>
  );
};

export default Quiz;
