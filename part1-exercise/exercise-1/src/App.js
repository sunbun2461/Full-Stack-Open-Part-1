
const Header = (props) => {
 console.log(props)
  return (
    <>
      <h1>{props.course.name}</h1>
    </>
  )
}
const Part = (props) => {
  return (
    <>
        <p>{ props.names[0].name } { props.exercise[0].exercises }</p>
        <p>{ props.names[1].name } { props.exercise[1].exercises }</p>
        <p>{ props.names[2].name } { props.exercise[2].exercises }</p>
    </>
  )
}
const Content = (props) => {
 console.log(props)
  return (
    <>
      <Part names={ props.names } exercise={ props.exercise } />
  
    </>
  )
}

const Total = (props) => {
 console.log(props)
  return (
    <>
      <p>Number of exercises { props.exercise[0].exercises + props.exercise[1].exercises + props.exercise[2].exercises}</p>
    </>
  )
}
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
    {
    name: 'Fundamentals of React',
    exercises : 10 
    },
    {
    name: 'Using props to pass data',
    exercises : 7
    },
    {
       name: 'State of a component',
  exercises: 14
    }
  ]
}
  return (
    <div>
      <Header course={ course } />
      <Content names={ course.parts } exercise={ course.parts } />
      <Total exercise={ course.parts }/>
    </div>  
  );
}

export default App;
