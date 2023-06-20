import React from 'react';
import { Link } from 'react-router-dom';
import './Event.css';
const Event = ({ imageSrc, caption, to }) => {
  

  return (
    <Link to={to} className="live-card" >
      <img src={imageSrc} alt="Live" className="live-card__image" />
      <div className="live-card__caption">{caption}</div>
    </Link>
  );
};

const App = () => {
  
  return (
    <div>
      <h1>Live TV and Radio</h1>
      <hr/>
      <div className="card-container">
        <Event 
          imageSrc="https://image.pbs.org/bento3-prod/mpb-bento-live-pbs/Images/Television/STREAM%20LIVE/2db5d48f0d_WatchLIVETV.png"
          to="/live"
          
          
        />
        <Event
          imageSrc="https://www.wgnz.com/images/listen_live.jpg"
        
        />
      </div>
    </div>
  );
};

export default App;
