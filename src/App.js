import React, {useState} from 'react';

import axios from 'axios';

export default function App() {

  let apiKey = '69abced48abe45b683f100126241104';
  
  
  let [city, setCity] = useState(null);
  let [message, setMessage] = useState(null);
  let [temperature, setTemperature] = useState(null);
  
  function updateCity(event){
    setCity(event.target.value)
    
  }

   function getTemperature(response){
      console.log(response)
   }

  function handleSubmit(event){
    event.preventDefault();
    let apiUrl = `http://api.weatherapi.com/v1/current.json?key=apiKey&q=${city}&aqi=no`
    axios.get(apiUrl).then(getTemperature);

   
  
    setMessage(`The temperature in ${city} is ${temperature}`)
  }
  return (
    <div className="App">
      <h1>Weather Search Engine</h1>

      <form onSubmit={handleSubmit}>
        <input type='search' placeholder='Type a city' onChange={updateCity}/>
        <input type='submit' value='Submit'/>
      </form>

      <h2> {message}</h2>
    </div>
  );
}


       
     