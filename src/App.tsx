import React, { useEffect, useState } from 'react'
import './App.css'

const datas = [
  [10, 30, 40, 20],
  [10, 40, 30, 20, 50, 10],
  [60, 30, 40, 20, 30],
]
let i = 0
function App() {
  const [data, setData] = useState<number[]>([])

  useEffect(() => {
    changeData()
  }, [])

  const changeData = () => {
    setData(datas[i++])
    if (i === datas.length) i = 0
  }
  return (
    <div className='App'>
      <h2>Graphs with React</h2>
      <button onClick={changeData}>Change Data</button>
      <h3>{data}</h3>
    </div>
  )
}

export default App
