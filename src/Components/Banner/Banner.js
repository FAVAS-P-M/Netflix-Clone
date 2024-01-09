import React,{useEffect} from 'react'
import './Banner.css';
import {API_KEY,imageUrl} from '../../constants/constants'
import axios from '../../axios';
import {useState} from 'react'


function Banner() {
  const [movie,setMovie] = useState()
  useEffect(()=>{
    try {
      
      axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
        console.log(response.data.results[0])
        setMovie(response.data.results[0])
      })
    } catch (error) {
      console.log("this is the xios error....",error);
      
    }
  },[])
  
  return (
    <div style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path:""})`}} className='banner'>
        <div className='content'>
            <h1 className='title'>{movie ? movie.title: ""}</h1>
            <div className='banner_buttons'>
                <button className='button'>Play</button>
                <button className='button'>My List</button>
            </div>
            <h1 className='description'>{movie ? movie.overview : ""}</h1>
            </div>
            <div className='fade_bottom'></div>
      
    </div>
  )
}

export default Banner;
