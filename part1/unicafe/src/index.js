import React, { useState }  from 'react';
import ReactDOM from 'react-dom';

const Button = ({ handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Statistics = ({text, status}) => (
  <p>{text} {status}</p>
)


const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const setToGod = () => {
    setGood(good + 1);
  }

  const setToNeutral = () => {
    setNeutral(neutral + 1);
  }

  const setToBad = () => {
    setBad(bad + 1)
  }

  return (
    <>
      <h1>Give feedback</h1>
      <Button handleClick={setToGod} text="good" />
      <Button handleClick={setToNeutral} text="neutral" />
      <Button handleClick={setToBad} text="bad" />
      <h1>Statistics</h1>
      <Statistics text="good" status={good} />
      <Statistics text="neutral" status={neutral} />
      <Statistics text="bad" status={bad} />
    </>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
