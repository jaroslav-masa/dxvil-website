import { Stack } from '@mui/system'
import { useState } from 'react';
import { NavBar, Feed, CursorEffect, InitComponent } from './components'

import backgroundSound from './assets/sounds/background_loop.mp3';

function App() {
  const [init, setInit] = useState(true);

  document.body.addEventListener('mousedown',(e) => {
    setInit(false)
  });

  return (
    <Stack>
        
        {init ? <InitComponent />: <audio src={backgroundSound} autoPlay loop></audio>}
        <CursorEffect/>
        <NavBar/>
        <Feed sx={{alignContent: "center"}}/>
    </Stack>
  )
}

export default App
