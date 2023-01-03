import { Avatar, Button } from "@mui/material";
import { IconButton } from '@mui/material';
import styled from "styled-components";
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import { auth, db } from '../../firebase';
import { useAuthState } from "react-firebase-hooks/auth";
// import EmailValidator from 'email-validator';

// import * as EmailValidator from 'email-validator';

function Sidebar() {
  const [user] = useAuthState(auth);

  const createChat = () => {
    const input = prompt('Enter email address to send chat invitation');
  
    if (!input) return null; 

    // if (EmailValidator.validate(input)) {
    //   //add chat into the DV 'chats' collection
    // }

    if (input) {
        db.collection('chats').add({
          users: [user.email, input],
        });
    }
  };


  return (
    <Container>
        <Header>
        <UserAvatar onClick={() => auth.signOut()}/>
            <IconContainer>
                <IconButton>
                  <ChatBubbleOutlineIcon/>
                </IconButton>
                <IconButton>
                  <MoreVertIcon/>
                </IconButton>
            </IconContainer>
        </Header>

        <Search>
          <SearchIcon/>
          <SearchInput/>
        </Search>

        <SidebarButton onClick={createChat}>
          Start a New Chat
        </SidebarButton>
    </Container>
  )
}

export default Sidebar;

const Container = styled.div`

`;

const Header = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 1;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  height: 80px;
  border-bottom: 1px solid whitesmoke; 

`;

const Search = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  border-radius: 2px;

`;

const SearchInput = styled.input`
  outline-width: 0;
  // border: none;
  flex: 1;
`;

const UserAvatar = styled(Avatar)`
  cursor: pointer;
  :hover {
    opacity: 0.75;
  }

`;

const IconContainer = styled.div`

`;

const SidebarButton = styled(Button)`
  width: 100%;
  &&& {
    // border-top: 1px solid gray;
    // border-bottom: 1px solid gray;
    border: 1px solid gray;
  }

`;