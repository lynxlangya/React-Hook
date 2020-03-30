import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import Demo from './Demo'
import Demo1 from './Demo1'

function Index() {
  useEffect(() => {
    console.log('useEffect => Index');
    return () => {
      console.log('%c' + '离开Index', 'color: #2ecc71; font-size: 20px;')
    }
  }, [])
  return (
    <h2>Index</h2>
  )
}

function Home() {
  useEffect(() => {
    console.log('useEffect => Home');
    return () => {
      console.log('%c' + '离开Home', 'color: #2ecc71; font-size: 20px;')
    }
  }, [])
  return (
    <h2>Home</h2>
  )
}

function Example() {
  const [count, setCount] = useState(0)
  // useEffect(() => {
  //   console.log(`useEffect => ${count} times`)
  // })
  return (
    <div>
      <p>点击了 {count}</p>
      <button onClick={() => {setCount(count+1)}}>点击</button>
      <Router>
        <ul>
          <li><NavLink to="/">Index</NavLink></li>
          <li><NavLink to="/home">Home</NavLink></li>
        </ul>
        <Route path="/" exact component={Index}></Route>
        <Route path="/home" exact component={Home}></Route>
      </Router>
    </div>
  )
}

ReactDOM.render(
  <Demo1 />,
  document.getElementById('root')
)
