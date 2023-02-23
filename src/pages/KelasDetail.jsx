import React from 'react'
import InformasiKelas from 'components/informasiKelas'
import Navbar from 'components/navbar'
import Tab from 'components/tab'

export default function KelasDetail() {
  return (
    <div>
        <Navbar></Navbar>
        <Tab></Tab>
        <div className=' mt-20 ml-24 relative font-poppins'>
          <p className='text-base'><span className='font-semibold'>Daftar Kelas</span> {'>'} Pendaftaran Kelas</p>
          <p className='text-2xl font-bold mt-3'>AFAS Dasar Pria</p>
          <div className='flex space-x-6 mt-2'>
            <div className='flex space-x-2'>
              <i class="fa-solid fa-user-group text-xs text-[#7A7A7A]"></i>
              <p className="ml-2 mb-2 font-bold text-xs text-[#7A7A7A]">
              Kouta{" "}
              </p>
              <p className='text-xs text-[#7A7A7A]'>12</p>
            </div>
            <div className='flex space-x-2'>
              <i class="fa-solid fa-user-plus text-xs text-[#7A7A7A]"></i>
              <p className="ml-2 mb-2 font-bold text-xs text-[#7A7A7A]">
              Pendaftar{" "}
              </p>
              <p className='text-xs text-[#7A7A7A]'>12</p>
            </div>
          </div>
          <div className='grid grid-cols-12'>
            <InformasiKelas></InformasiKelas>
            <div className='p-5 m-5 col-span-9 bg-[#F5FCFF] font-poppins'>
              <form action="">
                <div>
                  <p className='text-base font-semibold'>Keterangan</p>
                </div>
                <div className='mt-3'>
                  <label htmlFor="motivasi" className='text-sm'>Motivasi</label>
                  <textarea id="motivasi" rows="4" className= 'p-2 mt-2 block w-3/4 bg-white border border-slate-300 rounded-sm text-sm shadow-sm
                  placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500' 
                  placeholder='motivasi anda mengikuti kelas'></textarea>
                </div>
                <div className='mt-3'>
                  <label htmlFor="penyakit" className='text-sm'>Riwayat Penyakit</label>
                  <input id='penyakit' type="text" className='p-2 mt-2 block w-3/4 bg-white border border-slate-300 rounded-sm text-sm shadow-sm
                  placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500' placeholder='nama lengkap Anda'/>
                </div>
                <div>
                  <button className='bg-blue-700 hover:bg-blue-900 p-2 rounded-md text-white mt-9 w-3/4'>Kirim</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
  )
}
