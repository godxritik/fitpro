import React from "react";
import Carousel from "../Carousel/Carousel";
import LinkedIn from "../SocialMedia/LinkedIn";

function Stats() {
  return (
    <div>
      <div className=" w-[150px] mx-auto px-2 py-2 justify-between flex border-b-2 rounded-md border-gray-600 hover:bg-gray-600 transition-all duration-500">
        <div>
          <input type="radio" id="bulk" name="bodyType"/>
          <label className="text-white px-1" htmlFor="bulk" >
            Bulk
          </label>
        </div>

        <div>
          <input type="radio" id="cut" name="bodyType" />
          <label className="text-white px-1" htmlFor="cut" name="bodyType">
            Lean
          </label>
        </div>
      </div>

      <div className="w-full flex justify-center gap-10 flex-wrap py-20 ">
        <div
          id="leftDabba"
          className="w-[350px] h-[250px] sm:w-[600px] sm:h-[350px] bg-gray-300 bg-opacity-10 border-2 border-gray-600 rounded-lg flex items-center justify-content"
        >
          <Carousel />
        </div>

        <div
          id="rightDabba"
          className="sm:w-[550px] w-[350px] border-2 border-slate-600 rounded-xl flex flex-col justify-center "
        >
          <h1 className="text-center text-white text-xl py-2">
            Nutrition tracker
          </h1>

          <div className="flex mx-2">
            <div className="w-[250px] h-[150px] bg-gray-300 bg-opacity-10 border-2 border-gray-600 rounded-lg mx-auto mb-5 flex flex-col justify-between px-2 py-2 ">
              <div className="   ">
                <h4 className="text-white text-4xl font-bold">320g</h4>
              </div>

              <div className="">
                <h4 className="text-slate-300 font-semibold text-xl  ">
                  Carbohydrates
                </h4>
                <p className="text-zinc-300 text-sm">
                  must conclude 40% of total calori intake
                </p>

                <p className="font-light text-gray-400 text-xs">
                  1gram = 4 calories
                </p>
              </div>
            </div>

            <div className="w-[250px] h-[150px] bg-gray-300 bg-opacity-10 border-2 border-gray-600 rounded-lg mx-auto mb-5 flex flex-col justify-between px-2 py-2 ">
              <div className="   ">
                <h4 className="text-white text-4xl font-bold">60g</h4>
              </div>

              <div className="">
                <h4 className="text-slate-300 font-semibold text-xl  ">
                  Protiens
                </h4>
                <p className="text-zinc-300 text-sm">
                  2.2 grams multiplied by body weight(in kg)
                </p>

                <p className="font-light text-gray-400 text-xs">
                  1gram = 4 calories approx.
                </p>
              </div>
            </div>
          </div>

          <div className="flex mx-2">
            <div className="w-[250px] h-[150px] bg-gray-300 bg-opacity-10 border-2 border-gray-600 rounded-lg mx-auto mb-5 flex flex-col justify-between px-2 py-2 ">
              <div className=" ">
                <h4 className="text-white text-4xl font-bold">
                  100g{" "}
                  <span className="text-sm font-light">or 900 calories</span>
                </h4>
              </div>

              <div className="">
                <h4 className="text-slate-300 font-semibold text-xl  ">Fats</h4>
                

                <p className="font-light text-gray-400 text-xs">
                  1gram = 9 calories approx.
                </p>
              </div>
            </div>
            <div className="w-[250px] h-[150px] bg-gray-300 bg-opacity-10 border-2 border-gray-600 rounded-lg mx-auto mb-5 px-2 py-2 ">
              

              <div className="">
                <h4 className="text-slate-300 font-semibold text-xl  ">Micro Nutrients</h4>
                <ul className="text-[11px] text-slate-300">
                  <li>Vitamin A,C,D,E,K - 900mcg, 90mg, 6ooIU, 15mg, 120mcg </li>
                  <li>Calcium - 1000mg</li>
                  <li>Iron - 8mg</li>
                  <li>Magnesium - 420mg</li>
                  <li>Zinc - 11mg</li>
                </ul>

               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
