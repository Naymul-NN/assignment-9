import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut  } from "firebase/auth";
import auth from '../firebase/firebase.config';
export const AuthContext = createContext(null)

const Authprovider = ({children}) => {

   const [user, setuser] = useState(null);

   const createUser = (email,password)=>{
    return createUserWithEmailAndPassword(auth, email, password)
   }
   
   const userLogin=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
   }

   const logOut = () =>{
    signOut(auth)
   }

   useEffect(()=>{
    const unSubscribe =  onAuthStateChanged(auth, currentUser =>{
        setuser(currentUser)
      })
      return  () =>{
        unSubscribe()
      }
   },[])

const authinfo = {
    user,
    createUser,
    userLogin,
    logOut,
}

    return (
        <AuthContext.Provider value={authinfo}>
        {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;