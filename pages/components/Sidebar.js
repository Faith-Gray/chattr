import { Avatar, IconButton } from "@mui/material";
import styled from "styled-components";
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import MoreVertIcon from '@mui/icons-material/MoreVert';


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
    </Container>
  )
}

export default Sidebar;

const Container = styled.div`

`;

const Header = styled.div`

`;

const UserAvatar = styled(Avatar)`

`;

const IconContainer = styled.div`

`;