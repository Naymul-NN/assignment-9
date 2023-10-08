import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { Toaster } from "react-hot-toast";

const Layout = () => {
    return (
        <div className="w-[90%] mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <Toaster/>
            
        </div>
    );
};

export default Layout;