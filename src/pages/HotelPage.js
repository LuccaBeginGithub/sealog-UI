import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import DefaultInfoSection from '../components/HotelPage/DefaultInfoSection';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BedIcon from '@mui/icons-material/Bed';
import CustomBackToTopButton from '../components/Custom/CustomBackToTopButton';
import ProductPageHeroSection from '../components/Layout/ProductPageHeroSection';
import media from '../utilis/responsiveness';
import { useNavigate } from 'react-router-dom';

const FormWrapper = styled.div`
  width:100%;
  display:flex;
  justify-content:center;
  margin-top:-2rem;
  position:absolute;
`;


const StyledForm = styled.form`
  display:flex;
  width:70%;
  height:50px;
  background-color:#F4CE14;
  position:absolute;
  padding:0.3rem;
  border-radius:0.5rem;
  justify-content:space-evenly;
  align-items:center;
  ${media.ipad`
        width:80%;`}
  ${media.ipadAir`
        width:100%;`}
  ${media.mobile`
        flex-direction:column;
        height:105px;
        align-items:flex-start;
        padding-left:20px;`}
  `;

const FormButton = styled.button`
  height:70%;
  width:7rem;
  background-color:#495E57;
  color:white;
  &:hover{
    background-color:#748E63;
  }
  &:active{
    transform: scale(0.9);
  }`;

const DateSelector = styled.div`
  display:flex;
  align-items:center;
  height:100%;
  justify-content:space-evenly;
`;

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
const StyledSelect = styled.select`
width:14rem;
text-align:center;
color:gray; 
border-radius:8px;
border: 1px solid gray;
outline:none;`;
const HotelPage = () => {
  const [location, setLocation] = useState();
  const [checkInDate, setCheckInDate] = useState(new Date());
  let tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const [checkOutDate, setCheckOutDate] = useState(tomorrow);
  const [roomCount, setRoomCount] = useState(1);
  const [destination, setDestination] = useState();
  const [category, setCategory] = useState();
 
  const navigate  = useNavigate();
  const handleLocationChange = (e) => {
    setLocation(e.target.value);
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

  useEffect(() => {
    if (destination) {
      navigate(`/stays/search?destination=${destination}`);
    } else if (category) {
      navigate(`/stays/search?category=${category}`);
    }
  }, [destination, category,navigate]); 
  useEffect(() => {
    window.scrollTo(0, 0)
  },[]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform any validation or submission logic here
    if (location && checkInDate && checkOutDate && roomCount) {
      setDestination(location);  
    }else{
      alert('Please fill in all fields.');
    }
  };
  return (
    <main >

      <ProductPageHeroSection src = {'assets/images/hotelragehero.jpg'}
        title={' Holiday Rentals all over the world'} 
        subtitle={'hotels, houses, resorts, yacht and more'}/>
      <FormWrapper>
          <StyledForm onSubmit={handleSubmit}>
      <RoomSelector>
        
        {/* <Label>Location:</Label> */}
        <LocationCityIcon color='action' style={{marginRight:'1rem',fontSize:'2.2rem'}}/>
        <StyledSelect value={location} onChange={handleLocationChange}>
          <option value="" style={{color:'#EE9322'}}>Select Location</option>
          <option value="Fiji">Fiji</option>
          <option value="Bahamas">Bahamas</option>
          <option value="Bora Bora">Bora Bora</option>
          <option value="Tahiti">Tahiti</option>
          <option value="Maldive">Maldive</option>
          <option value="Mauritius">Mauritius</option>
        </StyledSelect>
      </RoomSelector>
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
      <input style={{width:'5rem',textAlign:'center',margin:'0.3rem'}} type="number" value={roomCount} readOnly />
      <button  type = 'button' onClick={handleIncrement}>+</button>

       
      </RoomSelector>
      <FormButton type="submit" >Search</FormButton>
    </StyledForm>
    </FormWrapper>
    <DefaultInfoSection setDestination={setDestination} setCategory={setCategory} />
    <CustomBackToTopButton/>
  
    </main>
  );
}

export default HotelPage