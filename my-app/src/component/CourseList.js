import android from '../images/homepage-lp-android-developer-3.jpg';
import backend from '../images/homepage-lp-back-end-developer-2.jpg';
import frontend from '../images/homepage-lp-front-end-web-developer-2.jpg';
import ios from '../images/homepage-lp-ios-developer-2.jpg';
import ml from '../images/homepage-lp-machine-learning-developer-2.jpg';
import Slider from 'react-slick';
import { useRef } from 'react';


const CourseList = () => {
  const slider = useRef(null);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return(
    <>
      <div className='pagination-container'>
        <button onClick={() => slider.current.slickPrev()}><i className="bi bi-caret-left"></i></button>
        <button onClick={() => slider.current.slickNext()}><i className="bi bi-caret-right"></i></button>
      </div>
      <div className='slider-container'>
        <Slider ref={slider} {...settings}>
          <div className='card'>
            <img src={android} alt="" />
          </div>
          <div className='card'>
            <img src={backend} alt="" />
          </div>
          <div className='card'>
            <img src={frontend} alt="" />
          </div>
          <div className='card'>
            <img src={ios} alt="" />
          </div>
          <div className='card'>
            <img src={ml} alt="" />
          </div>
        </Slider>
      </div>
    </>
  )
}

export default CourseList;