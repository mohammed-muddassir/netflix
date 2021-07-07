import React,{useState,useEffect} from 'react'
import './Banner.css'
import Nav from './Nav'
import instance from './axios'
import requests from './requests'

function Banner({fetchUrl}) {
    
    const [recent,setRecent]=useState([]);
   
    useEffect(() => {
        async function fetchData(){
            const request= await instance.get(requests.fetchNetflixOriginals)
            setRecent(request.data.results[Math.floor(Math.random()*request.data.results.length-1)])
            console.log(request)
            return request
        } 
        fetchData()   
    
    }, [])
    console.log(recent)
  
    
   function truncate(str, n){
        return (str?.length > n) ? str.substr(0, n-1) + '....' : str;
      };
     
     
    return (
        <header 
            
           className="banner"
            style={
               {
                   backgroundSize:'cover',
                   backgroundImage:`url("https://image.tmdb.org/t/p/original/${recent.backdrop_path}")`,
                   backgroundPosition:'center'
                  
               }
            }
        >
          <div className="banner_content">
                  <Nav></Nav>
                  <div className="banner_recent">
                  
                  <h1>{recent.title||recent.original_name||recent.name}</h1>
                  <div className="banner_buttons">
                      <button className="recent_btn">Play</button>
                      <button className="recent_btn">My List</button>
                  </div>
                  <h4>{truncate(recent.overview,100)}</h4>
                  
                  </div>
                  
              
            
            </div>
            <div className="grad">
                         
                  </div>
        </header>
    )
}

export default Banner
