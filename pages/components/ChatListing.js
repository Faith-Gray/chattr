import styled from "styled-components";
import { Avatar } from '@mui/material';


function ChatListing( id, users) {
  return (
    <Container>
      <UserAvatar />
      <p>Chat Emails</p>
    </Container> 
  )
}

export default ChatListing;

const Container = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 15px;
`;

const UserAvatar = styled(Avatar)`
  margin: 5px;
  Margin-right: 15px;
`;