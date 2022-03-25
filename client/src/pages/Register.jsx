import styled from 'styled-components';
import {mobile} from '../responsive';
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import React, { useState } from 'react';
import { registerUser } from '../redux/apiCalls';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255,255,255,0.5),
        rgba(255,255,255,0.5)
        ),
    url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHKVWMRy5Wm1kDHKEnJ889s7g8oo5di2iFPw&usqp=CAU") 
    center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div`
    padding: 20px;
    width: 40%;
    background-color: white;
    ${mobile({width: "75%"})}
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
    border: none; 
    color: black;
`
const Form = styled.form`
    display: flex;
    
    flex-direction: column;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 5px 0px;
    adding: 10px;
`
const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin-bottom: 20px;
`


const Register = () => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [submitted, setSubmitted] = useState(false);
    const dispatch = useDispatch();
    const {isFetching, error} = useSelector((state)=> state.user);
   

    const handleUsername = (e) => {
        setUsername(e.target.value);
        setSubmitted(false);
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
        setSubmitted(false);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
        setSubmitted(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (username === '' || email === '' || password === '') {
          setSubmitted(false);
        } else {
          setSubmitted(true);
          const newUser = {
            username,email, password
          }
          console.log(newUser);
          registerUser(newUser, dispatch);
        }
      };

    // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? '' : 'none',
        }}>
        <h1>User {username} successfully registered!!</h1>
      </div>
    );
  };
 
  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? '' : 'none',
        }}>
        <h1>Please enter all the fields or change username, email</h1>
      </div>
    );
  };
 
    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <div className="messages">
                    {error || errorMessage()}
                    {submitted && !isFetching && successMessage()}
                </div>
                <Form>
                    <Input 
                    onChange={handleUsername} className="input"
                    value={username} type="text" 
                    placeholder="username"
                    />
                    <Input 
                    onChange={handleEmail} className="input"
                    value={email} type="email"
                    placeholder="email"
                    />
                    <Input 
                    onChange={handlePassword} className="input"
                    value={password} type="password"
                    placeholder="password"
                    />
                    <Agreement>
                        By creating an account, I consent to the processing of my personal data in accordance with the <b> PRIVACY POLICY</b>
                    </Agreement>
                    <Button onClick={handleSubmit} className="btn" type="submit">CREATE</Button>
                    <p className="my-2">
                    Already have an account?  <Link  to="/login"><a style={{color: 'crimson'}}>Login Now</a></Link>
                    </p>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register
