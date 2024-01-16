import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import DefaultInfoSection from '../components/HotelPage/DefaultInfoSection';
import { mobile } from '../utilis/responsiveness';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BedIcon from '@mui/icons-material/Bed';
import SearchResultPage from '../components/HotelPage/SearchResultPage';
import ProductPageHeroSection from '../components/Layout/ProductPageHeroSection';




const StyledForm = styled.form`
  display:flex;
  width:70%;
  margin: -2rem 0rem 15% 15%;
  height:50px;
  background-color:#F4CE14;
  position:absolute;
  padding:0.3rem;
  border-radius:0.5rem;
 justify-content:space-evenly;
  align-items:center;
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
  justify-content:space-evenly;`;

const RoomSelector = styled.div`
  display:flex;
  justify-content:flex-start;
  align-items:center;

 
  `; 


const HotelPage = () => {
  const [location, setLocation] = useState();
  const [checkInDate, setCheckInDate] = useState(new Date(2024,1,20));
  const [checkOutDate, setCheckOutDate] = useState(new Date(2024,1,21));
  const [roomCount, setRoomCount] = useState(1);
  const [destination, setDestination] = useState();
  const [category, setCategory] = useState();
  const [content, setContent] = useState(
    <DefaultInfoSection setDestination={setDestination} setCategory={setCategory} />
  );

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
      setContent(<SearchResultPage 
      destination={destination}
      />);
    } else if (category) {
      setContent(<SearchResultPage 
      category={category}
       />);
    }
  }, [destination, category]); 

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform any validation or submission logic here
    if (location && checkInDate && checkOutDate && roomCount) {
      setContent(<SearchResultPage 
      location={location}
       />);  
    }else{
      alert('Please fill in all fields.');
    }
  };
  return (
    <div>

      <ProductPageHeroSection src = {'assets/images/hotelragehero.jpg'}
        title={' Holiday Rentals all over the world'} 
        subtitle={'hotels, houses, resorts, yacht and more'}/>

      <StyledForm onSubmit={handleSubmit}>
      <RoomSelector>
        
        {/* <Label>Location:</Label> */}
        <LocationCityIcon color='action' style={{marginRight:'1rem',fontSize:'2.2rem'}}/>
        <select value={location} onChange={handleLocationChange}>
          <option value="" style={{color:'#EE9322'}}>Select Location</option>
          <option value="Fiji">Fiji</option>
          <option value="Bahamas">Bahamas</option>
          <option value="Bora Bora">Bora Bora</option>
          <option value="Tahiti">Tahiti</option>
          <option value="Maldive">Maldive</option>
          <option value="Mauritius">Mauritius</option>
        </select>
      </RoomSelector>
      <DateSelector>
        {/* <Label>Check-in Date:</Label> */}
        <CalendarMonthIcon color='action' style={{marginRight:'1rem',fontSize:'2.2rem'}}/>
        <DatePicker
          selected={checkInDate}
          onChange={handleCheckInChange}
          dateFormat="MM/dd/yyyy"
        />

      <hr width='5px' fontWeight='2px' dir="rtl"/>
   
        {/* <Label >Check-out Date:</Label> */}
        <DatePicker
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
      {content}
    </div>
  );
}

export default HotelPage