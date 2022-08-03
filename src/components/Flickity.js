import React, { Component } from "react";
import Slider from "react-slick";
import '../assets/css/Flickity.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Img1 from '../assets/images/getir1.jpeg'
import Img2 from '../assets/images/getir2.jpeg'
import Img3 from '../assets/images/getir3.jpeg'
import Img4 from '../assets/images/getir4.jpeg'
import LastActivityCarditem from '../components/LatestActivityCardItem'



function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black",color:'white',borderRadius:'50%' }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black",color:'white' }}
      onClick={onClick}
    />
  );
}

export default class CustomArrows extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <div className="" style={{width:'118%',marginLeft:'0%'}}>
       
        <Slider {...settings}>
          <div>
           <LastActivityCarditem/>
          </div>
          <div>
          <LastActivityCarditem/>
          </div>
          <div>
          <LastActivityCarditem/>
          </div>
          <div>
          <LastActivityCarditem/>
          </div>
          <div>
          <LastActivityCarditem/>
          </div>
          <div>
          <LastActivityCarditem/>
          </div>
        </Slider>
      </div>
    );
  }
}