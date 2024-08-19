import axios from 'axios';
const apiURL = process.env.REACT_APP_API_ENDPOINT;




export const createPerson = async (data) => {
  try {
    const response = await axios.post(apiURL,data);
    return response.data;
  }catch(err){
    console.error('Error posting data:', err);
    throw err;
  }
};

export const GetPersonByEmail = async (email) => {
  try{
    const response = await axios.get(`${apiURL}/by-email?email=${email}`);
    return response.data;
  } catch (err) {
    console.error('Error fetching data', err);
    if (err.response && err.response.status === 404) {
      alert('Email not found.Please sign in first');
      throw new Error('Email not found.Please sign up first');
    }
     alert('Something went wrong, Please try again later');
     throw new Error('Failed to fetch data');
  }
};

export const addBookingsByEmail = async(email,data) =>{
  try{
    const response = await axios.put(`${apiURL}/${email}`,data);
    return response.data;
  }catch(error){
    alert('Something went wrong, Please try again later');
    throw new Error('Failed to fetch data');
  }
}

