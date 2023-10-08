import { useContext } from "react";
import { AuthContext } from "../contaxapi/Authprovider";


const About = () => {
    const authinfo= useContext(AuthContext);
   console.log(authinfo);

    return (
        <div>
            <h1>this is about page:{authinfo.name}</h1>
        </div>
    );
};

export default About;