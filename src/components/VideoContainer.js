import React, { useEffect, useState } from 'react'
import { YOUTUBE_API } from '../utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos()
  },[]);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();
    setVideos(json.items);
  }
  return (
    <div className='flex flex-wrap h-[100%]'>
      {videos.map((video) => 
        <Link className='py-2' key={video.id} to={"/watch?v="+video.id}><VideoCard key={video.id} info={video}/></Link>
      )}
    </div>
  )
}

export default VideoContainer