import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import './Watch.css';

function Watch() {
  const { id } = useParams();
  const [link, setLink] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLink = async () => {
      try {
        const response = await axios.get(`https://live-tv-api1.p.rapidapi.com/Links/${id}`, {
          headers: {
            'X-RapidAPI-Key': 'a75c226983msh31b189d2e7babeep179971jsneee3413fbc73',
            'X-RapidAPI-Host': 'live-tv-api1.p.rapidapi.com',
            'Content-Type': 'application/json',
          },
        });

        const linkData = response.data;
        setLink(linkData);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchLink();
  }, [id]);

  return (
    <div className='watch'>
      {loading ? (
        <CircularProgress className='spinner' /> // Display loading state
      ) : (
        <>
          <h1>{link.name}</h1>
          <div className='player'>
            <ReactPlayer
              url={link.streamUrl}
              playing={true}
              controls={true}
              width='100%'
              height='auto'
            />
          </div>
        </>
      )}
    </div>
  );
}

export default Watch;
