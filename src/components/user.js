import { useAuth } from '../context/authContext'

export const GetUserInfo = ()=>{
    const {userState} = useAuth()
    console.log("user.js");
    console.log(userState);
}