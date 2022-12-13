import person1 from '../images/1.jpg';
import Swal from 'sweetalert2';
import Slider from 'react-slick';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

const warning = () => {
  Swal.fire({
    icon: 'warning',
    title: 'Oops...',
    text: 'Anda harus masuk terlebih dahulu',
    confirmButtonColor: '#2D3E50',
  })
}

const CourseLevel = () => {
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
          <div className='course-title'>
            <h5>Frontend Developer</h5>
            <hr/>
          </div>
          <div className='pagination-container'>
              <button onClick={() => slider.current.slickPrev()}><i className="bi bi-caret-left"></i></button>
              <button onClick={() => slider.current.slickNext()}><i className="bi bi-caret-right"></i></button>
          </div>
          <div className='slider-container'>
            <Slider ref={slider} {...settings}>
              <div className='course-card'>
                <img src={person1} alt="" />
                <div className='desc'>
                  <div className='item'>
                    <i className="bi bi-bar-chart-line-fill"></i>
                    <p>Langkah 1</p>
                  </div>
                  <div className='item'>
                    <h5>Belajar HTML & CSS Dasar</h5>
                  </div>
                  <div className='item'>
                    <i className="bi bi-star-fill"></i>
                    <span>4.6</span>
                  </div>
                  <div className='item'>
                    <i className="bi bi-award-fill"></i>
                    <span>Level Dasar - Pemula</span>
                  </div>
                  <Link to="/" className='detail-btn' onClick={warning}>Selengkapnya</Link>
                </div>
              </div>
              <div className='course-card'>
                <img src={person1} alt="" />
                <div className='desc'>
                  <div className='item'>
                    <i className="bi bi-bar-chart-line-fill"></i>
                    <p>Langkah 2</p>
                  </div>
                  <div className='item'>
                    <h5>Belajar CSS Layouting</h5>
                  </div>
                  <div className='item'>
                    <i className="bi bi-star-fill"></i>
                    <span>4.6</span>
                  </div>
                  <div className='item'>
                    <i className="bi bi-award-fill"></i>
                    <span>Pemula</span>
                  </div>
                  <Link to="/" className='detail-btn' onClick={warning}>Selengkapnya</Link>
                </div>
              </div>
              <div className='course-card'>
                <img src={person1} alt="" />
                <div className='desc'>
                  <div className='item'>
                    <i className="bi bi-bar-chart-line-fill"></i>
                    <p>Langkah 3</p>
                  </div>
                  <div className='item'>
                    <h5>Belajar Dasar Javascript</h5>
                  </div>
                  <div className='item'>
                    <i className="bi bi-star-fill"></i>
                    <span>4.6</span>
                  </div>
                  <div className='item'>
                    <i className="bi bi-award-fill"></i>
                    <span>Pemula Menengah</span>
                  </div>
                  <Link to="/" className='detail-btn' onClick={warning}>Selengkapnya</Link>
                </div>
              </div>
              <div className='course-card'>
                <img src={person1} alt="" />
                <div className='desc'>
                  <div className='item'>
                    <i className="bi bi-bar-chart-line-fill"></i>
                    <p>Langkah 4</p>
                  </div>
                  <div className='item'>
                    <h5>Belajar Document Object Model</h5>
                  </div>
                  <div className='item'>
                    <i className="bi bi-star-fill"></i>
                    <span>4.6</span>
                  </div>
                  <div className='item'>
                    <i className="bi bi-award-fill"></i>
                    <span>Menengah</span>
                  </div>
                  <Link to="/" className='detail-btn' onClick={warning}>Selengkapnya</Link>
                </div>
              </div>
              <div className='course-card'>
                <img src={person1} alt="" />
                <div className='desc'>
                  <div className='item'>
                    <i className="bi bi-bar-chart-line-fill"></i>
                    <p>Langkah 5</p>
                  </div>
                  <div className='item'>
                    <h5>Visual Control System</h5>
                  </div>
                  <div className='item'>
                    <i className="bi bi-star-fill"></i>
                    <span>4.6</span>
                  </div>
                  <div className='item'>
                    <i className="bi bi-award-fill"></i>
                    <span>Mahir Profesional</span>
                  </div>
                  <Link to="/" className='detail-btn' onClick={warning}>Selengkapnya</Link>
                </div>
              </div>
            </Slider>
          </div>
      </>
    )
}

export default CourseLevel;