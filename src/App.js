import React, { useState, useEffect } from 'react';
import DatePicker from './components/DatePicker';
import Image from './components/Image';

function App() {
  const key = 'T3rb301Uv0xEVOjZ9V41b1SgkbKzyuAyJ8nE7nNn';
  const baseURL = 'https://api.nasa.gov/planetary/apod?api_key=' + key;
  let url = '';

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  if(startDate !== '' && endDate !== '') {
    url += baseURL + '&start_date=' + startDate + '&end_date=' + endDate;
  }
  else {
    url = baseURL + '&count=10';
  }

  useEffect(() => {
    fetch(url)
      .then(response => response.json()) 
      .then(result => {
          setData(result);
          setIsLoaded(true);
        },
      )
      .catch(error => {
        setError(error);
      }) 
  }, [startDate, endDate, isLoaded]);
 
  function setDate(start, end) {
    setStartDate(start);
    setEndDate(end);
  }

  function loadingHandler(loadStat) {
    setIsLoaded(loadStat);
  }
  
  if (error) {
    return <div>Someting wnt wrong. Error:{error.message}</div>
  } 
  else if (!isLoaded) {
    return (
      <div className="loading">
        <img className="loading_image" 
          src={process.env.PUBLIC_URL + '/loading-image.gif'}
          alt="Getting Data from NASA..."
        />
        <p>Getting Data From NASA...</p>
      </div>
    );
  } 
  else {
    return (
      <div className="App">
        <h1 className="header">Awesome Pictures From Above Us!!!</h1>
        <DatePicker setDate={setDate} setEndDate={setDate} load={loadingHandler} />
        {data.map((item,idx) => <Image key={idx} {...item} />)}
        <footer className="footer">Project for Shopify Internship 2022 by Ghazaleh H.</footer>
      </div>
    );
  }
}

export default App;
