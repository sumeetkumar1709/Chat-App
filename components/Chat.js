import styled from 'styled-components'
import { Avatar, IconButton,Button } from '@mui/material';

function Chat({id, users}) {
  return (
    <Container>
        <UserAvatar/>
        <p>Recipient Email</p>
    </Container>
  )
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