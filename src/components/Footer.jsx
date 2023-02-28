import { Divider, Link, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React from 'react'

const Footer = () => {
  return (
    <Stack>
        <Divider sx={{border: "1px #e03535 solid", marginY: 2}}/>
        <Box sx={{display: "flex", flexDirection: "row", padding: 2,  justifyContent:"space-between", flexWrap: "wrap"}} className="footerContent">
            <Box sx={{display: "flex", justifyContent: 'space-between', gap: 10}}>
                <Link className="noStyle" href='mailto:musicbyblakk@gmail.com'>
                    <Typography variant='h6' fontFamily={"valorax"}>
                        Email
                    </Typography>
                </Link>
                <Link className="noStyle" href='https://discordapp.com/users/681885446455689216' target="_blank" referrerPolicy='no-referrer'>
                    <Typography variant='h6' fontFamily={"valorax"}>
                        Discord
                    </Typography>
                </Link>
                <Link className="noStyle" href='https://instagram.com/dxvilmusic' target="_blank" referrerPolicy='no-referrer'>
                    <Typography variant='h6' fontFamily={"valorax"}>
                    Instagram
                    </Typography>
                </Link>
                <Link className="noStyle" href='https://twitter.com/dxvil_music' target="_blank" referrerPolicy='no-referrer'>
                    <Typography variant='h6' fontFamily={"valorax"}>
                    Twitter
                    </Typography>
                </Link>
            </Box>
            <Box>
                Copyright {new Date().getFullYear()} - Jaroslav Masa
            </Box>
        </Box>
    </Stack>
  )
}

export default Footer