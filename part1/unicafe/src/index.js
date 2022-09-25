import React, { useState }  from 'react';
import ReactDOM from 'react-dom';

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
      <>
        <Statistic text="good" stats={good} />
        <Statistic text="neutral" stats={neutral} />
        <Statistic text="bad" stats={bad} />
        <Statistic text="all" stats={all} />
        <Statistic text="average" stats={avg} />
        <Statistic text="positive" stats={positive} alt="%"/>
      </>
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
    <><p>{props.text} {props.stats} {props.alt}</p></>
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

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
