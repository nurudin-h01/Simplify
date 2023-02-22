import React from 'react'

export default function search() {
  return (
    <div className='relative flex items-center'>
        <i className='text-gray-400 h-3 w-3 fa-solid fa-magnifying-glass absolute ml-3 mt-4'></i>
        <input type="text" className='font-poppins pr-3 pl-9 mt-5 block w-1/2 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm 
        placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500' 
        placeholder='cari' />
    </div>
  )
}
