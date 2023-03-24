import React, { useEffect, useState } from "react";
import axios from 'axios';
import cities from 'cities.json';
import coldImage from './assets/cold.jpg';
import warmImage from './assets/warm.jpg';
import hotImage from './assets/hot.jpg';

function App() {
  const API_key = 'c732d70a6b3e577eb5f11f61cc4e6264';
  const [inputSearch,setInputSearch] = useState('');
  const [foundCities,setFoundCities] = useState([cities]);
  const [bgImage,setBgImage] = useState(coldImage);
  const [dropdown, setDropdown] = useState([]);
  const [error,setError] = useState('');
  const [start,setStart] = useState(false);
  const [submit,setSubmit] = useState(false);
  const [temp,setTemp] = useState({
    city: '',
    country: '',
    temperature: '',
    description: '',
  })

  function handleChange(event) {
    setSubmit(false);
    const keyword = event.target.value;
    if(keyword !== ''){
      const results = cities.filter((city) => {
        return city.name.toLowerCase().startsWith(keyword.toLowerCase());
      });
      setFoundCities(results);
    } else {
      setFoundCities(cities.slice(0,5));
    }
    setInputSearch(keyword);
  }
  
  console.log(temp);

  function handleClick(){
    setStart(true);
    setSubmit(true);
    setError('');
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${inputSearch}&lang=vi&units=metric&appid=${API_key}`)
      .then(res => {
        const city = res.data.name + ' ,';
        const country = res.data.sys.country;
        const temperature = res.data.main.temp + '°C';
        const description = res.data.weather[0].description;
        setTemp({city,country,temperature,description});
        const temp = res.data.main.temp;
        setBgImage(() => {
          if(temp < 10) {
            return coldImage;
          } else if(temp > 25) {
            return hotImage;
          } else {
            return warmImage;
          }
        })
      })
      .catch(error => setError(error));
  }
  console.log(bgImage);

  useEffect(() => {
    setDropdown(foundCities.slice(0,5).map((item) => (
      <div className="dropdown-column">
        <div
          onClick={() => setInputSearch(item.name)}
          key={item.name} 
          className="dropdown-row"
        >
          {item.name}
        </div>
      </div>
    )))
  },[inputSearch])

  return (
    <div className="App">
      <img src={bgImage} alt="Image"></img>
      <div className="main">
        <div className="container">
          <div class="search">
            <input type="text" class="form-control" placeholder="City Name" onChange={handleChange} value={inputSearch}/>
            <button class="btn btn-primary" onClick={handleClick}>Search</button>
          </div>
          <div className={`dropdown ${submit ? 'hidden' : ''}`}>
            {dropdown}
          </div>
        </div>
        <div className="temp">
          {start ? ( error === '' ? (
              <div className="info">
                <h1>{temp.temperature} </h1>
                <h5>{temp.city} {temp.country} </h5>
                <h2>{temp.description}</h2>
              </div>
            )  : (
              <div className="info">
                 <h1>Not found</h1>
              </div>
            )
          ) : (<div className="info">
                 <h1>No information</h1>
               </div>)}
              
        </div>
      </div>
    </div>
  );
}

export default App;
