import React, { useState, useEffect } from 'react';
import DatePicker from './components/DatePicker';
import Image from './components/Image';
import Header from './svgComponents/Header';


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
  }, [startDate, endDate]);
 
  function setDate(start, end) {
    setStartDate(start);
    setEndDate(end);
  }

  function loadingHandler(loadStat) {
    setIsLoaded(loadStat);
  }
  
  if (error) {
    return <div>Something went wrong. Error: {error.message}</div>
  } 
  else if (!isLoaded) {
    return (
      <div className="loading">
        <img 
          src={process.env.PUBLIC_URL + '/loading-image2.gif'}
          alt=""
        />
        <p>Getting Data From NASA...</p>
      </div>
    );
  } 
  else {
    return (
      <React.Fragment>
        <Header />
        <nav role="navigation" className="nav">
          <p id="nav_header">Choose a period to see NASA's picture(s) of the day.</p>
          <p>Or reload the page for 10 random pictures.</p>
          <DatePicker setDate={setDate} setEndDate={setDate} load={loadingHandler} />
        </nav>
        <main className="App">
          {data.map(item => 
            <Image key={item.title} {...item} />
          )}
        </main>
        <footer className="footer">
          <p>by Ghazaleh H.</p>
          <p>Brought to you by NASA's<a href="https://api.nasa.gov/#apod" id="link"> Astronomy Picture of the Day</a> API</p>
        </footer>
      </React.Fragment>
    );
  }
}

export default App;
