import React from 'react'
import { GiChemicalTank } from 'react-icons/gi'

const Hero = () => {
  return (
    <div className='h-screen bg-sky-500 relative px-10 lg:px-44'>
      <div className='absolute flex  px-3 py-1 items-center bg-white rounded-2xl'>
        <span><GiChemicalTank/></span>
        <p>Mitra Terpercaya Industri Kimia</p>

      </div>

    </div>
  )
}

export default Hero