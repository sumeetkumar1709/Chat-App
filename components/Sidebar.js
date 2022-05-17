import styled from 'styled-components'
import { Avatar, IconButton,Button } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import * as EmailValidator from "email-validator";
import { auth ,db} from '../firebase';
import { collection, addDoc, query, where } from "firebase/firestore"; 
import { useAuthState } from 'react-firebase-hooks/auth';
import {useCollection } from 'react-firebase-hooks/firestore';
import Chat from './Chat';

function Sidebar() {
    const [user] = useAuthState(auth);
    const chatCollectionRef = collection(db,"chats");
    const userChatRef = query(chatCollectionRef, where("users","array-contains",user.email)); 
    const [chatsSnapshot] = useCollection(userChatRef);
    
const createChat = () =>{
    const input=prompt(
      'Please enter an email for the user you wish to char with ');

      if(!input) return null;

      if(EmailValidator.validate(input) && !chatAlreadyExists(input) && input!= user.email){

            addDoc(collection(db,"chats"),{
                users:[user.email, input],

            });
      }
  };

  const chatAlreadyExists =(recipientEmail) =>
      !!chatsSnapshot?.docs.find(
        (chat) => 
        chat.data().users.find((user) => user === recipientEmail)?.length>0
      );

  return (
    <Container>
        <Header>
          <UserAvatar onClick={() =>auth.signOut()}/>

          <IconsContainer>
              <IconButton>
                <ChatIcon style={{ color: "#EA80FC" }} />
              </IconButton>
              
              <IconButton>
                <MoreVertIcon style={{ color: "#EA80FC" }}/>
              </IconButton>
              
              
          </IconsContainer>
        </Header>

        <Search>
          <SearchIcon style={{ color: "#fff" }}/>
          <SearchInput placeholder='Search in chats'/>
        </Search>

        <SidebarButton onClick={createChat}>START A NEW CHAT</SidebarButton>
        
        {/* List of Chats */}

        
        <>
        {chatsSnapshot?.docs.map((chat) =>(
          <Chat  key={chat.id} id={chat.id} user={chat.data().users}/>
        ))}
        </>

    </Container>
    
  );
}

export default Sidebar;


const SidebarButton= styled(Button)`
    width: 100%;
    color: #fff;
    &&& {
      border-top: 1px solid #EA80FC;
      border-bottom: 1px solid #EA80FC;
    }
`;


const Container=styled.div`
`;

const Header = styled.div`
    display: flex;
    position: sticky;
    background-color: #1f1f1f;
    top: 1;
    z-index: 1;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    height: 80px;
`;

const UserAvatar = styled(Avatar)`
   cursor: pointer;
   :hover { 
       opacity: 0.8;
   }
`;

const IconsContainer= styled.div`

`;


const Search = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  border-radius: 2px;
`;

const SearchInput = styled.input`
  outline-width: 0;
  border:none;
  flex:1;
  background-color : #121212; 
  color: #EA80FC;
`;