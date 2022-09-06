
import { Outlet } from "react-router-dom"
import { Navbar } from "./components/layout"


function App() {

  return (
    <>
    <Navbar />
    <Outlet />
    </>
      )
}

export default App
