import React from 'react'

export default function informasiKelas() {
  return (
    <div className='col-span-3 text-[#272837] p-6 bg-white border-gray-200 rounded-lg shadow font-poppins'>
        <p className='text-base font-semibold'>Informasi Kelas</p>
        <p className='text-sm mt-2'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        </p>
        <div className='flex mt-2'>
            <i class="fa-solid text-xs fa-location-dot text-[#7A7A7A]"></i>
            <p className="ml-2 mb-2 font-medium text-xs text-[#7A7A7A]">
                MZ Saiful Khalik{" "}
            </p>
        </div>
        <div className='flex'>
            <i class="fa-solid text-xs fa-calendar text-[#7A7A7A]"></i>
            <p className="ml-2 mb-2 font-medium text-xs text-[#7A7A7A]">
                23 Februari 2023{" "}
            </p>
        </div>
        <p className='text-base font-semibold mt-3'>Syarat Pendaftaran</p>
        <div className='mt-2'>
            <ol className='ml-3 list-decimal list-outside text-sm'>
                <li>Ikhwan YAKF</li>
                <li>Sehat jasmani dan rohani</li>
                <li>Suka belajar/masih bisaj diajak berdiskusi</li>
                <li>Sudah vaksin dosis 3</li>
                <li>Izin orang tua (lajang)</li>
                <li>Masuk TN minimal 6 bulan lebih</li>
                <li>Aktif dalam kegiatan berMZ</li>
            </ol>
        </div>
    </div>
  )
}
