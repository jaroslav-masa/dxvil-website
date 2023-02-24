import { Stack } from '@mui/system'
import { NavBar, Feed} from './components'

function App() {
  return (
    <Stack display={"flex"}>
      <NavBar/>
      <Feed sx={{alignContent: "center"}}/>
    </Stack>
  )
}

export default App
