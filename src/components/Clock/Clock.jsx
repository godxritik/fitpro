import React, { useEffect, useState } from 'react'
function Clock() 
{
    const [time, setTime] = useState(new Date());

    useEffect(() => {
      const interval = setInterval(() => {
        setTime(new Date());
      }, 1000); 
  
      return () => clearInterval(interval);
    }, []); 
  
    const formattedTime = time.toLocaleTimeString();

  return (
    <div>
      <h1 className='text-3xl font-bold text-gray-500  tracking-wide'>{formattedTime}</h1>
    </div>
  )
}

export default Clock
