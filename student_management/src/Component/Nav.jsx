import { Link } from "react-router-dom"
import img from '../assets/logo.jpg'
const Nav = () => {
  return (
    <div className=" bg-blue-200 flex w-full justify-between " >
      <div className="">
        <ul className="flex gap-5 h-15 w-full items-center text-xl">
            <li><Link to='/'><img src={img} className="h-10 w-10"/></Link></li>
            <li><Link to='/' className="hover:text-blue-700">Student Management System</Link></li>
        </ul>
      </div>
      <div className="">
        <ul className=" flex h-15 w-full gap-5 items-center text-lg">
            <li><Link to='/' className="hover:text-amber-700">Home</Link></li>
            <li><Link to='/about' className="hover:text-amber-700">About</Link></li>
            <li><Link to='/createuser' className="hover:text-amber-700">CreateUser</Link></li>
            <li><Link to='/alluser' className="hover:text-amber-700">AllUsers</Link></li>
        </ul>
      </div>
      <div >
        <ul className=" flex gap-5 h-15 w-full items-center text-lg">
            <li><Link to='/login' className="hover:text-amber-700">Login</Link></li>
            <li><Link to='/signup' className="hover:text-amber-700">Signup</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Nav
