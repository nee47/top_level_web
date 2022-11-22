import { createContext, useContext } from "react";
import {auth} from "../components/firebaseConfig"
import {createUserWithEmailAndPassword, 
        signInWithEmailAndPassword,
        onAuthStateChanged,
        signOut} from "firebase/auth"
import { useEffect, useState } from "react";


export const authContext = createContext();

//esto es para recuperar los datos que se pongan en value
export const useAuth = ()=>{
    const context = useContext(authContext);
    return context;
}


export function FirebaseProvider({ children }){

    const [userState, setUserState] = useState(null);
    const [loading, setLoading] = useState(true);

    const register = (email, password)=>{
        createUserWithEmailAndPassword(auth, email, password);
    };
    
    const login = (email, password)=>
        signInWithEmailAndPassword(auth, email, password);

    const logout = ()=>{
        signOut(auth);
        setUserState(null);
    }
    
    useEffect(()=>{
        onAuthStateChanged(auth, currentUser =>{
            if(currentUser){
                setUserState(currentUser);
                setLoading(false);
                console.log(currentUser);
            }
        })
        const timeout = setTimeout(()=>{
            setLoading(false);
        }, 700);

        return () => {
            clearTimeout(timeout);
          };
    },[]);

    return <authContext.Provider value={{register, login, userState, loading, logout}}>{children}</authContext.Provider>
}