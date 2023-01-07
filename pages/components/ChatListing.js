import styled from "styled-components";
import { Avatar } from '@mui/material';
import getRecipientEmail from '../../utils/getRecipientEmail';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from '../../firebase';
import { useCollection } from "react-firebase-hooks/firestore";
import { useRouter } from 'next/router';


function ChatListing({id, users}) {
 
  const [user] = useAuthState(auth);

  const router = useRouter();

  const [recipientPic] = useCollection(db.collection('users').where('email', '==', getRecipientEmail(users, user)));
  const recipientEmail = getRecipientEmail( users, user);
  const recipient = recipientPic?.docs?.[0]?.data();

  const enterChat = () => {
    router.push(`/chat/${id}`)
  };

  // console.log(id, users);

  return (
    <Container onClick={enterChat}>
      {/* if there is a recipient load the photo for the recipient as user Avatar 
      else use the first letter of recipient*/}
      {recipient ? (
          <UserAvatar src = {recipient?.photoURL} />
        ) : (
          <UserAvatar>{recipientEmail[0]}</UserAvatar>
        )
      }
      {/* <UserAvatar /> */}
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