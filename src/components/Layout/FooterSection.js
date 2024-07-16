import React from 'react'
import styled from 'styled-components';
import CustomInput from '../Custom/CustomInput';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import media from '../../utilis/responsiveness';

const Container = styled.section`
    margin-top:10rem;
    ${media.mobile`
       margin-top:4.5rem;
        `}
    `;
const Content = styled.div`
  margin: 7.5rem 4.5rem;
  display:flex;
    ${media.ipad`
        padding: 3.5rem 4.5rem;
        flex-direction:column;
        `}
 `;
const Declare = styled.div`
margin-left:4.5rem;
    ${media.mobile`
        margin-top:4rem;
        `}
`;
const Right = styled.p`
  color:gray;`;
const Image = styled.img``;
const Text = styled.a`
  padding:2rem 4rem;
  display:inline-block;
  color:gray;
  font-size:1.5rem;
  ${media.mobile`
        padding:1.5rem 1rem;
        `}
  `;
const Logo = styled.div`
  flex:1;`;
const Options = styled.div`
  flex:2;`;
const Email = styled.div`
  flex:1.5;
 `;
const Invite = styled.p`
  font-size:2rem;
  font-weight:bold;
  margin-bottom:0;
  `;
const InviteWrapper = styled.div`
display:flex;
align-items:center;
`;
function FooterSection() {
  return (
    <Container>
        <hr/>
        <Content>
          <Logo>
            <Image src='/assets/images/logo.png'
                      alt='logo' width={168} height={55}
                  />
          </Logo>
          <Options>
              <Text>Hotels</Text>
              <Text>Flights</Text>
              <Text>Support</Text>
              <Text>Custom Services</Text>
              <Text>Things to Do</Text>
          </Options>
          <Email>
              <InviteWrapper>
                    <Invite>
                      Join our community
                    </Invite>
                    <LocalFireDepartmentIcon style={{color:'red',fontSize:'2.5rem'}}/>
              </InviteWrapper>
              <CustomInput  marginTop={'1.5rem'}/>
          </Email>
        </Content>
        <Declare>
          <Right>
              Copyright 2024 by sea-log. All rights reserved.
          </Right>
        </Declare>
    </Container>
  )
}

export default FooterSection