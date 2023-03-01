import { Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'

const InitComponent = () => {
    console.log("Initiating...");
    return (
        <Stack sx={{position: "absolute", display: "grid", placeItems: "center", background: "#0e0000", height: "100vh", width: "100%", zIndex: "2"}}>
            <Typography className="slowFadeLoop" sx={{fontFamily: "valorax", fontSize: "2rem"}}>
                Click anywhere to access the system
            </Typography>
        </Stack>
    )
}

export default InitComponent