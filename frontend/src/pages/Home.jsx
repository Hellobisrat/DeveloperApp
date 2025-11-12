import React, { useState,useEffect, useMemo } from 'react'
import axios from 'axios'
import { Edit2, List,Trash2,MoreVertical, X,Star, TrendingUpIcon } from 'lucide-react'
import { toast } from 'react-toastify'
import { Link, useNavigate} from 'react-router-dom'



const Home = () => {
  const [developers,setDevelopers]= useState([])
  const [editId,setEditId]=useState(null)
  
  const navigate = useNavigate()

  useEffect(()=>{
   const fetchDevelopers = async () => {
    try {
      const res = await axios.get('http://localhost:9000/api/developers/');
      setDevelopers(res.data || res.data.data || []);
      toast.success('Successfully fetched developers');
    } catch (error) {
      console.log(error.message)
      toast.error('Error fetching developers');
    }
  };
  fetchDevelopers()
  },[])

  const SeniorDevelopers = useMemo(()=>{
         return (
          developers.filter((dev)=> typeof dev.role ==='string' && dev.role.toLowerCase().includes('senior') 
        )
     )},[developers]) 
  const LeadDevelopers = useMemo(()=>{
         return (
          developers.filter((dev)=>typeof dev.role ==='string' &&  dev.role.toLowerCase().includes('lead')) 
        ) },[developers])
  
  const Stat = useMemo(()=>{
      const Total= developers.length;
      const Developer =  (developers.filter((developer)=>typeof developer.role ==='string' && developer.role.toLowerCase()==='developer')).length
      const Senior =  (developers.filter((developer)=>typeof developer.role ==='string' && developer.role.toLowerCase()==='seniordeveloper')).length
      const Lead =  (developers.filter((developer)=>typeof developer.role ==='string' && developer.role.toLowerCase()==='leaddeveloper')).length

      return {
        Total,
        Developer,
        Senior,
        Lead 
      }
  },[developers])

  const handleDelete = async(id)=>{
    
    try {
      const res = await axios.delete(`http://localhost:9000/api/developers/${id}`)
      if(res.status === 200)
        { toast.success('Deleted successfully completed')
        setDevelopers(prev=>prev.filter(dev=>dev._id!==id))
      navigate('/')}
      else{
        toast.error('Failed to delete')
      }
    } catch (error) {
      toast.error('error while deleting')
    }
  }

  

  

  
  return (
    <div className='w-full h-screen ml-64 grid grid-cols-3 gap-3 overflow-y-auto '>
      <div className='col-span-2 border border-l border-purple-100 rounded-lg shadow-lg m-3'>
        <div className='max-w-full flex items-center justify-center border-none rounded-lg mt-6 md:mt-12 gap-8 hover:border hover:border-purple-200'>
          <List className='w-7 h-7 text-gray-600 hover:text-purple-400 '/>
          <span className='text-2xl font-extrabold text-purple-500 tracking-wide'>All Developers</span>
        </div>
       <div className='grid grid-cols-1  md:grid-cols-2 gap-4 m-4 md:m-6  '>
            {developers?.map((dev)=>(
              <div key={dev._id} className='relative mt-12 py:3 px-1 md:py-6 md:px-1 w-full  rounded-lg border-2 border-purple-200 shadow-md flex  items-center gap-4 justify-evenly '>
          <div className='flex flex-col gap-2'>
          <p className='text-purple-600 text-xs'><span className='text-gray-900 text-sm' >Name:{' '}</span>{dev.name}</p>
          <p className='text-purple-600 text-xs'><span className='text-gray-900 text-sm' >LName:{' '}</span>{dev.lastName}</p>
          </div>
          <div>
          <div className='lg:flex flex-col gap-2 hidden '> 
          <p className='text-purple-600 text-xs'><span className='text-gray-900 text-sm' >Email:</span> {dev.email}</p>
          <p className='text-purple-600 text-sm'><span className='text-gray-900 text-sm' >Role:</span> {dev.role}</p>
          <button className='absolute top-0 right-0  p-1 flex  flex-col items-center justify-center gap-2' onClick={()=>setEditId(editId === dev._id ? null : dev._id)}>
          <MoreVertical className='w-5 h-5 text-purple-400'/>
          </button>
          {editId ===dev._id && <div className='absolute top-0 right-0 w-40 z-50 rounded-md p-4 border border-purple-100 backdrop-blur-lg bg-white'>
            <div className='relative flex flex-col gap-2 cursor-pointer'>
              <div className='absolute top-0 right-0'onClick={()=>setEditId(null)}>
                <X className='w-3 h-3 text-red-500'/>
                </div>
              <Link className='flex items-center gap-3' to={`/edit/${dev._id}`}>
                <p className='text-sm mr-2 text-purple-300'>Edit</p>
                <Edit2 className='w-4 h-4 text-purple-500'/>
                </Link>
                <button className='flex items-center gap-3 group' onClick={()=>handleDelete(dev._id)}>
                <p className='text-sm mr-2 text-purple-300'>Delete</p>
                <Trash2 className='w-4 h-4 text-red-500'/>
                </button>
            </div>
            </div>}
          </div>
          </div>
        </div>
            ))}
          </div>
      </div>
      <div className='hidden lg:block md:col-span-1 border border-l border-purple-100 rounded-lg shadow-lg bg-white m-3'>
        
        <div className=' flex flex-col items-center mt-12 space-y-4 max-w-md '>
        <div className='border border-purple-100 shadow-md p-6'>
          <span className='font-semibold text-lg text-purple-500 '> Lead Developers</span>
        
        {LeadDevelopers.map((dev)=>(
          <div key={dev._id} className='flex items-center justify-start gap-4'>
        <button className='w-5 h-5 rounded-full bg-purple-400 flex items-center justify-center'>
          <Star className='w-2 h-2 text-white'/>
        </button>
          <p key={dev._id} className='text-lg text-purple-300 w-32'>{dev.name}</p>
          </div>
        ))}</div>
        </div>
        
        <hr className='border-t-2 border-purple-200 w-3/4 my-3 space-y-2 mt-10  mx-auto'/>
        
        <div className=' flex flex-col items-center mt-12 space-y-4'>
        <div className='border border-purple-100 shadow-md p-6 '>
        <span className='font-semibold text-lg text-purple-500 '> Senior Developers</span>
        {SeniorDevelopers.map((dev)=>(
          <div key={dev._id} className='flex items-center justify-start gap-4'>
        <button className='w-5 h-5 rounded-full bg-purple-400 flex items-center justify-center'>
          <Star className='w-2 h-2 text-white'/>
        </button>
          <p key={dev._id} className='text-lg text-purple-300  w-32'>{dev.name}</p>
          </div>
        ))}
        </div>
        <hr className='border-t-2 border-purple-200 w-3/4 my-3 space-y-2 mt-10  mx-auto'/>
        <div className='border border-purple-100 shadow-md rounded-lg p-6 mx-12 flex flex-col space-y-3 max-w-md'>
          <div className='flex gap-3 items-center'>
            <TrendingUpIcon className='w-5 h-5 text-purple-500'/>
          <p className='text-lg font-semibold text-purple-500'>Developer Count</p>
          </div>
           <p className='text-sm font-sans text-purple-600'>Developer : {Stat.Developer}</p>
             <p className='text-sm font-sans text-purple-600'>Senior : {Stat.Senior}</p>
               <p className='text-sm font-sans text-purple-600'>Lead : {Stat.Lead}</p>
                 <p className='text-sm font-sans text-purple-600'>Total Developer : {Stat.Total}</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Home