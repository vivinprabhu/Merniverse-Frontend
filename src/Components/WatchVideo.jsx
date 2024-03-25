import React from 'react'

import tutorial from "../Assests/images/Tutorial.mp4"

const WatchVideo = () => {
  return (
    <div>
        <div className="video">
            <video controls>
                <source src={tutorial} type="video/mp4" />
            </video>
            <a href="https://youtu.be/I7EDAR2GRVo">Video source: Perdo Tech - YouTube</a>
        </div>
    </div>
  )
}

export default WatchVideo