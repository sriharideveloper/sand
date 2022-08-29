import React, { useState, useEffect } from "react";
import styles from "./QuizComponent.module.css";
import QuizData from "../data/QuizData";
import Confetti from "react-confetti";
import { Link } from "react-router-dom";

const QuizComponent = () => {
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [visible, setVisible] = useState(true);
  const [selected, setSelected] = useState([]);
  let CorrectArray = [];
  QuizData.map((Quiz, index) =>
    CorrectArray.push(`quiz.${index}.${Quiz.Options[Quiz.Answer]}`)
  );
  const handleSubmit = (e) => {
    e.preventDefault();
    const GivenCorrectAnswers = CorrectArray.filter((each) =>
      selected.includes(each)
    );
    setScore(GivenCorrectAnswers.length);
    setShowScore(true);
  };
  const Quiz = (props) => {
    const handleChange = (e) => {
      selected.indexOf(`${e.target.name}.${e.target.value}`) === -1 &&
        setSelected((prev) =>
          [...prev]
            .filter((prevElement) => !prevElement.includes(e.target.name))
            .concat([`${e.target.name}.${e.target.value}`].sort())
        );
    };
    const Input = ({ Option, Index }) => (
      <div>
        <input
          type="radio"
          value={Option}
          checked={selected.includes(`quiz.${Index}.${Option}`)}
          name={`quiz.${Index}`}
          onChange={handleChange}
        />
        <label htmlFor={`quiz.${Index}`}>{Option}</label>
      </div>
    );
    return (
      <section>
        <p>{props.Question}</p>
        {props.Options.map((Option, index) => (
          <Input Option={Option} Index={props.index} key={index} />
        ))}
      </section>
    );
  };

  const TimerComponent = ({ delay, children }) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
      setTimeout(() => {
        setVisible(false);
      }, delay);
    }, [delay]);

    return visible ? <div>{children}</div> : <div />;
  };

  const restart = () => {
    setScore(0);
    setShowScore(false);
    setVisible(true);
    setSelected([]);
  };

  return (
    <div className={styles.Main}>
      <h1>Quiz</h1>
      {showScore ? (
        <>
          <TimerComponent delay={10000}>
            <Confetti />
          </TimerComponent>
          <h3>
            Your Score -{" "}
            {`${score}/${CorrectArray.length} or ${Math.floor(
              (score / CorrectArray.length) * 100
            )}%`}{" "}
            {score === CorrectArray.length
              ? "YaaY you won! Keep it up👍"
              : "You can try again but keep it up!"}
          </h3>
          <Link to="/quiz">
            <>
              <button onClick={restart}>Play Again</button>
            </>
          </Link>
        </>
      ) : (
        <>
          {QuizData.map((QuizData, index) => (
            <Quiz {...QuizData} index={index} key={index} />
          ))}
          <button onClick={handleSubmit}>submit</button>
        </>
      )}
    </div>
  );
};

export default QuizComponent;
