import {Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contaxapi/Authprovider";
import toast from "react-hot-toast";
const Navbar = () => {
    const {user, logOut} = useContext(AuthContext)

    const handleLogout = () => {
      logOut()
     .then(() => {
       toast.success('sign out successful');
      })
     .catch((error) => {
       console.error(error);
     });
     };

       const navLinks = <>
              
              <li>
              <NavLink
            to="/"
             style={({ isActive, isPending }) => {
            return {
               fontWeight: isActive ? "bold" : "",
                  color: isPending ? "" : "",
            };
              }}
             >
             Home
           </NavLink>

              </li>
              <li className=" px-4">
              <NavLink to="/about"
            
             style={({ isActive, isPending }) => {
             return {
               fontWeight: isActive ? "bold" : "",
                color: isPending ? "" : "",
             };
             }}
             >
             About
           </NavLink>
              </li>
              <li>
              <NavLink
              
           to="/register"
           style={({ isActive, isPending }) => {
            return {
               fontWeight: isActive ? "bold" : "",
                color: isPending ? "" : "",
            };
             }}
            >
              Register
                </NavLink>
              </li>
              {
                user &&
                <ul className=" flex">
                <li className="px-5">
              <NavLink to="/services"
           style={({ isActive, isPending }) => {
            return {
               fontWeight: isActive ? "bold" : "",
                color: isPending ? "" : "",
            };
             }}
            >
               Blog
                </NavLink>
              </li>
                <li>
              <NavLink to="/offer"
           style={({ isActive, isPending }) => {
            return {
               fontWeight: isActive ? "bold" : "",
                color: isPending ? "" : "",
            };
             }}
            >
               Offer
                </NavLink>
              </li>

              </ul>
               
              
              }
       
       </>

    return (
        <div className="my-5">
            <div className="navbar flex  bg-base-100">
    

  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navLinks}
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl hover:bg-blue-400">AdK Ltd </a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navLinks}
    </ul>
  </div>

  

  

  <div className="navbar-end flex lg:flex-row flex-col ">
  {
    user && <h1 className="pr-2"><span className="font-bold">user:</span>{user.email}</h1>
  }
   {
      user ?
      <button onClick={handleLogout} className="btn btn-sm btn-primary">log out</button>
      :
      
      <Link to ="/login"><button className="btn  btn-sm btn-primary">log in</button></Link>
    
   }  
  </div>

  

</div>
            
        </div>
    );
};

export default Navbar;