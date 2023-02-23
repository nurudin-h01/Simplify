import React from 'react'
import Navbar from 'components/navbar'
import Tab from 'components/tab'
import FotoProfil from 'components/fotoProfil'

export default function Profil() {
  return (
    <div>
      <Navbar></Navbar>
      <Tab></Tab>
      <div className='mt-20 ml-20'>
          <p className='mt-5 mx-5 font-poppins font-bold text-[28px]'>Profil Pengguna</p>
          <div className='grid grid-cols-12 h-full'>
            <FotoProfil></FotoProfil>
            <div className='p-5 m-5 col-span-9 bg-[#F5FCFF] font-poppins'>
              <form action="">
                <div>
                  <p className='text-base font-semibold'>Identitas Pribadi</p>
                </div>
                <div className='mt-3'>
                  <label htmlFor="namaLengkap" className='text-sm'>Nama Lengkap</label>
                  <input id='namaLengkap' type="text" className='p-2 mt-2 block w-3/4 bg-white border border-slate-300 rounded-sm text-sm shadow-sm
                  placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500' placeholder='nama lengkap Anda'/>
                </div>
                <div className='mt-3'>
                  <label for="jenisKelamin" className='text-sm'>Jenis Kelamin</label>
                  <select id="jenisKelamin" className="p-2 mt-2 block w-3/4 bg-white border border-slate-300 rounded-sm text-sm shadow-sm
                  placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500'">
                    <option className="text-xs" selected>Semua</option>
                    <option className="text-xs" value="Laki-laki">Laki-laki</option>
                    <option className="text-xs" value="Perempuan">Perempuan</option>
                  </select>
                </div>
                <div className='mt-3'>
                  <label for="namaLengkap" className='text-sm'>Tempat, tanggal lahir</label>
                  <div className='flex items-center w-3/4'>
                    <input id='namaLengkap' type="text" className='p-2 my-auto w-full block bg-white border border-slate-300 rounded-sm text-sm shadow-sm
                    placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500' placeholder='tempat'/>
                    <i className='fa-solid fa-calendar-days mx-4 my-auto text-xl text-gray-700'></i>
                    <input id='namaLengkap' type="date" className='p-2 my-auto w-full block bg-white border border-slate-300 rounded-sm text-sm shadow-sm
                  placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500' placeholder='tanggal'/>
                  </div>
                </div>
                <div className='mt-3'>
                  <label for="pekerjaan" className='text-sm'>Pekerjaan</label>
                  <input id='pekerjaan' type="text" className='p-2 mt-2 block w-3/4 bg-white border border-slate-300 rounded-sm text-sm shadow-sm
                  placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500' placeholder='pelajar'/>
                </div>
                <div className='mt-3'>
                  <label for="nomerHP" className='text-sm'>Nomer HP</label>
                  <input id='nomerHP' type="number" className='p-2 mt-2 block w-3/4 bg-white border border-slate-300 rounded-sm text-sm shadow-sm
                  placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500' placeholder='08523179xxxx'/>
                </div>
                <div className='mt-3'>
                  <label for="email" className='text-sm'>E-mail</label>
                  <input id='email' type="email" className='p-2 mt-2 block w-3/4 bg-white border border-slate-300 rounded-sm text-sm shadow-sm
                  placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500' placeholder='namaemail@gmail.com'/>
                </div>
                <div className='mt-3'>
                  <label for="hobby" className='text-sm'>Hobby</label>
                  <input id='hobby' type="text" className='p-2 mt-2 block w-3/4 bg-white border border-slate-300 rounded-sm text-sm shadow-sm
                  placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500' placeholder='membaca buku'/>
                </div>
                <div className='mt-3'>
                  <label for="motto" className='text-sm'>Motto</label>
                  <input id='motto' type="text" className='p-2 mt-2 block w-3/4 bg-white border border-slate-300 rounded-sm text-sm shadow-sm
                  placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500' placeholder='hiduplah seperti larry'/>
                </div>
                <div className='mt-5'>
                  <p className='text-base font-semibold'>Keterangan MZ</p>
                </div>
                <div className='mt-3'>
                  <label for="tahunMasukTN" className='text-sm'>Tahun Masuk TN</label>
                  <input id='tahunMasukTN' type="number" className='p-2 mt-2 block w-3/4 bg-white border border-slate-300 rounded-sm text-sm shadow-sm
                  placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500' placeholder='yyyy'/>
                </div>
                <div className='mt-3'>
                  <div className='flex items-center w-3/4'>
                    <label for="suluk" className='text-sm mr-2'>Suluk</label>
                    <input id='suluk' type="number" className='p-2 my-auto w-full block bg-white border border-slate-300 rounded-sm text-sm shadow-sm
                    placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500' placeholder='suluk ke'/>
                    <label for="kaji" className='text-sm mx-2'>Kaji</label>
                    <select id="kaji" className="p-2 my-auto block w-3/4 bg-white border border-slate-300 rounded-sm text-sm shadow-sm
                  placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500'">
                    <option className="text-xs" selected>Semua</option>
                    <option className="text-xs" value="IZ">IZ</option>
                    <option className="text-xs" value="NI">NI</option>
                    <option className="text-xs" value="WK">WK</option>
                    <option className="text-xs" value="MI">MI</option>
                    <option className="text-xs" value="D1">D1</option>
                    <option className="text-xs" value="D4">D4</option>
                    <option className="text-xs" value="PTT">PTT</option>
                    </select>
                  </div>
                </div>
                <div className='mt-3'>
                  <label for="asalMZ" className='text-sm'>Asal MZ</label>
                  <input id='asalMZ' type="text" className='p-2 mt-2 block w-3/4 bg-white border border-slate-300 rounded-sm text-sm shadow-sm
                  placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500' placeholder='asal MZ'/>
                </div>
                <div>
                  <button className='bg-blue-700 hover:bg-blue-900 p-2 rounded-md text-white mt-9 w-3/4'>Simpan</button>
                </div>
              </form>
            </div>
          </div>
      </div>
    </div>
  )
}
