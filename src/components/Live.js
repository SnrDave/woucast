import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Link } from 'react-router-dom';
import './Live.css';

function Live() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleClick = (id) => {
    window.location.href = `/watch/${id}`;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://live-tv-api1.p.rapidapi.com/channels',
          {
            headers: {
              'X-RapidAPI-Key': 'a75c226983msh31b189d2e7babeep179971jsneee3413fbc73',
              'X-RapidAPI-Host': 'live-tv-api1.p.rapidapi.com',
              'Content-Type': 'application/json',
            },
          }
        );

        const channels = response.data.channels;
        setData(channels);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='live'>
      {/* Display the fetched data */}
      {loading ? (
        <CircularProgress className='spinner' /> // Display loading state
      ) : (
        data.map((item) => (
          <React.Fragment key={item.id}>
            <br />
            <Link to={`/watch/${item.id}`} className='list'>
              <img
                className='banner'
                onClick={() => handleClick(item.id)}
                src={item.thumbnail}
                alt={item.name}
                width={100}
                height={150}
              />
              <br />
              {item.name}
              <br />
              <br />
              {/* Display channel description */}
              {/* <li className='list'>{item.description}</li>
              <br /> */}
              <h4 className='counter'>{item.liveCounter}</h4>
              <hr />
            </Link>
          </React.Fragment>
        ))
      )}
    </div>
  );
}

export default Live;
