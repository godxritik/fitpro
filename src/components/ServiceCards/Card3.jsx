import React from 'react'
import mma from "../../assets/mma.jpg"

function Card3() {
  return (
    <div>
      
      <article className="overflow-hidden w-[350px]  my-4 mx-4 rounded-lg shadow transition hover:shadow-xl">
  <img
    alt=""
    src={mma}
    className="h-56 w-full object-cover"
  />

  <div className="bg-white p-4 sm:p-6">
    
    <a href="#">
      <h3 className="mt-0.5 text-lg text-gray-900">How to position your furniture for positivity</h3>
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

export default Card3
