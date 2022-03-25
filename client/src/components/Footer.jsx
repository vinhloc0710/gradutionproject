
import { EmailOutlined, LocalPhoneOutlined, LocationOnOutlined } from '@material-ui/icons';
import styled from 'styled-components';
import {mobile} from '../responsive';

const Container = styled.div`
    display: flex;
    ${mobile({flexDirection: "column"})}
`

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`

const Logo = styled.h1``
const Desc = styled.p`
    margin: 20px 0px;
`


const Title = styled.h3`
    margin-bottom: 30px;
`



const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({backgroundColor: "#fff8f8"})}
`

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`



const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>Blake's Store.</Logo>
                <Desc>
                    There are many variations of passages of Lorem Ipsum available, 
                    but the majority have suffered alteration in some form, 
                    by injected humour, or randomised words which don't look even slightly believable.
                </Desc>
                {/* <SocialContainer>
                    <SocialIcon color="3B5999" >
                        <Facebook/>
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Instagram/>
                    </SocialIcon>
                </SocialContainer> */}
            </Left>
            {/* <Center>
                <Title>Usefull Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Term</ListItem>
                </List>
            </Center> */}
            <Right>
                <Title>Contact</Title>
                <ContactItem> <LocationOnOutlined style ={{marginRight: "10px"}}/>
                No 1 Vo Van Ngan Street, Linh Chieu Ward, Thu Duc District, Ho Chi Minh City
                </ContactItem>
                <ContactItem> <LocalPhoneOutlined style ={{marginRight: "10px"}}/>
                +84 396 229 285
                </ContactItem>
                <ContactItem> <EmailOutlined style ={{marginRight: "10px"}}/>
                phanvinhloc0710@gmail.com
                </ContactItem>
                
            </Right>
        </Container>
    )
}

export default Footer
