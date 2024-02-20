import React, { useState, useEffect } from 'react';
import "../../assets/styles/styles.css";
import Banner from '../Home/Banner';


//Componente presentación

const BrandName = () => {
/*   const backgrounds = ['blue-steel', 'deep-teal-blue', 'blue-steelbg'];
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
    }, 3000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [backgrounds]); */

  return (
    <>
        <Banner id="Brandbg" className="mt-75 blue-steelbg"/>
    </>
  );
};

export default BrandName;