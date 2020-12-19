import React, { useEffect, useState } from 'react'
import './App.css'
import BarChart from './charts/BarChart'

const datas = [
  [10, 30, 40, 20, 98, 43, 24, 54, 65, 67, 57, 6],
  [10, 40, 30, 20, 50, 10, 34, 54, 65],
  [60, 30, 40, 20, 30, 43, 45, 56, 7, 87, 8],
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
      <BarChart width={600} height={400} data={data} />
    </div>
  )
}

export default App
