import { useState } from 'react';
import sliderData from '../../data/sliderData.js'
import './Slider.css'
import leftArrow from '../../assets/left-arrow.svg'
import rightArrow from '../../assets/right-arrow.svg'

export default function Slider() {

  const [showSlide, setShowSlide] = useState(sliderData[0]);

  return (
    <div className='container'>
      <p className='sliderCount'>{showSlide.id} / 5</p>
      <div className='slider'>
        <button className='arrow'>
          <img src={leftArrow} alt="left arrow" />
        </button>
        <div className="picture">
          <img src={`../../../public/images/img-${showSlide.id}.jpg`} alt={showSlide.description} />
          <span className='description'>{showSlide.description}</span>
        </div>
        <button className='arrow'>
          <img src={rightArrow} alt="right arrow" />
        </button>
      </div>
    </div>
  )
}
