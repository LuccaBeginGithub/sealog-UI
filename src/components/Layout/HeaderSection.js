import React from 'react';
import {styled} from 'styled-components';
import { CustomButton } from '../Custom/CustomButton';
import PersonIcon from '@mui/icons-material/Person';
import { mobile } from '../../utilis/responsiveness';
import { NavLink,Link} from 'react-router-dom';


const Container = styled.section`
    background-color:#ECF4D6;
    
    width:100%;
    height:150px;
    margin-bottom:2rem;
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 2rem 7rem;
    ${mobile({margin: '2rem 2.5rem',})}
`;

const Logo = styled.div`

`;

const Image = styled.img`
    width:178px;
    height:55px;
    ${mobile({width:'120px',
    height:'42px',})}
`;

const RightNav = styled.div`
    display: flex;
    align-items: center;
`;

const IconContainer = styled(NavLink)`
    margin-left: 3.5rem;
    display: flex;
    background-color: #4F6F52;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 1.5rem;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: white;
`;
const ButtonLayout = styled.div`
        display:${(props) => props.hasButton };
        ${mobile({display:'none',})}`;

const StyledNavLink = styled(NavLink)`
background-color:transparent;
border-radius:18px;
border: 1px solid #2D9596;
padding: 0.8rem 2rem;

text-decoration:none;
text-align:center;
    color:#2D9596;
    font-size:1.4rem;
&:hover{
    background-color: #A6CF98;
}
&.active {
   background-color: #A6CF98; 
   color:#F2FFE9;
   border-color:#F2FFE9;
  }
   `;


function HeaderSection({hasButton}) {
  return (
    <Container>
        <Wrapper>
            <Logo>
                <Image src='assets/images/logo.png'
                    alt='logo' 
                />
            </Logo>
            <RightNav>
                <ButtonLayout hasButton = {hasButton}>
                <Link to="/stays">
                <CustomButton 
                    title={'find your favorites'} 
                    padding={'0rem 1.2rem'}
                    />
                </Link>
                </ButtonLayout>
                <IconContainer to="/profile">
                    <PersonIcon style={{fontSize:'2rem'}}/>
                </IconContainer>
            </RightNav>
            </Wrapper>
    <nav>
            <div style={{display:'flex',justifyContent:'space-around',width:'70%'}}>
                <StyledNavLink to="/" >Home</StyledNavLink>
                <StyledNavLink to="/stays">Stays</StyledNavLink>
                <StyledNavLink to="/restaurants">Restaurants&Cafe</StyledNavLink>
                <StyledNavLink to="/todo">Things to do</StyledNavLink>
            </div>
  </nav>
        

    </Container>
  )
}

export default HeaderSection