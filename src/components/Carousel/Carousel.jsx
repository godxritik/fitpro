import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Meals from '../../Meal'

function Meal(props) {
  return (
    <div className="px-5 ">
      <h2 className="text-white text-xl sm:text-3xl font-semibold  border-gray-500 py-2 mb-2">
        {props.Meal}
      </h2>
      <ul className="text-gray-400 list-disc my-6">
        {
          props.Sides.map((ele , i ) =>{
              return <li className="px-1 mx-4 py-1 sm:text-lg  text-sm " key={i}>{ele}</li>
          })
        }
      </ul>
    </div>
  );
}


function Carousel() 
{
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="sm:w-[540px] w-[350px] h-full mx-auto  ">
      <Slider {...settings} className="h-full w-full px-6">
        {
          Meals.map((meal, index) => (
            <Meal key={index} {...meal}/>
          ))
        }
      </Slider>
    </div>
  );
}

export default Carousel;
