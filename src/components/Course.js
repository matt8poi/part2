import React from 'react'

const Header = ({ text }) => <div><h1>{text}</h1></div>

const Content = ({ parts }) => {
    const total = parts.reduce((s,p) => (s + p.exercises),0)

    return (
        <div>
            {parts.map(part =>
                <Part key={part.id} name={part.name} exercises={part.exercises}/>
            )}
            <Total total={total}/>
        </div>
    )
}

const Part = ({ name, exercises }) => <div><p>{name} {exercises}</p></div>

const Total = ({ total }) => <div>total of {total} exercises</div>

const Course = ({ course }) => {
    return (
        <div>
        <Header text={course.name} />
        <Content parts={course.parts}/>
        </div>
    )
}

export default Course