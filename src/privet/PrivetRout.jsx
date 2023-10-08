/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../contaxapi/Authprovider";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRout = ({children}) => {
    const location = useLocation()
    const {user,loading}= useContext(AuthContext);
    if(loading){
        return <span className="loading loading-dots loading-lg"></span>
    }
    
  if(user){
    return children;
}

 return <Navigate state={location.pathname} to="/login"></Navigate>;
    
};

export default PrivetRout;