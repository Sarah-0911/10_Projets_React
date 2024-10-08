import { useState, useEffect } from 'react';
import sliderData from '../../data/sliderData.js'
import './Slider.css'
import leftArrow from '../../assets/left-arrow.svg'
import rightArrow from '../../assets/right-arrow.svg'

export default function Slider() {

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % sliderData.length);
    }, 2000);

    return () => {
      clearInterval(intervalId);
    }
  }, [])

  const leftSlide = () => {
    const prevSlide = currentIndex - 1;
    (currentIndex === 0) ? setCurrentIndex(sliderData.length - 1) : setCurrentIndex(prevSlide);
  }

  const rightSlide = () => {
    const nextSlide = currentIndex + 1;
    currentIndex === sliderData.length - 1 ? setCurrentIndex(0) : setCurrentIndex(nextSlide);
  }

  return (
    <div className='container'>
      <p className='sliderCount'>{currentIndex + 1} / {sliderData.length}</p>
      <div className='slider'>
        <button onClick={leftSlide} className='arrow'>
          <img src={leftArrow} alt="left arrow" />
        </button>
        <div className="picture">
          <img src={`../../../public/images/img-${sliderData[currentIndex].id}.jpg`} alt={sliderData[currentIndex].description} />
          <span className='description'>{sliderData[currentIndex].description}</span>
        </div>
        <button onClick={rightSlide} className='arrow'>
          <img src={rightArrow} alt="right arrow" />
        </button>
      </div>
    </div>
  )
}
