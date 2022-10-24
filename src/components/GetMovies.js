import React, { useEffect,useState } from 'react'
import axios from 'axios'
function GetMovies() {
  const [allMovies, setallMovies] = useState([])
  const [error, seterror] = useState("")
  //const url = "https://imdb-api.com/en/API/MostPopularMovies/k_88ke3cm5"
  const movieUrl = "https://imdb-api.com/en/API/MostPopularMovies/k_88ke3cm5"
  const [isloading, setisloading] = useState(true)
  const [num, setnum] = useState(0)
  useEffect(()=>{
      console.log(`yo yo yo yo`)
      makeRequest()
  },[])
  const makeRequest = ()=>{
   axios.get(movieUrl).then((response)=>{
       console.log(response.data.items)
       setallMovies(response.data.items)
       setisloading(false)
   }).catch((err)=>{
    console.log(err)
   })
    
  }
  return (
    <>
    {isloading? <div>is loading ...</div>:
        allMovies.map((user)=>(
        <div key={user.id}>
            <div>{user.title}</div>
            <img src={user.image} alt="" />
        </div>
        
        ))
    }

   
    </>
  )
}

export default GetMovies