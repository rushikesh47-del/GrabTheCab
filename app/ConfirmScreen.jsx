import axios from 'axios';


const API_KEY = 'AIzaSyALfaC2MV6Kzz3Y4tYKNoHiTMM-CXKzBWk'; // Replace with your actual API key

export const getDistance = async (from, to) => {
 
  try {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=${encodeURIComponent(from)}&destinations=${encodeURIComponent(to)}&key=${API_KEY}`
    );

    if (response.data.rows[0].elements[0].status === 'OK') {
      const distance = response.data.rows[0].elements[0].distance.value; // Distance in meters
      return distance / 1000; // Convert to kilometers
    } else {
      throw new Error('Unable to get distance');
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};