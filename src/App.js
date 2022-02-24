import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
import {data} from './data'

const url = "https://mocki.io/v1/b2347c40-4743-4bec-ae37-89a21692ea8d"


export const Appcontext = React.createContext()

function App() {

  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])
  const [readMore, setReadMore] = useState(true)

  const fetchTours = async(url) => {
    const response = await fetch(url)
    const tours = await response.json()
    setTours(tours)
    setLoading(false)
    console.log(tours)
    
  }  
  
  const handleClick = () => {
    setReadMore(!readMore)
  }
  const handleDelete = (i) => {
     const newTours = tours.filter(el => el.id !== i)
     setTours(newTours)
    
  }

  useEffect( () => {
    fetchTours(url)
  }, [])
  if(loading){
    return (
      <main>
        loading...
      </main>
    )
  }

 if(tours.length == 0){
    return(

      <main>
        <h3>no tours</h3>
      </main>
  
    )
  }

  return (
    <Appcontext.Provider value = {{tours, readMore, setReadMore, handleDelete,handleClick}}>
    <main>
      <h3>Our Tours</h3>
      <Tours /> 
    </main>
   </Appcontext.Provider>
  )
}

export default App
