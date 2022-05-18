import styled from 'styled-components'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth ,db} from '../firebase';
import { useRouter } from 'next/router';
import { Avatar, IconButton,Button } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { collection, doc, getDoc, getDocs, orderBy, query } from "firebase/firestore";
import Message from '../components/Message';
import { useCollection } from 'react-firebase-hooks/firestore';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';


function ChatScreen({chat,messages,id}) {
  
  const [user] =useAuthState(auth);
  const router =useRouter();
  const ref = collection(db, "chats", router.query.id, "messages");
  const q = query(ref, orderBy("timestamp", "asc"));
  const [messagesSnapshot] = useCollection(q) ;
  

  
  return (
    <Container>
      <Header>
        <Avatar/>

        <Info>
          <h3> Recipient email </h3>
          <p> Last Seen... </p>
        </Info>

        <HeaderIcons>
            <IconButton>
               <AttachFileIcon style={{ color: "#EA80FC" }}/> 
            </IconButton>
            <IconButton>
               <MoreVertIcon style={{ color: "#EA80FC" }}/> 
            </IconButton>
        </HeaderIcons>
      </Header>

      <MessageContainer>
       {/* {showMessages()} */} 
        <EndOfMessage/>
      </MessageContainer>

      <InputContainer>
        <InsertEmoticonIcon/>
        <Input/>
      </InputContainer>

    </Container>
    )
}

export default ChatScreen;


const InputContainer= styled.form`
    display: flex;
    align-items: center;
    padding: 10px;
    position:sticky;
    background-color: #121212;
    z-index: 100;
    bottom: 0;
`;

const Container= styled.div`
  color: #fff;
`;

const Header = styled.div`
  position: sticky;
  background-color: #1F1F1F;
  z-index: 100;
  top: 0;
  display: flex;
  padding: 11px;
  align-items: center;
  border-bottom: 1px solid #E37DF5;
  height: 80px;
`;

const Info = styled.div`
  margin-left: 15px;
  flex: 1;

  > h3{
    margin-bottom: 3px;
    color: #03DABB;
  }

  >p{
    font-size: 14px;
    color: gray;
  }
`;

const HeaderIcons=styled.div`
`;

const MessageContainer= styled.div`
    padding: 20px;
    min-height:90vh;
`;

const EndOfMessage= styled.div``;


const Input = styled.input `
    flex: 1;
    outline: 0;
    border: none;
    border-radius: 10px;
    background-color: #1F1F1F;
    padding: 20px;
    margin-left: 15px;
    margin-right: 15px;
    color: #FFFFFF;
`;