const Header = ({ course }) => <h2>{course}</h2>

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
    return (
        <b>Total of {parts.reduce((acum, part) => acum + part.exercises, 0)} exercises</b>
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

export default Course;