import { useState } from 'react';
import { TailSpin } from 'react-loader-spinner';
import TemperatureTable from './components/temperatureTable';

function App() {

  const[cityName, setCityName] = useState("");
  const[showLoading, setShowLoading] = useState(false);
  const[data, setData] = useState([]);
  const apiKey = '1635890035cbba097fd5c26c8ea672a1';


  const getLatAndLong = async() => {
    setShowLoading(true);
    let url = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${apiKey}`
    fetch(url)
  .then(async response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    let weatherData = await response.json();
    getWeather(weatherData[0].lat, weatherData[0].lon);
  })
  .catch(error => {
    setShowLoading(false);
    console.error('Fetch error:', error);
    alert("Please enter a valid city name");
  });
  }

  const getWeather = (lat, lon) => {
    if(cityName.length > 0) {
    let url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`
    fetch(url)
  .then(async response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    let weatherData = await response.json();
    setShowLoading(false);
    console.log(weatherData.list);
    
    setData(weatherData.list);
  })
  .catch(error => {
    setShowLoading(false);
    console.error('Fetch error:', error);
    alert("Please enter a valid city name");
  });
} else {
  setShowLoading(false);
  alert("Please enter the city name");
}
  }

  return (
    <div className="App">
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <div style={{display: 'flex', flexDirection: 'row', 
        justifyContent: 'center', padding: "10px", alignItems: "center", 
        flexWrap: "wrap"}}>
          <h1 style={{color: 'orange', margin: "10px", textAlign: "center"}}>
          Weather in your city</h1>
          <input placeholder='City name' value={cityName} 
          style={{borderWidth: '2px', borderColor: 'orange', height: "30px", margin: "10px", borderRadius: "10px", width: "200px", padding: "5px", fontSize: "large"}} 
          onChange={(e) => setCityName(e.target.value)}/>
          <button onClick={getLatAndLong} 
          style={{backgroundColor: "orange", height: "40px", margin: "10px", width: "100px", borderRadius: "10px"}}>Search</button>
    <TailSpin
  visible={showLoading}
  height="40"
  width="40"
  color="#4fa94d"
  ariaLabel="tail-spin-loading"
  radius="1"
  wrapperStyle={{}}
  wrapperClass=""
  />
        </div>

        <div style={{display: 'flex', flexDirection: 'row', 
        justifyContent: 'center', padding: "10px", 
        alignItems: "center", flexWrap: "wrap"}}>
          
{data.map((e, index) => 
  <TemperatureTable ket={index} date={e.dt_txt ? new Date(e.dt_txt).toLocaleDateString('en-Gb', {year: 'numeric', month: '2-digit', day: '2-digit'}): ""}  
  min={e.main.temp_min} max={e.main.temp_max} pressure={e.main.pressure} humidity={e.main.humidity}/>
)}
        
</div>
      </div>
    </div>
  );
}

export default App;
