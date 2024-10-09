import { Outlet } from "react-router-dom"
import NavbarIndex from "../components/navbar"


const Rootlayout = () => {
  return (
    <div>
    <NavbarIndex />
      <Outlet />
    </div>
  )
}

export default Rootlayout
