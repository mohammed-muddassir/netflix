import React,{useState,useEffect} from 'react'
import './Nav.css'
import logo from './images/netflix_logo_icon_170918.png'
import avatar from './images/Netflix-avatar.png'
function Nav() {
    const [show,setNavBlack]=useState('false');
    useEffect(() => {
      window.addEventListener('scroll',()=>{
        if(window.scrollY>100){
          setNavBlack(true)
        }
        else{
          setNavBlack(false)
        }
        return()=>{
          window.removeEventListener('scrollk')
        }
      })
      
    }, [])
    return (
        <div className={`nav ${show&&"nav-bar"}`}>
                  <img 
                   className="netflix-logo"
                    src={logo} alt="netflix_logo"/>
                    <img
                      className="netflix-avatar"
                      src={avatar} alt="netflix-avatar"
                    />
                    
                    
         </div>
    )
}

export default Nav
