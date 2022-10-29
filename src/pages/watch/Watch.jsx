import React from 'react'
import "./Watch.scss"
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';

const Watch = () => {
  return (
    <div className='watch'>
        <div className="back">
            <ArrowBackOutlinedIcon/>
        </div>

        <video src="http://techslides.com/demos/sample-videos/small.mp4" className="video" autoPlay progress controls> </video>
    </div>
  )
}

export default Watch