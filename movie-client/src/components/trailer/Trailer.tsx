import {useParams} from 'react-router-dom';
import ReactPlayer from 'react-player';
import './Trailer.css';

import React, { useState } from 'react'
import { Spinner } from 'react-bootstrap';

const Trailer = () => {

    const [loading, setLoading] = useState(true);
    let params = useParams();
    let key = params.ytTrailerId;

  return (
    <div className="react-player-container">
      
        {loading && 
         <div className="position-fixed top-50 start-50 translate-middle">
          <Spinner />
          </div>} 

        {(key != null) ? (
        <ReactPlayer
          controls={true}
          playing={true}
          url={`https://www.youtube.com/watch?v=${key}`}
          width='100%'
          height='100%'
          onReady={() => setLoading(false)} 
        />
      ) : null}

    </div>
  )
}

export default Trailer