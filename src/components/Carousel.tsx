import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.css";

export const HomeCarousel = (props) => {
  return (
          <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true}>
                <div className="carousel-item hidden-preview aspect-[5/3] overflow-hidden">
                    {props.im_1}
                    <p className="legend">Legend 1</p>
                </div>
                <div className="carousel-item hidden-preview aspect-[5/3] overflow-hidden">
                    {props.im_2}
                    <p className="legend">Legend 2</p>
                </div>
                <div className="carousel-item hidden-preview aspect-[5/3] overflow-hidden">
                    {props.im_3}
                    <p className="legend">Legend 2</p>
                </div>
                <div className="carousel-item hidden-preview aspect-[5/3] overflow-hidden">
                    {props.im_4}
                    <p className="legend">Legend 2</p>
                </div>
                <div className="carousel-item hidden-preview aspect-[5/3] overflow-hidden">
                    {props.im_5}
                    <p className="legend">Legend 2</p>
                </div>
          </Carousel>
  )
}
