import styled from "styled-components";
import { Avatar } from '@mui/material';
import getRecipientEmail from '../../utils/getRecipientEmail';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from '../../firebase';


function ChatListing( {id, users}) {
 
  const [user] = useAuthState(auth);

  const recipientEmail = getRecipientEmail( users, user);

  console.log(id, users);

  return (
    <Container>
      <UserAvatar />
      <p>{recipientEmail}</p>
    </Container> 
  )
}

export default ChatListing;

const Container = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 15px;
  word-break: break-word;

  :hover {
    background-color: gray;
  }
`;

const UserAvatar = styled(Avatar)`
  margin: 5px;
  Margin-right: 15px;
`;