import { Stack } from '@mui/system'
import React from 'react'
import { BigTitle, AboutSection, ContactSection, Footer, TrackList } from '.'


const Feed = () => {
  return (
    <Stack sx={{maxHeight: "87.5vh", overflowY: "auto"}}>
      <BigTitle/>
      <TrackList/>
      <AboutSection/>
      <ContactSection/>
      <Footer/>
    </Stack>
  )
}

export default Feed