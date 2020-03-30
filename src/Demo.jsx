import React, { useState, createContext, useContext } from 'react';

const CountContext = createContext()

function Counter() {
  let count = useContext(CountContext)
  return (
    <h2>{count}</h2>
  )
}

function Demo() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <p>点击了 {count}</p>
      <button onClick={() => {setCount(count+1)}}>点击</button>
      <CountContext.Provider value={count}>
        <Counter />
      </CountContext.Provider>
    </div>
  )
}

export default Demo