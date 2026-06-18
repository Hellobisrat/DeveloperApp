import { Github, Linkedin, Twitter } from 'lucide-react'

const Footer = () => {
  return (
    <div className='w-full py-6 bg-slate-300 border-t border-purple-200'>
      <div className='flex flex-col items-center gap-3'>
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} WebDeveloper — Crafted with passion.
        </p>

        <div className="flex gap-5 text-gray-500">
          <a href="#" className="hover:text-purple-600 transition">
            <Github size={20}  className='text-purple-200'/>
          </a>
          <a href="#" className="hover:text-purple-600 transition">
            <Linkedin size={20}   className='text-purple-200'/>
          </a>
          <a href="#" className="hover:text-purple-600 transition">
            <Twitter size={20}  className='text-purple-200' />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer