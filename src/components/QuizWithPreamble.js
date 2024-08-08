import React, { useState, useEffect } from "react";
import Quiz from "./Quiz";
import "./QuizWithPreambleStyles.css";
import { Link } from "react-router-dom";

const quizData = [
  {
    question: "What is the first step in AA's 12-step program?",
    options: [
      "Came to believe a Power greater than ourselves could restore us to sanity",
      "Made a decision to turn our will and our lives over to the care of God",
      "We admitted we were powerless over alcohol",
      "Made a searching and fearless moral inventory of ourselves",
    ],
    answer: "We admitted we were powerless over alcohol",
  },
  {
    question: "What is the main book of AA called?",
    options: [
      "Alcoholics Anonymous Guide",
      "The Big Book",
      "The AA Manual",
      "Steps to Sobriety",
    ],
    answer: "The Big Book",
  },
  {
    question: "What year was AA founded?",
    options: ["1925", "1935", "1945", "1955"],
    answer: "1935",
  },
  {
    question: "Who are the founders of AA?",
    options: [
      "John D. and Mark S.",
      "William J. and Robert T.",
      "George M. and Henry L.",
      "Bill W. and Dr. Bob",
    ],
    answer: "Bill W. and Dr. Bob",
  },
  {
    question: "What does the AA acronym HALT stand for?",
    options: [
      "Happy, Alert, Lucky, Thoughtful",
      "Hungry, Angry, Lonely, Tired",
      "Hopeful, Active, Loving, Trustworthy",
      "Healthy, Agile, Lively, Thriving",
    ],
    answer: "Hungry, Angry, Lonely, Tired",
  },
  {
    question: "What is the purpose of a 'sponsor' in AA?",
    options: [
      "To guide newcomers through the 12 steps",
      "To provide financial support",
      "To host AA meetings",
      "To create promotional materials",
    ],
    answer: "To guide newcomers through the 12 steps",
  },
  {
    question: "What is the Serenity Prayer?",
    options: [
      "Lord, give me strength to face my fears and patience to understand my journey.",
      "Dear God, help me find peace within myself and the courage to stay sober.",
      "Heavenly Father, provide me with guidance and support as I walk this path.",
      "God, grant me the serenity to accept the things I cannot change, courage to change the things I can, and wisdom to know the difference.",
    ],
    answer:
      "God, grant me the serenity to accept the things I cannot change, courage to change the things I can, and wisdom to know the difference.",
  },
  {
    question: "How often are AA meetings typically held?",
    options: ["Daily", "Weekly", "Monthly", "Annually"],
    answer: "Daily",
  },
  {
    question: "What is AA's primary purpose?",
    options: [
      "To provide medical treatment for alcoholics",
      "To promote awareness about alcoholism",
      "To stay sober and help other alcoholics achieve sobriety",
      "To organize social events for members",
    ],
    answer: "To stay sober and help other alcoholics achieve sobriety",
  },
  {
    question: "What is the AA slogan 'One Day at a Time' meant to convey?",
    options: [
      "Plan your sobriety for the future",
      "Focus on staying sober for just today",
      "Reflect on past mistakes",
      "Celebrate annual milestones",
    ],
    answer: "Focus on staying sober for just today",
  },
];

const getRandomQuestions = (numQuestions) => {
  const shuffled = [...quizData].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, numQuestions);
};

const QuizWithPreamble = () => {
  const [selectedQuestions, setSelectedQuestions] = useState([]);

  useEffect(() => {
    setSelectedQuestions(getRandomQuestions(3));
  }, []);

  // const handleDownloadPreamble = () => {
  //   const element = document.createElement("a");
  //   const file = new Blob(["Your preamble content here..."], {
  //     type: "text/plain",
  //   });
  //   element.href = URL.createObjectURL(file);
  //   element.download = "Preamble.txt";
  //   document.body.appendChild(element);
  //   element.click();
  // };

  const handleOpenPreamble = () => {
    window.open("/aa-preamble.pdf", "_blank");
  };

  return (
    <div className="quiz-with-preamble-container">
      <div className="preamble-section">
        <h1>View AA Preamble</h1>
        <p>
          Click below to view the AA Preamble and understand our core principles
          and mission.
        </p>
        <Link onClick={handleOpenPreamble} className="btn">
          View Preamble
        </Link>
      </div>
      <div className="quiz-section">
        <Quiz questions={selectedQuestions} />
      </div>
    </div>
  );
};

export default QuizWithPreamble;
