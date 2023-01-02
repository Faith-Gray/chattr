import styled from 'styled-components';
import Head from 'next/head';
import { Button } from '@mui/material';
import { auth, provider } from '../firebase';
import CommentIcon from '@mui/icons-material/Comment';



function Login() {

  const signIn = () => {
    auth.signInWithPopup(provider).catch(alert);
  }

  return (
    <Container>
        <Head>
            <title>Login</title>
        </Head>
      <LoginContainer>

        {/* change Logo later */}

        {/* <CommentIcon/> */}
        <Logo src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c543.png"/>
        <Button onClick={signIn} variant='outlined'>Sign In With Google</Button>
      </LoginContainer>

    </Container>
  )
}

export default Login;

const Container = styled.div`
display grid;
place-items: center;
height: 100vh;
background-color: whitesmoke;

`;

const Logo = styled.img`
height: 200px;
width: 200px;
margin-bottom: 50px;
`;

const LoginContainer = styled.div`
display: flex;
flex-direction: column;
padding: 100px;
align-items: center;
background-color: white;
box-shadow: 0px 4px 14px -3px rgba(0, 0, 0.5)
`;