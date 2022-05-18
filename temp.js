
  const showMessages =()=>{
    if(messagesSnapshot) {
      return messagesSnapshot.docs.map(message =>(
        <Message
          key={message.id}
          user={message.data().user}
          message={{
              ...message.data(),
              timestamp: message.data().timestamp?.toDate().getTime(),
          }} />
          
      ));
      
    }
    
      
  }