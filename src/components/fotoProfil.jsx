import React from 'react'

export default function fotoProfil() {
  return (
    <div className='m-5 col-span-3 p-6 border border-gray-200 rounded-lg shadow h-max'>
        <div className="">
            <img src="https://picsum.photos/200" alt="foto profil" />
            <button className='bg-blue-600 hover:bg-blue-800 w-full mt-3 p-2 rounded-md font-poppins text-white text-sm'> Ganti Foto Profil</button>
        </div>
    </div>
  )
}
