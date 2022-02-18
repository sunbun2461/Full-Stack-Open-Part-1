
const Header = (props) => {
 console.log(props)
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}
const Part = (props, two) => {
  return (
    <>
      <p>{props.part1} </p>
      <p>{props.part2} </p>
      <p>{props.part3} </p>     
    </>
  )
}
const Content = (props) => {
 console.log(props)
  return (
    <>
    <Part part1={props.part1} />
    <Part part2={props.part2} />
    <Part part3={props.part3} />
     
    </>
  )
}

const Total = (props) => {
 console.log(props)
  return (
    <>
      <p>Number of exercises {props.part1 + props.part2 + props.part3}</p>
    </>
  )
}
const App = () => {
  const course = "Half Stack application development"
  const part1 = {
    name: 'Fundamentals of React',
    exercises : 10 
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises : 7
  }
  const part3 = {
       name: 'State of a component',
  exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content part1={part1.name + ' ' + part1.exercises} part2={part2.name + ' ' + part2.exercises} part3={part3.name + ' ' + part3.exercises}  />
      <Total part1={part1.exercises} part2={part2.exercises} part3={part3.exercises}/>
    </div>  
  );
}

export default App;
