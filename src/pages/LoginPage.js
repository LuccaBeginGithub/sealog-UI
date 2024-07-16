import React,{useState, useEffect} from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import {GetPersonByEmail} from '../services/api';
import media from '../utilis/responsiveness';

const Container = styled.div`
 margin: 0 2.5rem;
 `;
const LoginWrapper = styled.div`
  display:flex;
  justify-content:center;
  `;

const LoginCard = styled.div`
  width:320px;
  height:225px;
  border-radius:2rem;
  border: 2px solid #9AD0C2;
  box-shadow: 2px 2px 8px #2D9596; 
  padding: 3rem 2.5rem;
  `;

const Form = styled.form`
  flex-direction:column;
  display:flex;
  align-items:center;
  padding:0 1rem;
`;

const InfoColumnWrapper = styled.div`
  margin: 2.5rem 1rem 0 0;
  ${media.mobile`
    margin-top:1.5rem;`}`;

const Label = styled.label`
  font-size:1.8rem;
  font-family:sans-serif;
  font-weight:bold;`;

const Input = styled.input`
  border-bottom: 1.2px solid #2D9596;
  border-left: none;
  border-right:none;
  border-top:none;
  margin-left: 6px;
  outline:none;
  width:200px;
  `;

const Button = styled.button`
  width:125px;
  height:4.5rem;
  text-align:center;
  font-size:1.5rem;
  border-radius:1.5rem;
  margin-top:2.5rem;
  background-color: #9AD0C2;
  border: 1.5px solid #ECF4D6;
  &:hover {
    background-color: #2D9596;
  }
  `;
  const TitleInfo = styled.p`
  font-size:1.8rem;
  font-weight:bold;
  `;
  const Signup = styled.div`
    margin-top:2rem;
    display:flex;
    align-items:center;
    justify-content:center;
  `;


const LoginPage = () => {
 const [email,setEmail] = useState('');
 const {setUserInfo,setIsLoggedIn} = useAuth();
 const navigate = useNavigate();

 useEffect(() => {
  window.scrollTo(0, 0)
},[]);
  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      const personData = await GetPersonByEmail(email);
      setUserInfo(personData);
      setIsLoggedIn(true);
      navigate('/profile');
    } catch(error){
      console.error('Error in fetching data:', error);
    }
  };
  return (
    <Container>
        <LoginWrapper>
            <LoginCard>
            <TitleInfo>Log in to Enjoy Our Full Services!</TitleInfo>
            <Form onSubmit={handleSubmit}>
              <InfoColumnWrapper>
              <Label>
                Email :
                <Input
                  type="text"
                  name="emailAddress" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}                
                />
              </Label>
              </InfoColumnWrapper>
             

            <Button type="submit">Log in</Button>
            </Form>
            <Signup>
              <p style={{fontSize:'1.5rem',marginRight:'1.5rem'}}>No account yet? </p>
              <Link style = {{fontSize:'1.5rem',color:'#265073'}} to={'/signup'}>Sign Up</Link>
            </Signup>
            </LoginCard>
        </LoginWrapper>
        
    </Container>

  )
}

export default LoginPage