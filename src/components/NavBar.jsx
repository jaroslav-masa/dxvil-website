import { VolumeMute, VolumeUp } from '@mui/icons-material';
import { Link, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React from 'react'
import useSound from 'use-sound';

import buttonHoverSound from '../assets/sounds/ui_menu_hover.wav';

const NavBar = () => {
  const spotify = "https://open.spotify.com/artist/1Ngynwc6bFIKGzRcOrBAnx";
  const github = "https://github.com/jaroslav-masa";
  const discord = "https://discord.gg/5WxWZcrSWW";

  const [playSoundHover] = useSound(buttonHoverSound);
  var mouse = document.getElementById("mouse");


  function biggerCursor() {
    mouse.style.width = "2.5rem";
    mouse.style.height = "2.5rem";
  }

  function smallCursor() {
    mouse.style.width = "1.5rem";
    mouse.style.height = "1.5rem";
  }

  function handleHover() {
    biggerCursor();
    playSoundHover(); 
  }

  return (
    <Stack sx={{display: "flex", position: "relative", width: "95vw", alignSelf: "center", padding: 3, flexDirection: {sx: "col", md: "row"}, alignItems: "center", justifyContent: {md: "space-between", sx: "center"}}}>
      <Typography variant="h2" sx={{fontFamily: "valorax"}} className="below">
        dXvil
      </Typography>
      <Box sx={{display: "flex", direction: "row", gap: "2vw", flexWrap: "wrap", justifyContent: "center"}}>
        <Link href={spotify} target="_blank" rel="noopener" className="noStyle" onMouseEnter={handleHover} onMouseLeave={smallCursor}>
          <Box className="futureBox" sx={{cursor: "pointer"}}>
            Music
          </Box>
        </Link>
        <Link href={github} target="_blank" rel="noopener" className="noStyle" onMouseEnter={handleHover} onMouseLeave={smallCursor}>
          <Box className="futureBox" sx={{cursor: "pointer"}}>
            Code
          </Box>
        </Link>
        <Link href={discord} target="_blank" rel="noopener" className="noStyle" onMouseEnter={handleHover} onMouseLeave={smallCursor}>
          <Box className="futureBox" sx={{cursor: "pointer"}}>
            Discord
          </Box>
        </Link>
      </Box>
    </Stack>
  )
}


export default NavBar