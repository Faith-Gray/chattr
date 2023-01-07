import styled from 'styled-components';
import Head from 'next/head';

function Register() {
  return (

    <Container>
      <Head>
          <title>Register</title>
      </Head>
      <form>
            <input type='text' placeholder='Name'/>
            <input type='email' placeholder='Email'/>
            <input type='password' placeholder='Password'/>
            <input type='file'/>
            <button>Sign Up!</button>
      </form>
      <p>Already have an account? Login</p>

    </Container>

  )
}

export default Register;

const Container = styled.div`

`;