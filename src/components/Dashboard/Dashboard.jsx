import React from 'react'
import UserNavbar from '../UserNavbar/UserNavbar'
import Stats from '../Stats/Stats'
import Carousel from '../Carousel/Carousel'
import AdminSupport from '../AdminSupport/AdminSupport'
import ProfileCard from '../ProfileCard/ProfileCard'
import BMICalculator from '../BmiCalculator/BmiCalculator'
import Clock from '../Clock/Clock'




function Dashboard() {
  return (
    <div className='bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black'>
      <UserNavbar/>
     <div className='w-full text-end px-4'>
     <Clock/>
     </div>
      <ProfileCard/>
      <Stats/>
      <BMICalculator/>
      <AdminSupport/>
    </div>
  )
}

export default Dashboard
