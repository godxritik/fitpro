import React from 'react'
import Card1 from '../ServiceCards/Card1'
import Card2 from '../ServiceCards/Card2'
import Card3 from '../ServiceCards/Card3'

function Cards() {
  return (
    <div>
    
    <div className='py-8 border-b-2 border-gray-300'>
     <h3 className='font-semibold text-3xl text-center'>Explore Our Services</h3>
          
      <div className='flex mx-auto justify-evenly flex-wrap'>
        <Card1/>
        <Card2/>
        <Card3/>
      </div>

    </div>

    </div>
  )
}

export default Cards
