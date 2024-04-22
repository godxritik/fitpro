import React from 'react'

function Map() {
  return (
    <div className=' mx-auto  py-2 '>
      
      <h2 className='text-center text-3xl my-5'>Find us @</h2>

    <iframe className='mx-auto rounded-xl w-[400px] h-[300px]  sm:w-[700px] sm:h-[450px] lg:w-[1300px] lg:h-[600px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3377213.93070991!2d-123.15536499023438!3d34.24700036481527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2eb41b7d989ff%3A0xc9bd1eddfbce0e95!2sUSA%20GYM!5e0!3m2!1sen!2sin!4v1712939970160!5m2!1sen!2sin"  frameborder="0"></iframe>

      {/* <iframe src= width="1300" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}


    </div>
  )
}

export default Map
