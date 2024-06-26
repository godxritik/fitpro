import React from 'react'
import Yoga from "../../assets/Yoga.jpg"

function Card2() {
  return (
    <div>
      
      <article className="overflow-hidden w-[350px]  my-4 mx-4 rounded-lg shadow transition hover:shadow-xl">
  <img
    alt=""
    src={Yoga}
    className="h-56 w-full object-cover"
  />

  <div className="bg-white p-4 sm:p-6 dark:bg-gray-900 ">
    
    <a href="#">
      <h3 className="mt-0.5 dark:text-white text-lg text-gray-900">Yoga & Kinetics</h3>
    </a>

    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
      pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem,
      mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque
      dignissimos. Molestias explicabo corporis voluptatem?
    </p>
  </div>
</article>

    </div>
  )
}

export default Card2
