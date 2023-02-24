import { Box } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'

const Feed = () => {
  return (
    <Stack sx={{display: "grid", textAlign: "center", placeItems: "center", height: "100vh"}} className="bigText">
      <Box sx={{fontSize: "4.5rem"}} className="glitchContainer">
        <h4 className="glitch mainlayer layers" data-text="Meet the future of music"><span>Meet the future of music</span></h4>
      </Box>
    </Stack>
  )
}

export default Feed