import React from 'react'
import bodyBuilding from "../../assets/weightLifting.jpg"

function Card1() {
  return (
    <div className=''>
      
      <article className="overflow-hidden w-[350px]  my-4 mx-4 rounded-lg shadow transition hover:shadow-xl">
  <img
    alt=""
    src={bodyBuilding}
    className="h-56 w-full object-cover"
  />

  <div className="bg-white dark:bg-gray-900 dark:text-white p-4 sm:p-6">
    
    <a href="#">
      <h3 className="mt-0.5 text-lg text-gray-900 dark:text-white">Bodybuilding Excellence : Sculpt Your Strength</h3>
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

export default Card1
