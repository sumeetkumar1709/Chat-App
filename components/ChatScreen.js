import styled from 'styled-components'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth ,db} from '../firebase';
import { useRouter } from 'next/router';
import { Avatar, IconButton,Button } from '@mui/material';

function ChatScreen({chat,messages,id}) {
  
  const [user] =useAuthState(auth);
  const router =useRouter();
  
  return (
    <Container>
      <Header>
        <Avatar/>
        <Info/>

      </Header>

    </Container>
    )
}

export default ChatScreen;

const Container= styled.div`
  color: #fff;
`;

const Header = styled.div``;

const Info = styled.div``;