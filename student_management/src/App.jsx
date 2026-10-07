import About from "./Component/About"
import AllUser from "./Component/AllUser"
import CreateUser from "./Component/CreateUser"
import Home from "./Component/Home"
import Login from "./Component/Login"
import Nav from "./Component/Nav"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Signup from "./Component/Signup"
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/createuser" element={<CreateUser></CreateUser>}></Route>
        <Route path="/alluser" element={<AllUser></AllUser>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App
