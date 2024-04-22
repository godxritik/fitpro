import React, { useState } from "react";

const BMICalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBMI] = useState(null);
  const [bmiState, setBMIState] = useState("");

  const calculateBMI = () => {
    if (weight && height) {
      const bmiValue = (weight / (height * height)).toFixed(2);
      setBMI(bmiValue);
      determineBMIState(bmiValue);
    } else {
      setBMI(null);
      setBMIState("");
    }
  };

  const determineBMIState = (bmiValue) => {
    if (bmiValue < 18.5) {
      setBMIState("Underweight");
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      setBMIState("Normal weight");
    } else if (bmiValue >= 24.9 && bmiValue < 29.9) {
      setBMIState("Overweight");
    } else {
      setBMIState("Obese");
    }
  };

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  };

  const handleHeightChange = (e) => {
    setHeight(e.target.value);
  };

  return (
    <div className="flex flex-wrap py-12">
        <div className="sm:w-[650px] w-[350px] mx-auto  my-4 sm:my-2 bg-gray-300 bg-opacity-10  p-4 border rounded-lg ">
          <h2 className="text-2xl font-bold mb-4 text-white">BMI Calculator</h2>
          <div className="mb-4">
            <label htmlFor="weight" className="block mb-1 text-white">
              Weight (kg):
            </label>
            <input
              type="number"
              id="weight"
              value={weight}
              onChange={handleWeightChange}
              className="w-full px-2 py-1 border rounded-md focus:outline-none focus:border-blue-500  bg-gray-200 bg-opacity-20 text-white"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="height" className="block mb-1 text-white">
              Height (m):
            </label>
            <input
              type="number"
              id="height"
              value={height}
              onChange={handleHeightChange}
              className="w-full px-2 py-1 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-200 bg-opacity-20 text-white"
            />
          </div>
          <button
            onClick={calculateBMI}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Calculate BMI
          </button>
          {bmi && (
            <div className="mt-4">
              <p className="text-white">Your BMI is: {bmi}</p>
              <p className="mt-2 text-white">BMI State: {bmiState}</p>
            </div>
          )}
        </div>
      

      <div className="text-white flex flex-col mx-auto p-4  rounded-lg w-[350px] h-auto sm:h-[150px] sm:w-auto bg-gray-300 bg-opacity-10 border my-4 sm:my-0">
        <h3>Body states (as per BMI)</h3>
        <ul>
          <li>{"1. BMI < 18.5 - Under weight"}</li>
          <li>{"2. BMI between 18.5 & 24.9 - Normal weight"}</li>
          <li>{"3. BMI between 25 & 29.9 - Over weight"}</li>
          <li>
            {
              "4. BMI > 30 - Obese (high chances of heart disease,stroke and cancers)"
            }
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BMICalculator;
