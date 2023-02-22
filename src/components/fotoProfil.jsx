import React from 'react'

export default function fotoProfil() {
  return (
    <div className='m-5 h-60 col-span-3 p-6 bg-white border border-gray-200 rounded-lg shadow'>
        <div className="">
            <img src="https://picsum.photos/200" alt="foto profil" />
            <button className='bg-blue-600 w-full mt-3 p-2 rounded-md font-poppins text-white text-sm'> Ganti Foto Profil</button>
        </div>
    </div>
  )
}
