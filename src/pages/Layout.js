import { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
const music = new Audio('./music/sound.mp3')

const Layout = () => {
  const [isActive, setActive] = useState(false);
  const toggleActive = () => {
    setActive(!isActive);
    if(isActive) {
    music.play()
    }
    if(!isActive) {
      music.pause()
      music.currentTime = 0;
      console.log(music)
    }
  };

  return (
    < >
     <div className="header">
        <Link className="header-text" to="/">Home</Link>
     
     
        <Link className="header-text" to="/blogs">Blogs</Link>
      
     
        <Link className="header-text" to="/contact">Contact</Link>

        <img className="music" 
          onClick={toggleActive}
          src={isActive ? './img/noSound.png' : './img/sound.png'}>
        </img>
      </div>

      
      <Outlet />
    </>
  )
};

export default Layout;