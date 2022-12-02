import { Avatar } from "@mui/material";
import { IconButton } from '@mui/material';
import styled from "styled-components";
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';


function Sidebar() {
  return (
    <Container>
        <Header>

        <UserAvatar/>
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
        </Search>
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
  
`;

const UserAvatar = styled(Avatar)`
  cursor: pointer;
  :hover {
    opacity: 0.75;
  }

`;

const IconContainer = styled.div`

`;