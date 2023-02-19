import { createContext, useEffect, useState } from "react";
import {getAuth,createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword} from 'firebase/auth'
import app from "../firebase/firebase.config";
export const AuthContext=createContext();
const auth=getAuth(app)

const UseContext=({children})=>{
    const [users,setUser]=useState({displayName: 'Mehedi Hasan'})
    const [name,setName]=useState('')
    const [loading,setLoading]=useState(true)
    let flag=1;
    const createUser=(email,password,name)=>{
        if(flag===1){
            setName(name)
            flag=0;
        }
        return createUserWithEmailAndPassword(auth,email,password)
    }

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            setLoading(false)
            console.log('Auth state change',currentUser)
        })

        return ()=>{
            unsubscribe();
        }
    })

    const logOut=()=>{

        return signOut(auth);
    }

    const singInUser=(email,password)=>{

        return signInWithEmailAndPassword(auth,email,password)
    }
    
    const authInfo={users,createUser,logOut,singInUser};

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default UseContext;