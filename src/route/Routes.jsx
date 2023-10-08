import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../home/Home";
import About from "../about/About";
import Register from "../register/Register";
import Details from "../details/Details";
import Login from "../login/Login";
import PrivetRout from "../privet/PrivetRout";
import Services from "../privet/Services";
import Offer from "../privet/Offer";
import ErrorPage from "../errorpage/ErrorPage";

const router = createBrowserRouter([
    {
       path:'/',
       element: <Layout></Layout>,
       errorElement:<ErrorPage></ErrorPage>,
       children:[
        {
            path:'/',
            element:<Home></Home>,
            
        },
        {
            path:'/details/:id',
            element:<PrivetRout><Details></Details></PrivetRout>,
            loader: () => fetch('/service.json')
        },
        {
            path:'/about',
            element:<About></About>,
        },
         {
            path:'/register',
            element:<Register></Register>,
         },
         {
            path:'/login',
            element:<Login></Login>
         },
         {
            path:'/services',
            element:<PrivetRout><Services></Services></PrivetRout>,
         },
         {
            path:'/offer',
            element:<PrivetRout><Offer></Offer></PrivetRout>,
         }

       ]
    }
]);

 export default router;