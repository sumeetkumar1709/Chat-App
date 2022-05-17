import '../styles/globals.css'
import {useAuthState} from "react-firebase-hooks/auth";
import {auth,db} from '../firebase';
import Login from './login';
import { useEffect } from 'react';
import { collection,doc,serverTimestamp,setDoc } from "firebase/firestore";

function MyApp({ Component, pageProps }) {
  const [user] = useAuthState(auth)
  
  useEffect(() =>{
    if(user){
        const u=collection(db,'users');
        const userId = doc(u,user.uid);
        
        const time =serverTimestamp()

        setDoc(userId,{
          email:user.email,
          photoURL:user.photoURL,
          timestamp:time
        },{merge:true});
    }
    
  },[user]);


  if(!user) return <Login/>
  return <Component {...pageProps} />
}

export default MyApp
