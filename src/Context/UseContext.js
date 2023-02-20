import { createContext, useEffect, useState } from "react";
import {getAuth,createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword,GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import app from "../firebase/firebase.config";
export const AuthContext=createContext();
const auth=getAuth(app)

const UseContext=({children})=>{
    const [users,setUser]=useState({displayName: 'Mehedi Hasan'})
    
    const [loading,setLoading]=useState(true);

 
    const createUser=(email,password,name)=>{
        
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
    const provider = new GoogleAuthProvider();

    const googleSingIn=()=>{
        return signInWithPopup(auth, provider);
    }
    

    const authInfo={users,createUser,logOut,singInUser,loading,googleSingIn};

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default UseContext;