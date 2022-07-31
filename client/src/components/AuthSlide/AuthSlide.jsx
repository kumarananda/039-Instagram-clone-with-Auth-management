import Carousel from 'react-bootstrap/Carousel';
import './AuthSlide.scss'
import authSlider1 from './img/authSlider1.png'
import authSlider2 from './img/authSlider2.png'
import authSlider3 from './img/authSlider3.png'
import authSlider4 from './img/authSlider4.png'

// localhost:3000/login#carouselExampleControls
// https://react-bootstrap.github.io/components/carousel/

const AuthSlide = () => {
  return (
    <div className="auth-carousel">
      <div className="auth-carousel-box">
            <Carousel controls={false}  fade indicators={false} interval={"2000"}  variant="dark">
              <Carousel.Item>
                <img src={authSlider1} alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img src={authSlider2} alt="Second slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img src={authSlider3} alt="Third slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img src={authSlider4} alt="Forth slide" />
              </Carousel.Item>
            </Carousel>
      </div>
    </div>

  );
}

export default AuthSlide;