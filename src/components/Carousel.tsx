import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.css";

export const HomeCarousel = (props) => {
  return (
          <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true}>
                <div className="carousel-item hidden-preview aspect-[5/3] overflow-hidden">
                    {props.im_1}
                </div>
                <div className="carousel-item hidden-preview aspect-[5/3] overflow-hidden">
                    {props.im_2}
                </div>
                <div className="carousel-item hidden-preview aspect-[5/3] overflow-hidden">
                    {props.im_3}
                </div>
                <div className="carousel-item hidden-preview aspect-[5/3] overflow-hidden">
                    {props.im_4}
                </div>
                <div className="carousel-item hidden-preview aspect-[5/3] overflow-hidden">
                    {props.im_5}
                </div>
          </Carousel>
  )
}
