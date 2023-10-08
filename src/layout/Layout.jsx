import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";

import { Toaster } from "react-hot-toast";

const Layout = () => {
    return (
        <div className="w-[90%] mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            
            <Toaster/>
            
        </div>
    );
};

export default Layout;