import React ,{useState,useEffect} from 'react';
import instance from './axios';
import YouTube from 'react-youtube'
import './Rows.css'
function Rows({title,fetchUrl,islarge}) {
    /* var isPlaying=false; */
    const [movies,setMovies]=useState([]);
    const [video_key,setKey]=useState()
    const handleVideo=(movie,isPlaying)=>{
        isPlaying=!isPlaying;
        
                async function fetchVideo(){
                    
                    
                    const request_video=await instance.get("movie/"+movie.id+"/videos?api_key=077a75b3e09bdccdfcc9e193a812f0c2&language=en-US")
                    setKey(request_video.data?.results[0]?.key||"nill")
                    console.log(request_video.data?.results[0]?.key||"nill")
                    return request_video;
                }
                fetchVideo()
           
         
       console.log(video_key)
        console.log(movie.title)
       
    }
    useEffect(()=>{ //renders every time refreshes
        async function fetchData(){
            const request= await instance.get(fetchUrl)
            setMovies(request.data.results);
            return request;
        }
        fetchData()
    },[fetchUrl]);
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
    };
    console.log(movies)
    console.log(typeof(movies))
    
    const base_url='https://image.tmdb.org/t/p/original/'
   var isPlaying=false
   
    return (
        <div className="row_content">
            <h2>{title}</h2>
            <div className="row_posters ">
                {movies.map((movie)=>{
                return <img 
                        key={movie.id}
                        onClick={()=>handleVideo(movie,isPlaying)}
                        className={`bait ${islarge&& "row_large"}`}
                        src={`${base_url}${islarge?movie.poster_path:movie.backdrop_path}`} alt={movie.name}></img>
                })}   
            </div>
            {video_key&&<YouTube videoId={video_key} opts={opts}></YouTube>}
            
        </div>
    )
}

export default Rows
