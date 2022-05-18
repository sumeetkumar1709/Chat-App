import styled from 'styled-components'

function Message({user,message}) {
  return (
      <Container>
      <p>{message}</p>
      <h1>hello</h1>  
      </Container>
    
  )
}

export default Message

const Container = styled.div`
    background-color: #fff;
    color: #fff;
`;