import styled from 'styled-components';
import Head from 'next/head';
import Sidebar from '../../components/Sidebar';

function Chat() {
  return (
    <Container>
        <Head>
            <title>chat</title>
        </Head>
        <h1>This si a chat</h1>
        <Sidebar/>
    </Container>
  )
};

export default Chat;


const Container = styled.div`

`;