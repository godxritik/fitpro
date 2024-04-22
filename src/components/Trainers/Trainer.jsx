import React from "react";
import Slider from "react-slick";
import sahilTrainer from "../../assets/sahilTrainer.jpg";
import priyankaTrainer from "../../assets/priyankaTrainer.jpg";
import vaishnaviTrainer from "../../assets/vaishnaviTrainer.jpg";

function Trainer() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 3,
    speed: 500,
  };

  return (
    <div className="slider-container bg-slate-700">
      <Slider {...settings} className="text-center">
        <div className="bg-red-300 w-[550px] h-[350px]">

          {/* <div className="w-[550px] h-[280px] flex text-white border border-gray-600 rounded-lg overflow-hidden  dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 hover:scale-[1.02] transition-all duration-300 ">
            <img className="object-cover w-[50%]" src={sahilTrainer} alt="" />
            <div className="h-full flex flex-col justify-center gap-3 px-5">
              <h5 className="font-bold text-2xl">
                Noteworthy technology acquisitions 2021
              </h5>
              <p className="text-sm text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </div>
          </div> */}
          <h1>1</h1>

        </div>
        <div className="bg-blue-300  h-[350px]">
          <h3>2</h3>
        </div>
        <div className="bg-green-200  h-[350px]">
          <h3>3</h3>
        </div>
        <div className="bg-green-300  h-[350px]">
          <h3>4</h3>
        </div>
        <div className="bg-green-400  h-[350px]">
          <h3>5</h3>
        </div>
        <div className="bg-green-500  h-[350px]">
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
}

export default Trainer;
