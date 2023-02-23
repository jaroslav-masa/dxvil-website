import { Link, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React from 'react'

const NavBar = () => {
  const spotify = "https://open.spotify.com/artist/1Ngynwc6bFIKGzRcOrBAnx";
  const github = "https://github.com/jaroslav-masa";
  const discord = "https://discord.gg/5WxWZcrSWW";

  return (
    <Stack sx={{display: "flex", padding: 3, flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
      <Typography variant="h2" sx={{fontFamily: "valorax"}}>
        dxvil
      </Typography>
      <Box sx={{display: "flex", direction: "row", gap: 6}}>
        <Link href={spotify} target="_blank" rel="noopener" className="noStyle">
          <Box className="futureBox" sx={{cursor: "pointer"}}>
            Music
          </Box>
        </Link>
        <Link href={github} target="_blank" rel="noopener" className="noStyle">
          <Box className="futureBox" sx={{cursor: "pointer"}}>
            Code
          </Box>
        </Link>
        <Link href={discord} target="_blank" rel="noopener" className="noStyle">
          <Box className="futureBox" sx={{cursor: "pointer"}}>
            Discord
          </Box>
        </Link>
      </Box>
    </Stack>
  )
}

export default NavBar