import { Box } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'

const Feed = () => {
  return (
    <Stack sx={{display: "grid", textAlign: "center", placeItems: "center", height: "100vh"}} className="bigText">
      <Box sx={{fontSize: "5rem"}}>
        Meet the future
      </Box>
    </Stack>
  )
}

export default Feed