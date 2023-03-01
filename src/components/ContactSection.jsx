import { Link, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const ContactSection = () => {
  

  return (
    <Box sx={{display: 'flex', width: "45%", flexDirection: "column", marginRight: "auto", gap: 1, padding: 6}} >
        <Typography variant='h3' fontFamily={"valorax"} className="title below" textAlign="right">
            --------------------- 1nf0 
        </Typography>
        <Box sx={{display: "flex", flexDirection: "row-reverse", gap: 3}}>
            <div className="digitalImage contactImage below"/>
              <Box className="below" sx={{display: "flex", gap: 1, flexDirection: "column", textAlign: "justify", width: "100%"}}>
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
                  <Typography variant='h5' fontFamily={"valorax"} className="glitch mainlayer layers" data-text="Critical">
                      <span>Critical</span>
                  </Typography>
                </Box>
                <Box sx={{display: "flex", justifyContent: 'space-between'}}>
                  <Typography variant='h5' fontFamily={"valorax"}>
                      Project initialized:
                  </Typography>
                  <Typography variant='h5' fontFamily={"valorax"}>
                      50%
                  </Typography>
                </Box>
                <Box sx={{display: "flex", justifyContent: 'space-between'}}>
                  <Typography variant='h5' fontFamily={"valorax"}>
                      Phase:
                  </Typography>
                  <Typography variant='h5' fontFamily={"valorax"}>
                      1
                  </Typography>
              </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default ContactSection
