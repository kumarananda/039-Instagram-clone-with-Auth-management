import Carousel from 'react-bootstrap/Carousel';
import './AuthSlide.scss'

// localhost:3000/login#carouselExampleControls
// https://react-bootstrap.github.io/components/carousel/

const AuthSlide = () => {
  return (
    <div className="auth-carousel">
      <div className="auth-carousel-box">
            <Carousel controls={false}  fade indicators={false} interval={"2000"}  variant="dark">
              <Carousel.Item>
                <img
                  className=" "
                  src="https://www.instagram.com/static/images/homepage/screenshots/screenshot4.png/a4fd825e3d49.png"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img 
                  className=""
                  src="https://www.instagram.com/static/images/homepage/screenshots/screenshot2.png/4d62acb667fb.png"
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className=" "
                  src="https://www.instagram.com/static/images/homepage/screenshots/screenshot3.png/94edb770accf.png"
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className=""
                  src="https://www.instagram.com/static/images/homepage/screenshots/screenshot1.png/fdfe239b7c9f.png"
                  alt="Forth slide"
                />
              </Carousel.Item>
            </Carousel>
      </div>
    </div>

  );
}

export default AuthSlide;