const Header = ({ course }) => <h1>{course}</h1>

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) => 
  <>
    {parts.map(part => (
        <Part key={part.id} part={part} />
    ))}
  </>

const Total = ({ parts }) => {
    let total = 0
    parts.map(part => (
        total += part.exercises
    ))

    return (
        <b>Total of {total} exercises</b>
    )
}

const Course = ({ course }) => {
    return (
        <>
        <Header course={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
        </>
    )
}

const App = () => {
    const course = {
        id: 1,
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10,
                id: 1,
            },
            {
                name: 'Using props to pass data',
                exercises: 7,
                id: 2,
            },
            {
                name: 'State of a component',
                exercises: 14,
                id: 3,
            },
            {
                name: 'Redux',
                exercises: 11,
                id: 4,
            },
        ],
    }  

    return <Course course={course} />
}

export default App