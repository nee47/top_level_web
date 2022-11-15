import { createContext, useContext } from "react";
import {auth} from "../components/firebaseConfig"
import {createUserWithEmailAndPassword} from "firebase/auth"

export const authContext = createContext();

//esto es para recuperar los datos que se pongan en value
export const useAuth = ()=>{
    const context = useContext(authContext);
    return context;
}

const register = (email, password)=>{
    createUserWithEmailAndPassword(auth, email, password);
};

export function FirebaseProvider({ children }){
    
    return <authContext.Provider value={{register}}>{children}</authContext.Provider>
}