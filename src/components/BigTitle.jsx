import { Box, Stack } from '@mui/system'
import React from 'react'

const BigTitle = () => {
  return (
    <Stack sx={{display: "grid", textAlign: "center", placeItems: "center", minHeight: "87vh"}} className="bigText">
      <Box sx={{fontSize: "4.5rem"}} className="glitchContainer below">
        <h4 className="glitch mainlayer layers" data-text="Meet the future of music"><span>Meet the future of music</span></h4>
      </Box>
    </Stack>
  )
}

export default BigTitle