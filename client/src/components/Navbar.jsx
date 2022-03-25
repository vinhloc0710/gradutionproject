import { Badge } from '@material-ui/core';
import { ShoppingCartOutlined } from '@material-ui/icons';
import styled from 'styled-components';
import {mobile} from '../responsive';
import {useSelector} from 'react-redux';
import { Link, useHistory } from 'react-router-dom';



const Container = styled.div`
    height: 60px;
    ${mobile({height: "50px"})}
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    ${mobile({padding: "10px 0px"})}
`

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({display: "none"})}
`



const Center = styled.div`
    flex: 1;
    text-align: center;
`;

const Logo = styled.h1`
    font-weight: bold;
    ${mobile({fontSize: "24px"})}
`

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({flex: 2, justifyContent: "center"})}
`

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({fontSize: "12px", marginLeft: "10px"})}
`


const Navbar = () => {
    
    
    const quantity = useSelector(state =>  state.cart.quantity)
 
    let user = JSON.parse(localStorage.getItem("persist:root"))?.user;
    const currentUser = user && JSON.parse(user).currentUser;
    console.warn(currentUser);

    const history = useHistory();
    
    function logout() {
        localStorage.clear();
        history.push('/login')
    }

    return (
        <Container>
            <Wrapper>
              <Left>
                  <Language>EN</Language>
                  
                </Left>
                <Link to ="/">
                <Center><Logo>Blake's Store.</Logo></Center>
                </Link>
              <Right>
                  <Link to="/register">
                    <MenuItem>REGISTER</MenuItem>
                  </Link>
                  <Link to="/login">
                  < MenuItem>SIGN IN</MenuItem>
                  </Link>
                  <Link to="/login" onClick={logout}>
                  < MenuItem>LOG OUT</MenuItem>
                  </Link>
                  
                  
                  <Link to="/cart">
                    <MenuItem>
                        <Badge badgeContent= {quantity} color="primary">
                            <ShoppingCartOutlined/>
                        </Badge>
                    </MenuItem>
                  </Link>    

                 
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
