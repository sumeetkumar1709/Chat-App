import styled from 'styled-components'
import { Avatar, IconButton } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';


function Sidebar() {
  return (
    <Container>
        <Header>
          <UserAvatar/>

          <IconsContainer>
              <IconButton>
                <ChatIcon style={{ color: "#EA80FC" }} />
              </IconButton>
              
              <IconButton>
                <MoreVertIcon style={{ color: "#EA80FC" }}/>
              </IconButton>
              
              
          </IconsContainer>
        </Header>
    </Container>
    
  )
}

export default Sidebar;

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
       opacity: 0.8em;;
   }
`;

const IconsContainer= styled.div`

`;