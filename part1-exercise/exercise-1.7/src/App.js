
import { useState } from 'react'



const Button = (props) => (
  <button onClick={props.stateClick}>
    {props.text}
  </button>
)

const App = () => {
  // save clicks of each button to its own state 
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const stateGood = () => {
    setGood(good + 1)
    setAll(all + 1)
    setAverage(all / 3)
    setPositive(good / all)
  }
  const stateNeutral = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)
    setAverage(all / 3)
    setPositive(good / all)
  }
  const stateBad = () => {
    setBad(bad + 1)
    setAll(all + 1)
    setAverage(all / 3)
    setPositive(good / all)
  }

  return (
    <div>
      <h2><strong>give feedback</strong></h2>
      <Button stateClick={stateGood} text='good' />
      <Button stateClick={stateNeutral} text='neutral' />
      <Button stateClick={stateBad} text='bad' />
      <h2><strong>statistics</strong></h2>
      <p>good{` ` + good}<br />
        neutral{` ` + neutral}<br />
        bad{` ` + bad}<br />
        all{` ` + all}<br />
        average{` ` + average}<br />
        positive{` ` + positive * 100 + `%`}</p>
    </div>
  )

}
export default App