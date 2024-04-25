import React from "react";
import personIcon from "../../assets/profileIcon.svg";
import vaishnaviPic from "../../assets/vaishnaviPic.jpg";

function ProfileCard() {
  return (
    <div className="w-full flex justify-center   ">
      <section className=" flex  justify-evenly  flex-wrap px-8 py-4 rounded-lg bg-white my-8 dark:bg-gray-600 ">
        <img
          className="w-[150px]  rounded-full mx-4 "
          src={vaishnaviPic}
          alt=""
        />
        <div className=" mx-2 px-4 py-2">
          <h2 className="text-3xl text-center dark:text-white sm:text-start">
            VAISHNAVI SHARMA
          </h2>
          <p className="text-center sm:text-start dark:text-white">the name is Khusi brahman</p>
        </div>

        <div className="mx-4 px-4 py-2 my-2 sm:my-0 dark:text-white ">
          <p>additional details goes here</p>
        </div>
      </section>
    </div>
  );
}

export default ProfileCard;
