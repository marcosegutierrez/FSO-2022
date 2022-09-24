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

  if (all === 0) avg = 0;
  if (good === 0) positive = 0;

  return (
    <>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>average {avg}</p>
      <p>positive {positive}%</p>
    </>
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

  // console.log(all.all);
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
