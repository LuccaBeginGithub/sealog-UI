import React,{useState} from 'react';
import styled from 'styled-components';
import product from '../models/product';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { CustomHeader } from '../components/Custom/CustomHeader';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StarIcon from '@mui/icons-material/Star';
import AmenitiesSection from '../components/BookingPage/AmenitiesSection';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BedIcon from '@mui/icons-material/Bed';
import { addBookingsByEmail } from '../services/api';
import { useAuth } from '../context/AuthContext';


const Conatiner = styled.div`
 padding: 0rem 8.5rem 0rem 8.5rem;
`;
const LocationText = styled.p`
color:gray;
margin-right:0.5rem;
`;
const ProductLocation = styled.div`
display:flex;
align-items:center;
`;
const Rating = styled.div`
    display: flex;
    align-items: center;
    `;
const RatingScore = styled.p`
    margin-left:0.6rem;
    color:gray;
    margin-right:1.2rem;
    `;
const ImageBox = styled.div`
    display:flex;
    height:60rem;
    margin-top:1rem;
    `;
const MainImage = styled.div`
    flex: 2.5;
    padding-right: 1.5rem;
    ;
`;

const SubImage = styled.div`
    flex:1;
    height:60rem;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    
`;

const Image = styled.img`
    width:100%;
    height:100%;
    border-radius:1.2rem;
    object-fit:cover;
    `;
const ImageSmall = styled.img`
    height:18.8rem;
    border-radius:1.2rem;
`;
const Wrapper = styled.div`
    display:flex;
`;
const DetailsWrapper = styled.div`
    flex:3;
`;
const BookingFormWrapper = styled.div`
    flex:2;
    display:flex;
    justify-content:flex-end;
`;
const Description = styled.p`
    color:gray;
    font-size:1.5rem;
    line-height:2;
    margin-top:5.5rem;
    padding-right:2rem;
    text-align:justify;
    `;
const BookingForm = styled.div`
    width:35rem;
    height:54rem;
    margin-top:5rem;
    border-radius:1.5rem;
    border: 1.2px solid #B7B7B7;
    padding:1.5rem 2.5rem 2rem 2.5rem;
`;
const PriceBar = styled.div`
    display:flex;
    align-content:flex-start;
`;
const Price = styled.p`
    color: #B7B7B7;
    font-size:2rem;
    font-weight:bold;
    text-decoration:line-through;
`;
const DiscountPrice = styled.p`
    font-size:2rem;
    font-weight:bold;
    margin-left:1rem;
    margin-right:0.2rem;
`;
const StyledForm = styled.form`
`;
const FormButton = styled.button`
    background-color:#2D9596;
    margin-left:9rem;
    border-radius:18px;
    border: 1px solid #2D9596;
    padding: 0.8rem 2rem;
    height:4rem;
    text-align:center;
        color:white;
        font-size:1.4rem;
    &:hover{
        background-color: #6A9C89;
    }
    &.active {
    background-color: #A6CF98; 
    color:#F2FFE9;
    border-color:#F2FFE9;
    }
`;
const DateSelector = styled.div`
  display:flex;
  align-items:center;
  height:100%;
  justify-content:space-evenly;`;

const RoomSelector = styled.div`
  display:flex;
  justify-content:flex-start;
  align-items:center;
  `; 
const StyledDatePicker = styled(DatePicker)`
    width:10rem;
    text-align:center;
    color:gray;
    padding:0.4rem 1rem 0.4rem 1rem;
    border-radius:8px;
    border: 1px solid gray;
    outline:none;
`;
const Input = styled.input`
    width:6rem;
    text-align:center;
    margin:0.5rem;
    outline:none;
    border-radius:7px;
    border: 1px solid gray;
    height:2.2rem;
    color:gray;
`;
const Selector = styled.div`
    display:flex;
    flex-direction:column;
    background-color:#F5F7F8;
    padding:2rem;
    height:10rem;
    border-radius:1.5rem;
    margin:1.7rem 0 4.5rem 0;
`;
const FeeChecker = styled.div`
    margin-top:5.5rem;
`;
const FeeItem = styled.div`
    display:flex;
    justify-content:space-between;
`;
const FeeText = styled.p`
    font-size:1.4rem;
    font-weight:bold;
`;
const FeeTotal = styled.div`
    background-color:#F5F7F8;
    display:flex;
    justify-content:space-between;
    margin-top:2rem;
    border-radius:1rem;
    padding:0px 12px 0px 12px;
`;
const BookingPage = () => {
    const [checkInDate, setCheckInDate] = useState(new Date(2024,1,20));
    const [checkOutDate, setCheckOutDate] = useState(new Date(2024,1,21));
    const [roomCount, setRoomCount] = useState(1);
    const navigate = useNavigate();
    const {userInfo,setUserInfo,isLoggedIn} = useAuth();
  
    const { name} = useParams();
    let name1 = '';
    name1 =name;
    const hotelList = product.filter(item => item.name === name);
    let hotel = {};
   if(hotelList){
    hotel = hotelList[0];
    }

   function calculateDaysDifference(startDate, endDate) {
        const timeDifference = endDate.getTime() - startDate.getTime();
        const daysDifference = timeDifference / (1000 * 3600 * 24);
        return Math.round(daysDifference);
    };

  const handleCheckInChange = (date) => {
    setCheckInDate(date);
  };

  const handleCheckOutChange = (date) => {
    setCheckOutDate(date);
  };

  
  const handleIncrement = () => {
    setRoomCount(roomCount + 1);
  };

  const handleDecrement = () => {
    if (roomCount > 1) {
      setRoomCount(roomCount - 1);
    }
  };
    const handleSubmit = async(e) =>{
        e.preventDefault();
        const postData = {
            name:name1,
            checkInDate:checkInDate.toISOString().substring(0, 10),
            checkOutDate:checkInDate.toISOString().substring(0, 10),
            roomCount:roomCount
        }
        if(isLoggedIn){
            try{
                const response = await addBookingsByEmail(userInfo.emailAddress,postData);
                setUserInfo(response);
                alert("Book Successfully!");
                navigate('/profile');
            } catch(error){
                console.error('Error in fetching data:', error);
            }
        } else{
            navigate('/login');
        }
    };
    let totalFee = hotel.discountPrice*roomCount*calculateDaysDifference(checkInDate,checkOutDate);
  return (
    <Conatiner>
        <CustomHeader title={name} textAlign={'justify'}/>
            <div style={{display:'flex',justifyContent:'flex-start'}}>
                <Rating>
                    <StarIcon style={{color:'gold'}}/>
                    <RatingScore>
                        {4.9}
                    </RatingScore>
                </Rating>
                <LocationText>
                    {hotel.category}
                </LocationText>
                <ProductLocation>
                    <LocationOnIcon style={{color:'#67729D'}} />
                    <LocationText>
                        {hotel.location}
                    </LocationText>
                </ProductLocation>
            </div>
            <ImageBox>
                <MainImage>
                    <Image src = {'/' + hotel.src}/>
                </MainImage>
                <SubImage>
                <ImageSmall src = {'/' + hotel.src}/>
                <ImageSmall src = {'/' + hotel.src}/>
                <ImageSmall src = {'/' + hotel.src}/>
                </SubImage>
            </ImageBox>
            <Wrapper>
                <DetailsWrapper>
                    <Description>
                        {`Conveniently located in the heart of ${hotel.location}, ${hotel.name} offers easy access to attractions around. Whether you're here for business or leisure, our prime location enhances your overall experience.

        Experience the epitome of luxury and hospitality at ${hotel.name}. Book your stay with us and create lasting memories in the lap of indulgence.

        Feel free to customize the description based on specific details about the hotel, its location, and the services it offers.`}<br/>
                    
                        {`At ${hotel.name}, our dedicated staff is committed to providing personalized service, ensuring that every guest feels pampered and valued. From the moment you arrive until your departure, our team is here to make your stay truly memorable.`}
                    </Description>
                    <AmenitiesSection/>
                </DetailsWrapper>
                <BookingFormWrapper>
                    <BookingForm>
                        <PriceBar>
                            <Price>
                                ${hotel.price}
                            </Price>
                            <DiscountPrice>
                                ${hotel.discountPrice}
                            </DiscountPrice>
                            <p style={{paddingTop:'0.8rem'}}>
                                /night
                            </p>
                        </PriceBar>
                        <Rating >
                                <StarIcon style={{color:'gold'}}/>
                                <RatingScore style={{margin:0}}>
                                    4.9 (318 reviews)
                                </RatingScore>
                        </Rating>
                        <StyledForm onSubmit = {handleSubmit}>
                        <Selector>
                                <DateSelector>
                                    {/* <Label>Check-in Date:</Label> */}
                                    <CalendarMonthIcon color='action' style={{marginRight:'1rem',fontSize:'2.2rem'}}/>
                                    <StyledDatePicker
                                    selected={checkInDate}
                                    onChange={handleCheckInChange}
                                    dateFormat="MM/dd/yyyy"
                                    />

                                <hr width='5px' fontWeight='2px' dir="rtl"/>
                            
                                    {/* <Label >Check-out Date:</Label> */}
                                    <StyledDatePicker
                                    selected={checkOutDate}
                                    onChange={handleCheckOutChange}
                                    dateFormat="MM/dd/yyyy"
                                    minDate={checkInDate} 
                                    />
                            
                                </DateSelector>
                                <RoomSelector>
                                {/* <Label >Room Count:</Label> */}
                                    <BedIcon color='action' style={{marginRight:'1rem',fontSize:'2.2rem'}}/>
                                    <button type = 'button' onClick={handleDecrement}>-</button>
                                    <Input type="number" value={roomCount} readOnly />
                                    <button type = 'button' onClick={handleIncrement}>+</button>
                                </RoomSelector>
                            </Selector>

                            <FormButton type='submit'>
                                Confirm Booking
                            </FormButton>
                        </StyledForm>
                        <FeeChecker>
                            <FeeItem>
                                <FeeText style={{color:'gray'}}>
                                    ${hotel.discountPrice} &times; {roomCount} &times; {calculateDaysDifference(checkInDate,checkOutDate)}
                                </FeeText>
                                <FeeText>
                                    ${totalFee}
                                </FeeText>
                            </FeeItem>
                            <FeeItem>
                                <FeeText style={{color:'gray'}}>
                                     Service fee
                                </FeeText>
                                <FeeText>
                                      $20
                                </FeeText>
                            </FeeItem>
                            <FeeTotal>
                                <FeeText>
                                     Total
                                </FeeText>
                                <FeeText>
                                      ${totalFee+20}
                                </FeeText>
                            </FeeTotal>
                        </FeeChecker>
                    </BookingForm>
                </BookingFormWrapper>
            </Wrapper>

    </Conatiner>
  )
}

export default BookingPage