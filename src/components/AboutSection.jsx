import { Box, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'

const AboutSection = () => {
  /*
   <Box sx={{display: 'flex', alignSelf: "center", justifyContent: "center" , padding: 6}}>
        <h1 className="glitch mainlayer layers" data-text="L0V3"><span>Secrets</span></h1>
    </Box>
    */
    return (
        <Box sx={{display: 'flex', width: "60%", flexDirection: "column", gap: 4, padding: 6, marginLeft: "auto"}} className="below">
            <Typography variant='h3' fontFamily={"valorax"} className="title">
                abOut ----------------------------
            </Typography>
            <Box sx={{display: "flex", gap: 4}}>
                <div className="digitalImage aboutImage"/>
                <Box sx={{display: "flex", gap: 3, flexDirection: "column", width: "100%"}}>
                <Typography fontFamily={"valorax"}>
                    DXVIL, born on February 26, 2003, in Hradec Kralove, is an up-and-coming electronic music producer hailing from the Czech Republic. Raised in Havlíčkův Brod, DXVIL began his musical journey in 2016, crafting simple melodies and chord progressions on his mobile phone before transitioning to a PC. With no formal training in music theory or production, he honed his skills through experimentation and dedication.
                </Typography>
                <Typography fontFamily={"valorax"}>
                    In 2017, DXVIL was offered a recording contract from a major label, which he declined as he was unsure if it was a legitimate opportunity. Since then, DXVILhas developed his own unique style and signature sound that blends hard-hitting beats with melodic elements, drawing inspiration from a variety of genres.
                </Typography>
                <Typography fontFamily={"valorax"}>
                    Throughout his career, DXVIL has collaborated with other artists and has gained recognition for his distinctive sound. He continues to push the boundaries of electronic music and connect with fans worldwide.
                </Typography>
                <Typography fontFamily={"valorax"}>
                    Currently based in Liberec, DXVIL is a rising star in the electronic music scene, and his passion and dedication to his craft continue to drive his success.  
                </Typography>
                </Box>
            </Box>
        </Box>

  )
}

export default AboutSection