import { createContext, useContext } from "react";
import {auth} from "../components/firebaseConfig"
import {createUserWithEmailAndPassword, 
        signInWithEmailAndPassword,
        onAuthStateChanged} from "firebase/auth"
import { useEffect, useState } from "react";


export const authContext = createContext();

//esto es para recuperar los datos que se pongan en value
export const useAuth = ()=>{
    const context = useContext(authContext);
    return context;
}


export function FirebaseProvider({ children }){

    const [userState, setUserState] = useState(null);

    const register = (email, password)=>{
        createUserWithEmailAndPassword(auth, email, password);
    };
    
    const login = (email, password)=>
        signInWithEmailAndPassword(auth, email, password);
    
    useEffect(()=>{
        onAuthStateChanged(auth, currentUser =>{
            setUserState(currentUser);
            console.log(userState);
        })
    },[userState]);

    return <authContext.Provider value={{register, login, userState}}>{children}</authContext.Provider>
}