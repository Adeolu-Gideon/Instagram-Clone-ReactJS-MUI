//import React from "react";
//import { Container } from "react-bootstrap";
import { Slide } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css'
import merlin from '../assets/merlin.webp'
import Container from '@mui/material/Container';
import './CategorieSlider.css'
import React, { useEffect,useState } from 'react'
import axios from 'axios'

const CategoriesSlider = () => {
  const [allMovies, setallMovies] = useState([])
  const movieUrl = "https://imdb-api.com/en/API/MostPopularMovies/k_88ke3cm5"
  const [isloading, setisloading] = useState(true)
 
  useEffect(() => {
    console.log(`yo yo yo yo`)
    makeRequest()
  }, [])
  const makeRequest = () => {
    axios.get(movieUrl).then((response) => {
      console.log(response.data.items)
      setallMovies(response.data.items)
      setisloading(false)
    }).catch((err) => {
      console.log(err)
    })
    
  }
  const style = {
    textAlign: 'center',
    background: '#141414',
    padding: '15px 15px',
    fontSize: '30px',
    width: '650px',
    height: '350px'
  };

  const properties = {
    duration: 1000,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: false,
    indicators: false,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 2,
              slidesToScroll: 1,
              height: '120px'
            }
        }
    ]
  };

  return (
    <Container className="rounded">
      <div>
        <Slide {...properties}>
          <div style={style}>{isloading? <div>is loading ...</div>:
        allMovies.map((user)=>(
        <div key={user.id }>
            <div>{user.title}</div>
            <img src={user.image} alt="" />
        </div>
        
        ))
    }</div>
          
        </Slide>
      </div>
    </Container>
  );
};

export default CategoriesSlider;