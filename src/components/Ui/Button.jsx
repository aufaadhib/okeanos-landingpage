import { ChevronRight } from 'lucide-react'
import React from 'react'

const Button = ({className, title, icon}) => {
  return (
    <div className={`w-full ${className} items-center justify-center flex h-10 rounded-lg font-bold  gap-5 group cursor-pointer`}>
        <div className=' '>{title}</div>
        {icon && <ChevronRight size={17} className='group-hover:translate-x-1 duration-300' />}

    </div>
  )
}

export default Button