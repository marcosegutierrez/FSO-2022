import React from 'react';
import ReactDOM from 'react-dom';

const Header = props => {
  const {course} = props;
  return (
    <>
      <h1>{course}</h1>
    </>
  )
}

const Content = props => {
  const {part1, part2, part3, exercises1, exercises2, exercises3} = props;
  return (
    <>
      <Part part={part1} exercises={exercises1}/>
      <Part part={part2} exercises={exercises2}/>
      <Part part={part3} exercises={exercises3}/>
    </>
  )
}

const Total = props => {
  const {exercises1, exercises2, exercises3} = props;
  return (
    <>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </>
  )
}

const Part = props => {
  const {part, exercises} = props;
  return (
    <>
      <p>
        {part} {exercises}
      </p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development';
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <>
      <Header course={course}/>
      <Content part1={part1.name} part2={part2.name} part3={part3.name} exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises} />
      <Total exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises} />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));