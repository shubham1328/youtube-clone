import React from 'react'

const VideoCard = (props) => {
    const {info} = props;
    if (!info) return;
    const {snippet:{channelTitle, title, thumbnails}, statistics } = info;
  return (
    <div className='p-2 m-2 mb-4 w-72 shadow-lg h-[100%]'>
        <img className='rounded-lg' alt='thumbnails' src={thumbnails.medium.url}/>
        <ul>
            <li className='font-bold py-2'>{title}</li>
            <li className='text-lg font-medium'>{channelTitle}</li>
            <li className=''>{statistics.viewCount} views</li>
        </ul>
    </div>
  )
}

export default VideoCard