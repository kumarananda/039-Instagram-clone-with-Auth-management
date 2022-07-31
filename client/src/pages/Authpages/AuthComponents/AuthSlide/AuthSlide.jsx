import Carousel from 'react-bootstrap/Carousel';
import './AuthSlide.scss'
import authSlider1 from '../../AuthImges/authSlider1.png'
import authSlider2 from '../../AuthImges/authSlider2.png'
import authSlider3 from '../../AuthImges/authSlider3.png'
import authSlider4 from '../../AuthImges/authSlider4.png'


// localhost:3000/login#carouselExampleControls
// https://react-bootstrap.github.io/components/carousel/

const AuthSlide = () => {
  return (
    <div className="auth-carousel">
      <div className="auth-carousel-box">
            <Carousel controls={false} pause={false}  fade indicators={false} interval={"2000"}  variant="dark">
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