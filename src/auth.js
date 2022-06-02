import { createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut} from "firebase/auth"
import { auth } from "./firebase/firebaseApp"
class Authentication {
    static signUp=(email,password,onComplete)=>{
        createUserWithEmailAndPassword(auth,email,password).then((user)=>{
            onComplete()
        }).catch((err)=>{

        })
    }
    static signIn=(email,password,onComplete)=>{
        signInWithEmailAndPassword(auth,email,password).then((user)=>{
            onComplete()
            
        })
    }
    static  logOut=()=>{
        return(signOut(auth))  
    }
}


export default Authentication