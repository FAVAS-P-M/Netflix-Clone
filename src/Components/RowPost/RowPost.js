import React,{useEffect,useState} from 'react';
import './RowPost.css';
import Youtube from 'react-youtube';
import axios from '../../axios';
import {imageUrl,API_KEY} from '../../constants/constants'

function RowPost(props) {
  const [movies,setMovies]=useState([])
  const [urlId,seturlId]=useState('')
  useEffect(()=>{
axios.get(props.url).then((response)=>{
  console.log(response.data)
  setMovies(response.data.results)
// }).catch(err=>{
//   alert('network error')
})
  },[])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
const handelMovie=(id )=>{
console.log(id)
axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
 if(response.data.results.length!==0){
  seturlId(response.data.results[0])
 }else{
  console.log('trailer not available')
 }
})
 
}
  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
        {movies.map((obj)=>
           <img onClick={()=>handelMovie(obj.id)} className={props.isSmall ? 'smallPoster' :'poster'} alt='loading...' src={`${imageUrl+obj.backdrop_path}`}/>  
)}
       
       

        
      </div>
      { urlId &&   <Youtube opts={opts} videoId={urlId.key}/>} 
    </div>
  )
}

export default RowPost
