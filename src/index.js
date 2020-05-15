import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({onClick, text}) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const Stat = ({value, text}) => {
  if (text === 'positive') {
    return (
      <tbody>
        <tr>
          <td>{text}</td>
          <td>{value} %</td>
        </tr>
        </tbody>
    )
  }
  return (
    <tbody>
      <tr>
          <td>{text}</td>
          <td>{value}</td>
        </tr>
        </tbody>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good + neutral + bad
  const average = ((good * 1) + (neutral * 0) + (bad * -1)) / all
  const positive = good / all * 100

  if (all === 0) {
    return (
      <div>
        <h1>give feedback</h1>
        <Button onClick={() => setGood(good + 1)} text='good' />
        <Button onClick={() => setNeutral(neutral + 1)} text='neutral' />
        <Button onClick={() => setBad(bad + 1)} text='bad' />
        <h1>statistics</h1>
        No feedback given
      </div>
    )
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={() => setGood(good + 1)} text='good' />
      <Button onClick={() => setNeutral(neutral + 1)} text='neutral' />
      <Button onClick={() => setBad(bad + 1)} text='bad' />
      <h1>statistics</h1>
      <table>
        <Stat value={good} text='good' />
        <Stat value={neutral} text='neutral' />
        <Stat value={bad} text='bad' />
        <Stat value={all} text='all' />
        <Stat value={average} text='average' />
        <Stat value={positive} text='positive' />
      </table>
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
  )