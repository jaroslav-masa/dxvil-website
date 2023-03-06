import { Stack } from '@mui/system'
import React from 'react'
import { BigTitle, AboutSection, ContactSection, Footer} from '.'


const Feed = () => {
  return (
    <Stack sx={{maxHeight: "87.5vh", overflowY: "auto"}}>
      <BigTitle/>
      <AboutSection/>
      <ContactSection/>
      <Footer/>
    </Stack>
  )
}

export default Feed