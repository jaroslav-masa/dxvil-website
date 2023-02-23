import { Box } from '@mui/system'
import React from 'react'
import videoBg from '../assets/bg.mp4'

const Background = () => {
  return (
    <Box sx={{position: "absolute", width: "100%", height: "100vh", zIndex: -5}}>
        <video src={videoBg} sx={{width: "100%", height: "100vh"}}></video>
    </Box>
  )
}

export default Background