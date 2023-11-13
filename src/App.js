import React, { useState, useEffect } from 'react';
import "./App.css";


const DEMO_KEY = "c4SYo3nTTT2wi3mCddvXy7kZVAOFUzpd0hQFvgI8"


function App() {

  const [apodData, setApodData] = useState({});

  const [date,setDate] = useState(new Date().toISOString().split("T")[0]);

  useEffect(() => {
    const fetchApodData = async () => {
      const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${DEMO_KEY}&date=${date}`);
      const data = await response.json();
      setApodData(data);
    };

    fetchApodData();
  }, [date]);

  return (
    <div>
      <h1>{apodData.title}</h1>
      <img src={apodData.url} alt={apodData.title} />
      <p>{apodData.explanation}</p>
      <p>{apodData.date}</p>
      <input type="date" onChange={e => setDate(e.target.value)} value={date}>
    </input>

    </div>
  );
}

export default App;
// c4SYo3nTTT2wi3mCddvXy7kZVAOFUzpd0hQFvgI8