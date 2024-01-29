import React,{useState} from 'react';
import styled from 'styled-components';
import { createPerson } from '../services/api';
import { useNavigate,Link } from 'react-router-dom';
import media from '../utilis/responsiveness';



const Container = styled.div`
 margin: 0 2.5rem;
 `;
const LoginWrapper = styled.div`
  display:flex;
  justify-content:center;
  `;

const LoginCard = styled.div`
  width:300px;
  height:340px;
  border-radius:2rem;
  border: 2px solid #9AD0C2;
  box-shadow: 2px 2px 8px #2D9596; 
  padding: 3rem 2.5rem;
  ${media.mobile`
    padding-top:1.5rem;`}
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
  color:#265073;
  font-weight:bold;`;

const Input = styled.input`
  border-bottom: 1.2px solid #2D9596;
  border-left: none;
  border-right:none;
  border-top:none;
  margin-left: 6px;
  outline:none;
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


const SignupPage = () => {
  
    const navigate = useNavigate();
    const [signUpFormData, setsignUpFormData] = useState({
        firstName: '',
        lastName: '',
        emailAddress:'',
      });
    
      // Handle input changes
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setsignUpFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
    
      // Handle form submission
      const handleSubmit = async(e) => {
        e.preventDefault();
        
        const postData = {...signUpFormData,
          bookings:[
          {
            name:'',
            checkInDate:'',
            checkOutDate:'',
            roomCount:0
          }
        ]};
        
        try{
          const response = await createPerson(postData);
          alert('Sign up successfully!')
          navigate('/login');
        } catch(error){
          if (error.response && error.response.status === 400) {
            alert('Email address is already in use');
        } else {
            alert('An error occurred during registration');
        }
        }

       
      };
      return (
        <Container>
            <LoginWrapper>
                <LoginCard>
                <TitleInfo>Wellcome, new friend! Tell us a bit about yourself!</TitleInfo>
                <Form onSubmit={handleSubmit}>
                  <InfoColumnWrapper>
                  <Label>
                    First Name :
                    <Input
                      type="text"
                      name="firstName" 
                      value={signUpFormData.firstName}
                      onChange={handleInputChange}                
                    />
                  </Label>
                  </InfoColumnWrapper>
                  <InfoColumnWrapper>
                  <Label>
                    Last Name :
                    <Input
                      type="text"
                      name="lastName" 
                      value={signUpFormData.lastName}
                      onChange={handleInputChange}                
                    />
                  </Label>
                  </InfoColumnWrapper>
                  <InfoColumnWrapper>
                  <Label>
                    Email :
                    <Input
                        style={{width:'200px'}}
                        type="text"
                        name="emailAddress" 
                        value={signUpFormData.emailAddress}
                        onChange={handleInputChange}                
                    />
                  </Label>
                  </InfoColumnWrapper>
    
                <Button type="submit">Sign Up</Button>
                </Form>  
                <Signup>
                  <p style={{fontSize:'1.5rem',marginRight:'1.5rem'}}>Already signed up? </p>
                  <Link style = {{fontSize:'1.5rem',color:'#265073'}} to={'/login'}>Log in</Link>
                </Signup>   
                </LoginCard>
            </LoginWrapper>
        </Container>
    
  )
}

export default SignupPage