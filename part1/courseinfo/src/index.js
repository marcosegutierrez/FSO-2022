import React from 'react';
import ReactDOM from 'react-dom';

const Header = props => {
  const {course} = props;
  return (
    <>
      <h1>{course.name}</h1>
    </>
  )
}

const Content = props => {
  const {parts} = props;
  return (
    <>
      <Part part={parts[0].name} exercises={parts[0].exercises}/>
      <Part part={parts[1].name} exercises={parts[1].exercises}/>
      <Part part={parts[2].name} exercises={parts[2].exercises}/>
    </>
  )
}

const Total = props => {
  const {parts} = props;
  return (
    <>
      <p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
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
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  
  return (
    <>
      <Header course={course}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));