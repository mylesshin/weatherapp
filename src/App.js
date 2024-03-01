import './App.css';
import SearchBar from './components/SearchBar';
import WeatherWidget from './components/WeatherWidget';
import { React, useState } from 'react';

function App() {
  const [city, setCity] = useState("");
  return (
    <div 
      style={{ 
        backgroundImage: "url('/background.webp')",
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat'
      }} className="min-h-screen flex flex-col items-center justify-center">

        <SearchBar setCity={setCity}/>
        <WeatherWidget city={city}/>
        {/* <div className="max-w-lg rounded-3xl overflow-hidden shadow-lg p-4 bg-gray-800 bg-opacity-50 w-[25rem] h-[25rem] flex flex-col items-center mt-8"> */}
        {/* </div> */}
      </div>
  );
}

export default App;
