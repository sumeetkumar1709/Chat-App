import styled from 'styled-components'
import { Avatar, IconButton,Button } from '@mui/material';
import getRecipientEmail from '../utils/getRecipientEmail';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth,db } from '../firebase';
import { collection, addDoc, query, where } from "firebase/firestore"; 
import {useCollection } from 'react-firebase-hooks/firestore';
import {useRouter } from 'next/router';

function Chat({id, users}) {
    const router = useRouter();
    const [user] = useAuthState(auth) ;
    const chatCollectionRef = collection(db,"users");
    const recipientChatRef = query(chatCollectionRef, where("email","==",getRecipientEmail(users,user)));
    const [recipientSnapshost] = useCollection(recipientChatRef);

    //console.log(user);

    const enterChat = () =>{
        router.push(`/chat/${id}`);
    } 

    const recipient = recipientSnapshost?.docs?.[0]?.data();
    const recipientEmail = getRecipientEmail(users, user);

    
  return (
    <Container onClick={enterChat}>
        
        { recipient?(
            <UserAvatar src={recipient?.photoURL}/>
        ) : (<UserAvatar> {recipientEmail[0]}</UserAvatar>
        )} 
        <p>{recipientEmail}</p>
    </Container>
  );
}

export default Chat;

const Container = styled.div`
    color: #03DAC6;
    display: flex;
    align-items: center;
    cursor: pointer;
    padding :15px;
    word-break: break-word;

    :hover{
        background-color: #1F1F1F;
    }
`;

const UserAvatar = styled(Avatar)`
    margin: 5px;
    margin-right: 15px;
`;