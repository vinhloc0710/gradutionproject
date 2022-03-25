import styled from 'styled-components';
import {mobile} from '../responsive';
import React, { useState } from 'react';
import { login } from '../redux/apiCalls';
import {useDispatch, useSelector} from 'react-redux';
import { Link } from 'react-router-dom';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255,255,255,0.5),
        rgba(255,255,255,0.5)
        ),
    url("data:image/jpeg;base64,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") 
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
    margin: 10px 0px;
    padding: 10px;
`
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
    &:disabled {
        color: green;
        cursor: not-allowed;
      }
`


const Error = styled.span`
    color: red;
`

const Signin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const {isFetching, error} = useSelector((state)=> state.user);

    const handleClick = (e) => {
        e.preventDefault();
        login(dispatch, { username, password });
    }
    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input 
                    placeholder="username" 
                    onChange = {(e)=> setUsername(e.target.value)}
                    />
                    <Input 
                    placeholder="password"
                    type="password"
                    onChange = {(e)=> setPassword(e.target.value)}
                    />
                    <Button onClick = {handleClick} disabled={isFetching}>LOGIN</Button>
                   {error && <Error>Something went wrong ...</Error>}
                   <p className="my-2">
                   You don't have an account? <Link to="/register"><a style={{color: 'crimson'}}>Register Now</a></Link>
                   </p>
                </Form>
            </Wrapper>
        </Container>
    );
};

export default Signin;
