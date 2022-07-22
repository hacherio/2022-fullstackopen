const Header = (head) => {
  return (<h1>{head.course}</h1>)
};

const Total = (tot) => {
  let total = 0;
  tot.parts.forEach(part => total += part.exercises)
  return (<p>Number of exercises {total}</p>)
};

const Content = (con) => {
  return (
    <div>
      <Part part={con.parts[0]} />
      <Part part={con.parts[1]} />
      <Part part={con.parts[2]} />
    </div>
  )
    
}

const Part = (prop) => {
  return (
    <p>
      {prop.part.name} {prop.part.exercises}
    </p>
  )
}

const App = () => {
  // const-definitions
  const course = {
    name: 'Half Stack application development',
    parts: [
      {name: 'Fundamentals of React', exercises: 10},
      {name: 'Using props to pass data', exercises: 7},
      {name: 'State of a component', exercises: 14}
    ]
  };


  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App