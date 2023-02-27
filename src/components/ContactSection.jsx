import { Link, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const ContactSection = () => {
  return (
    <Box sx={{display: 'flex', width: "45%", flexDirection: "column", marginRight: "auto", gap: 1, padding: 6}}>
        <Typography variant='h3' fontFamily={"valorax"} className="title" textAlign="right">
            ----------------- cOntact 
        </Typography>
        <Box sx={{display: "flex", flexDirection: "row-reverse", gap: 3}}>
            <div className="digitalImage contactImage"/>
            <Box sx={{display: "flex", gap: 1, flexDirection: "column", textAlign: "justify", width: "100%"}}>
              <Box sx={{display: "flex", justifyContent: 'space-between'}}>
                <Typography variant='h5' fontFamily={"valorax"}>
                    Email:
                </Typography>
                <Link className="noStyle" href='mailto:musicbyblakk@gmail.com'>
                  <Typography variant='h5' fontFamily={"valorax"}>
                      musicbyblakk@gmail.com
                  </Typography>
                </Link>
              </Box>
              <Box sx={{display: "flex", justifyContent: 'space-between'}}>
                <Typography variant='h5' fontFamily={"valorax"}>
                    Discord:
                </Typography>
                <Link className="noStyle" href='https://discordapp.com/users/681885446455689216' target="_blank" referrerPolicy='no-referrer'>
                  <Typography variant='h5' fontFamily={"valorax"}>
                      DXVIL デビル#3245
                  </Typography>
                </Link>
              </Box>
              <Box sx={{display: "flex", justifyContent: 'space-between'}}>
                <Typography variant='h5' fontFamily={"valorax"}>
                    Instagram:
                </Typography>
                <Link className="noStyle" href='https://instagram.com/dxvilmusic' target="_blank" referrerPolicy='no-referrer'>
                  <Typography variant='h5' fontFamily={"valorax"}>
                      @dxvilmusic
                  </Typography>
                </Link>
              </Box>
              <Box sx={{display: "flex", justifyContent: 'space-between'}}>
                <Typography variant='h5' fontFamily={"valorax"}>
                    Twitter:
                </Typography>
                <Link className="noStyle" href='https://twitter.com/dxvil_music' target="_blank" referrerPolicy='no-referrer'>
                  <Typography variant='h5' fontFamily={"valorax"}>
                      @dxvil_music
                  </Typography>
                </Link>
              </Box>
              --------------------------------------------------------------
              <Box sx={{display: "flex", justifyContent: 'space-between'}}>
                <Typography variant='h5' fontFamily={"valorax"}>
                    Target type:
                </Typography>
                <Typography variant='h5' fontFamily={"valorax"}>
                    User
                </Typography>
              </Box>
              <Box sx={{display: "flex", justifyContent: 'space-between'}}>
                <Typography variant='h5' fontFamily={"valorax"}>
                    Channel tag:
                </Typography>
                <Typography variant='h5' fontFamily={"valorax"}>
                    Alpha
                </Typography>
              </Box>
              <Box sx={{display: "flex", justifyContent: 'space-between'}}>
                <Typography variant='h5' fontFamily={"valorax"}>
                    Is Alive:
                </Typography>
                <Typography variant='h5' fontFamily={"valorax"}>
                    True
                </Typography>
              </Box>
              <Box sx={{display: "flex", justifyContent: 'space-between'}}>
                <Typography variant='h5' fontFamily={"valorax"}>
                    Out of the mind:
                </Typography>
                <Typography variant='h5' fontFamily={"valorax"}>
                    True
                </Typography>
              </Box>
              <Box sx={{display: "flex", justifyContent: 'space-between'}}>
                <Typography variant='h5' fontFamily={"valorax"}>
                    Mind fragmentation:
                </Typography>
                <Typography variant='h5' fontFamily={"valorax"}>
                    Critical
                </Typography>
              </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default ContactSection