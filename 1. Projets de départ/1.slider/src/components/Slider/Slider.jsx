import { useState, useEffect } from 'react';
import sliderData from '../../data/sliderData.js'
import './Slider.css'
import leftArrow from '../../assets/left-arrow.svg'
import rightArrow from '../../assets/right-arrow.svg'

export default function Slider() {

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalID = setInterval(() => {
      setCurrentIndex(prevIndex => prevIndex + 1 % sliderData.length);
    }, 2000);

    return () => {
      clearInterval(intervalID);
    }
  }, [])


  const toggleSlide = (direction) => {
    if(direction === -1) {
      setCurrentIndex(currentIndex === 0 ? sliderData.length - 1 : currentIndex - 1);
    }
    else if (direction === 1) {
      setCurrentIndex(currentIndex === sliderData.length - 1 ? 0 : currentIndex + 1);
    }
  }

  return (
    <div className='container'>
      <p className='index-info'>{currentIndex + 1} / {sliderData.length}</p>
      <div className='slider'>
        <button onClick={() => toggleSlide(-1)} className='navigation-button'>
          <img src={leftArrow} alt="previous image" />
        </button>
        <div className="picture">
          <img src={`images/img-${sliderData[currentIndex].id}.jpg`} alt={sliderData[currentIndex].description} />
          <span className='image-info'>{sliderData[currentIndex].description}</span>
        </div>
        <button onClick={() => toggleSlide(1)} className='navigation-button'>
          <img src={rightArrow} alt="next image" />
        </button>
      </div>
    </div>
  )
}

// Voir le corrigé de l'exo pour méthode/logique différente
