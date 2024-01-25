import React, { useState, useEffect } from 'react';
import "../../assets/styles/styles.css";
import brand from "../../assets/media/BrandCompendium.webp";


//Componente presentación

const BrandName = () => {
  const backgrounds = ['ivory-cream', 'bg-white', 'slate-blue', 'bg-light'];
  // state name and state modifier
  const [currentBackground, setCurrentBackground] = useState('');
  //Another React Hook
  useEffect(() => {
    // Function to generate a random background class
    const getRandomBackground = () => {
      const randomIndex = Math.floor(Math.random() * backgrounds.length);
      return backgrounds[randomIndex];
    };

    // Set initial background
    setCurrentBackground(getRandomBackground());

    // Change background every 8 seconds
    const intervalId = setInterval(() => {
      setCurrentBackground(getRandomBackground());
    }, 8000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [backgrounds]);

  return (
    <>
      <div id="Brandbg" className={`mt-100 container-fluid ${currentBackground}`}>
        <img className='mx-auto d-block brand-size' src={brand} alt="Mo's Nomadic Trails" />
      </div>
    </>
  );
};

export default BrandName;