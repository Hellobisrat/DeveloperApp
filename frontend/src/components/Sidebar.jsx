import React from 'react'
import { Home,FileText } from 'lucide-react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='  md:block fixed w-20 h-full lg:w-64 bg-white/90 border-r border-purple-100 backdrop-blur-sm shadow-sm z-20 transition-all duration-300'>
      <div className='flex flex-col  '>
        <Link className=' m-12  p-6  max-w-[170px] w-full rounded-lg border-2
         border-purple-200 shadow-md md:flex items-center gap-4
          justify-center mx-auto flex-col' to='/'>
          <div className='text-gray-600 text-sm' >Home</div>
          <Home className='w-5 h-5 text-purple-400'/>
        </Link>
         <Link className=' m-12  p-6  max-w-[170px] w-full  rounded-lg border-2
          border-purple-200 shadow-md md:flex items-center
           gap-4 justify-center mx-auto flex-col'to='/post' >
          <Link className='text-gray-600 text-sm' >Post</Link>
          <FileText className='w-5 h-5 text-purple-400'/>

        </Link>
         
      </div>
    </div>
  )
}

export default Sidebar