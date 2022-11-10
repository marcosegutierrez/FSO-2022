import React, { useState }  from 'react';
import {createRoot} from 'react-dom/client';

const Button = ({ handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Statistics = ({stats}) => {
  const { good, neutral, bad } = stats;
  let all = good + neutral + bad;
  let avg = (good - bad) / all;
  let positive = good / all * 100;

  if (all !== 0) {
    return (
      <table>
        <tbody>
          <Statistic text="good" stats={good} />
          <Statistic text="neutral" stats={neutral} />
          <Statistic text="bad" stats={bad} />
          <Statistic text="all" stats={all} />
          <Statistic text="average" stats={avg} />
          <Statistic text="positive" stats={positive} alt="%"/>
        </tbody>
      </table>
    )
  }  
  return (
    <>
      <p>No feedback given</p>
    </>
  )
}

const Statistic = (props) => {
  return (
    <><tr><td>{props.text}</td><td>{props.stats} {props.alt}</td></tr></>
  )
}


const App = () => {
  const [stats, setStats] = useState(
    {
      good: 0,
      neutral: 0,
      bad: 0
    }
  );

  const handleGood = () => {
    const newStats = {
      ...stats,
      good: stats.good + 1
    }
    setStats(newStats);
  }

  const handleNeutral = () => {
    const newStats = {
      ...stats,
      neutral: stats.neutral + 1
    }
    setStats(newStats);
  }

  const handleBad = () => {
    const newStats = {
      ...stats,
      bad: stats.bad + 1
    }
    setStats(newStats);
  }

  return (
    <>
      <h1>Give feedback</h1>
      <Button handleClick={handleGood} text="good" />
      <Button handleClick={handleNeutral} text="neutral" />
      <Button handleClick={handleBad} text="bad" />
      <h1>Statistics</h1>
      <Statistics stats={stats} />
    </>
  )
}

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <App />  
);
