import React from 'react'
import Standard from '../PriceCards/Standard'
import Ultra from '../PriceCards/Ultra'
import Pro from '../PriceCards/Pro'

function Pricing() {
  return (
    <div className='flex flex-col dark:bg-gray-800 w-full justify-evenly py-2 pb-10'>
        <h3 className='text-center text-3xl my-8 dark:text-white font-semibold'>Pricing</h3>
      <div className='flex w-full flex-wrap justify-evenly'>
      <Standard/>
      <Ultra/>
      <Pro/>
      </div>
    </div>
  )
}

export default Pricing
