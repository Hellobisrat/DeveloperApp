import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Code ,Settings} from 'lucide-react'

const Navbar = () => {
// const navigate = useNavigate()
  return (
    <header className='sticky top-0 z-50 bg-white/90  backdrop-blur-md shadow-sm  w-full border-b border-gray-200 font-sans'>
      <div className='flex items-center justify-between px-4 py-3 md:px-6 max-w-7xl mx-auto'>
        <div className='flex items-center gap-2 cursor-pointer group' >
          <div className='relative w-10 h-10 flex items-center justify-center rounded-xl
          bg-purple-400 shadow-lg group-hover:shadow-purple-500/50
          group-hover:scale-105 transition-all duration-300'>
            <Code className='w-6 h-6 text-white'/>
          </div>
          <span className='text-2xl font-extrabold text-purple-500 tracking-wide'>
            Let'see Our Coders
          </span>
        </div>
        <div className='flex items-center gap-4'>
          <button className='p-2 text-gray-600 hover:text-purple-500 transition-colors duration-300
           hover:bg-purple-50 rounded-full'>
            <Settings className='w-5  h-5'/>
           </button>

          <div className='relative'>
          <div className='w-8 h-8 flex items-center justify-center rounded-full
          bg-gradient-to-br from-fuchsia-500 to-purple-500 text-white
          font-semibold shadow-md'>U</div>
          <div className='absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 rounded-full
          border-2 border-white animate-pulse '/>
        </div>
        </div>
        
      </div>
      
    </header>
  )
}

export default Navbar