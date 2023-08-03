import { useEffect, useState } from 'react'
import './App.css'
import { getCityData } from './API/API';

function App() {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [coordData, setCoordData] = useState(0);
  
 useEffect(() => {
    setCity("Palencia");
    setCountry("ES");
 },[]);

  
  useEffect(()=> {
   setCoordData(getCityData());
  },[]);

/*   const dataWeather = API_GET_WEATHER(coordData.lat, coordData.lon);
  
  console.log(dataWeather);
   */
  return (
    <>
    
  </>
  )}

export default App;
