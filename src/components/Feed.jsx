import { Box, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import { BigTitle, AboutSection, ContactSection } from '.'


const Feed = () => {
  return (
    <Stack sx={{maxHeight: "87.5vh", overflowY: "auto"}}>
      <BigTitle/>
      <AboutSection/>
      <ContactSection/>
    </Stack>
  )
}

export default Feed