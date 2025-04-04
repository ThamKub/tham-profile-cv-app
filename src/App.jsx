import { ThemeProvider } from "@mui/material"
import { darkTheme } from "./theme"
import Profile from "./views/profile"

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Profile />
    </ThemeProvider>
  )
}

export default App