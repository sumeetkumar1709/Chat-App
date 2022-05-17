import styled from 'styled-components';
import Head from "next/head";
import {Button} from '@mui/material';
import {auth,provider} from '../firebase';
import {signInWithPopup} from "firebase/auth";
function Login() {
    
    const signIn =() =>{
        signInWithPopup(auth,provider).catch(alert)
    };

    return (

    <Container>
        <Head>
            <title>Login</title>
        </Head>
        <LoginContainer>
            <Logo
            src="https://img.icons8.com/glyph-neue/512/ffffff/weixing.png"
            />
            <Button onClick={signIn} variant="contained"style={{
                borderRadius: 35,
                backgroundColor: "#EA80FC",
                padding: "18px 36px",
                fontSize: "18px"
            }} >Sign in with google</Button>
        </LoginContainer>
    </Container>
  )
}

export default Login

const Container=styled.div` 
    display: grid ;
    place-items: center;
    height: 100vh;
    background-color:  #121212;
`;

const LoginContainer=styled.div`
    padding: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #1E1E1E;
    border-radius: 5px;
    box-shadow: 0px 4px 14px -3px rgba(0,0,0,0.7);
`;

const Logo=styled.img`
    height: 200px;
    width: 200px;
    margin-bottom:50px;

`;

