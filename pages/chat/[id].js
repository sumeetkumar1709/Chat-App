import styled from 'styled-components'
import Head from 'next/head'
import Sidebar from '../../components/Sidebar'
import ChatScreen from '../../components/ChatScreen'
import { auth ,db} from '../../firebase';
import { collection, doc, getDoc, getDocs, orderBy, query } from "firebase/firestore"; 
import { useAuthState } from 'react-firebase-hooks/auth';
import getRecipientEmail from '../../utils/getRecipientEmail';


function Chat({chat,messages,id}) {
   // console.log(chat,messages,id);

  const [user] =useAuthState(auth);
  

  return (
    <Container>
        <Head>
            <title>Chat with {getRecipientEmail(chat.users,user)}</title>
        </Head>
    <Sidebar/> 
        <ChatContainer>
            <ChatScreen chat={chat} messages={messages} id={id}/>
        </ChatContainer>   
    </Container>
  )
}

export default Chat;

export async function getServerSideProps(context){
    const ref = collection(db, "chats", context.query.id, "messages");
    const q = query(ref, orderBy("timestamp", "asc"));
    const querySnapshot = await getDocs(q);

    const messages = querySnapshot.docs.map(doc => 
        ({ ...doc.data(), id: doc.id, timestamp: doc.data().timestamp?.toDate().getTime() }));
    
        const docRef = doc(db, "chats", context.query.id);
        const docSnap = await getDoc(docRef)

        

        return {
        props: {
        chat: docSnap.data(),
        id: context.query.id,
        messages:JSON.stringify(messages)
        }
        }
        

}

const Container=styled.div`
    color: #fff;
    display: flex;
`;

const ChatContainer=styled.div`
    flex: 1;
    overflow: scroll;
    height: 100vh;

    ::-webkit-scrollbar{
        display:none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
`;

