import React, {useState} from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';

const App = () => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState({ 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 })

  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

  const handleSetSelected = () => {
    const newSelected = Math.floor(Math.random() * anecdotes.length)
    setSelected(newSelected)
  }

  const handleSetPoints = () => {
    const copy = { ...points }
    copy[selected] += 1
    setPoints(copy)

  }

  return (
    <>
    {anecdotes[selected]}
    <p>Has {points[selected]} votes.</p>
    <button onClick={handleSetPoints}> Vote </button>
    <button onClick={handleSetSelected}> Next anecdote </button>
    </>
  )
}

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <App />  
);