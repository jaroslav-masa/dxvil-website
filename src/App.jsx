import { Stack } from '@mui/system'
import { NavBar, Feed, CursorEffect } from './components'

function App() {
  return (
    <Stack>
        <CursorEffect/>
        <NavBar/>
        <Feed sx={{alignContent: "center"}}/>
        
    </Stack>
  )
}

export default App
