import React from 'react'
import './App.css'
import Fruit from './components/Fruit'

function App() {

  const [fruits, setFruits] = React.useState([])

  React.useEffect(() => {
    async function fetchFruits() {
      const resp = await fetch("/proxy/api/fruit/all")
      const obtainedFruits = await resp.json()
      setFruits(obtainedFruits)
  }

    fetchFruits()
  }, [])

  console.log(fruits[0])

  return (
    <>
      <h1 className='heading'>
        <span id='red-for-F'>F</span><span id='orange-for-r'>r</span><span id='yellow-for-u'>u</span><span id='green-for-i'>i</span><span id='blue-for-t'>t</span><span id='purple-for-s'>s</span>
      </h1>
      {fruits.map((fruit, index) => {
        return <Fruit fruit={fruit} key={index}/>
      })}
    </>
  )
}

export default App
