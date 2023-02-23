import React from 'react'
import Navbar from 'components/navbar';
import Tab from 'components/tab';
import FilterKelasSaya from 'components/filterKelasSaya';
import Search from 'components/search';
import { useRecoilState, useRecoilValue } from 'recoil';
import classatom from 'store/atoms/ClassAtom';
import classselector from 'store/selectors/ClassSelector';
import iconkelas from "../icon/kelas.png";

function KelasSaya({namakelas}) {
    const [formstate, setformstate] = useRecoilState(classatom);
    const classvalue = useRecoilValue(classselector)
    return (
        <div className="relative">
            <Navbar></Navbar>
            <Tab></Tab>
            <div className='mt-20 ml-20'>
                <div>
                    <p className='mt-5 mx-5 font-poppins font-bold text-[28px]'>Kelas Saya</p>
                </div>
                <div className='grid grid-cols-12'>
                    <FilterKelasSaya></FilterKelasSaya>
                    <div className='col-span-9'>
                        <Search></Search>
                        <div className="rounded w-auto mr-5 mt-5 p-4 bg-[#F5FCFF] shadow border">
                            <div className="grid grid-cols-12">
                                <div className="col-span-1">
                                <img
                                    src={iconkelas}
                                    className="p-2 h-12 rounded bg-blue-500"
                                    alt=""
                                    srcset=""
                                />
                                </div>
                                <div className="col-span-11 pl-1 w-full">
                                <div className="flex w-full">
                                    <div className="">
                                        <p className="text-lg font-bold font-poppins text-[#464646] mb-2">
                                            AFAS Dasar Pria
                                        </p>
                                    </div>
                                    <div className="my-auto ml-auto flex flex-col text-[#7A7A7A] text-xs">
                                        <p>Status Kelas</p>
                                    </div>
                                </div>
                                <div className="mt-[2px]">
                                    <div className="grid grid-cols-12 gap-1">
                                        <div className="col-span-4">
                                        <div className="flex my-1 w-28">
                                            <i class="fa-solid text-xs fa-location-dot text-[#7A7A7A]"></i>
                                            <p className="ml-2 mb-2 font-bold text-xs text-[#7A7A7A]">
                                            Lokasi{" "}
                                            </p>
                                        </div>
                                        <div className="flex my-1 w-28">
                                            <i class="fa-regular fa-calendar text-xs text-[#7A7A7A]"></i>
                                            <p className="ml-2 font-bold text-xs text-[#7A7A7A]">
                                            Pelaksanaan
                                            </p>
                                        </div>
                                        </div>
                                        <div className="col-span-4 border-l-2 px-3">
                                        <div className="flex my-1 w-28">
                                            <i class="fa-solid fa-user-group text-xs text-[#7A7A7A]"></i>
                                            <p className="ml-2 mb-2 font-bold text-xs text-[#7A7A7A]">
                                            Kouta{" "}
                                            </p>
                                        </div>
                                        <div className="flex my-1 w-28">
                                            <i class="fa-solid fa-user-plus text-xs text-[#7A7A7A]"></i>
                                            <p className="ml-2 font-bold text-xs text-[#7A7A7A]">
                                            Pendaftar{" "}
                                            </p>
                                        </div>
                                        </div>
                                        <div className="col-span-4 flex">
                                            <button className="w-3/5 px-4 py-2 ml-auto mb-auto bg-green-600 text-white rounded font-semibold">
                                                <p className="text-sm">Diterima</p>
                                            </button>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="rounded w-auto mr-5 mt-5 p-4 bg-[#F5FCFF] shadow border">
                            <div className="grid grid-cols-12">
                                <div className="col-span-1">
                                <img
                                    src={iconkelas}
                                    className="p-2 h-12 rounded bg-blue-500"
                                    alt=""
                                    srcset=""
                                />
                                </div>
                                <div className="col-span-11 pl-1 w-full">
                                <div className="flex w-full">
                                    <div className="">
                                        <p className="text-lg font-bold font-poppins text-[#464646] mb-2">
                                            AFAS Dasar Pria
                                        </p>
                                    </div>
                                    <div className="my-auto ml-auto flex flex-col text-[#7A7A7A] text-xs">
                                        <p>Status Kelas</p>
                                    </div>
                                </div>
                                <div className="mt-[2px]">
                                    <div className="grid grid-cols-12 gap-1">
                                        <div className="col-span-4">
                                        <div className="flex my-1 w-28">
                                            <i class="fa-solid text-xs fa-location-dot text-[#7A7A7A]"></i>
                                            <p className="ml-2 mb-2 font-bold text-xs text-[#7A7A7A]">
                                            Lokasi{" "}
                                            </p>
                                        </div>
                                        <div className="flex my-1 w-28">
                                            <i class="fa-regular fa-calendar text-xs text-[#7A7A7A]"></i>
                                            <p className="ml-2 font-bold text-xs text-[#7A7A7A]">
                                            Pelaksanaan
                                            </p>
                                        </div>
                                        </div>
                                        <div className="col-span-4 border-l-2 px-3">
                                        <div className="flex my-1 w-28">
                                            <i class="fa-solid fa-user-group text-xs text-[#7A7A7A]"></i>
                                            <p className="ml-2 mb-2 font-bold text-xs text-[#7A7A7A]">
                                            Kouta{" "}
                                            </p>
                                        </div>
                                        <div className="flex my-1 w-28">
                                            <i class="fa-solid fa-user-plus text-xs text-[#7A7A7A]"></i>
                                            <p className="ml-2 font-bold text-xs text-[#7A7A7A]">
                                            Pendaftar{" "}
                                            </p>
                                        </div>
                                        </div>
                                        <div className="col-span-4 flex">
                                            <button className="w-3/5 px-4 py-2 ml-auto mb-auto bg-[#006EC5] text-white rounded font-semibold">
                                                <p className="text-sm">Diproses</p>
                                            </button>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="rounded w-auto mr-5 mt-5 p-4 bg-[#F5FCFF] shadow border">
                            <div className="grid grid-cols-12">
                                <div className="col-span-1">
                                <img
                                    src={iconkelas}
                                    className="p-2 h-12 rounded bg-blue-500"
                                    alt=""
                                    srcset=""
                                />
                                </div>
                                <div className="col-span-11 pl-1 w-full">
                                <div className="flex w-full">
                                    <div className="">
                                        <p className="text-lg font-bold font-poppins text-[#464646] mb-2">
                                            AFAS Dasar Pria
                                        </p>
                                    </div>
                                    <div className="my-auto ml-auto flex flex-col text-[#7A7A7A] text-xs">
                                        <p>Status Kelas</p>
                                    </div>
                                </div>
                                <div className="mt-[2px]">
                                    <div className="grid grid-cols-12 gap-1">
                                        <div className="col-span-4">
                                        <div className="flex my-1 w-28">
                                            <i class="fa-solid text-xs fa-location-dot text-[#7A7A7A]"></i>
                                            <p className="ml-2 mb-2 font-bold text-xs text-[#7A7A7A]">
                                            Lokasi{" "}
                                            </p>
                                        </div>
                                        <div className="flex my-1 w-28">
                                            <i class="fa-regular fa-calendar text-xs text-[#7A7A7A]"></i>
                                            <p className="ml-2 font-bold text-xs text-[#7A7A7A]">
                                            Pelaksanaan
                                            </p>
                                        </div>
                                        </div>
                                        <div className="col-span-4 border-l-2 px-3">
                                        <div className="flex my-1 w-28">
                                            <i class="fa-solid fa-user-group text-xs text-[#7A7A7A]"></i>
                                            <p className="ml-2 mb-2 font-bold text-xs text-[#7A7A7A]">
                                            Kouta{" "}
                                            </p>
                                        </div>
                                        <div className="flex my-1 w-28">
                                            <i class="fa-solid fa-user-plus text-xs text-[#7A7A7A]"></i>
                                            <p className="ml-2 font-bold text-xs text-[#7A7A7A]">
                                            Pendaftar{" "}
                                            </p>
                                        </div>
                                        </div>
                                        <div className="col-span-4 flex">
                                            <button className="w-3/5 px-4 py-2 ml-auto mb-auto bg-red-600 text-white rounded font-semibold">
                                                <p className="text-sm">Ditolak</p>
                                            </button>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="rounded w-auto mr-5 mt-5 p-4 bg-[#F5FCFF] shadow border">
                            <div className="grid grid-cols-12">
                                <div className="col-span-1">
                                <img
                                    src={iconkelas}
                                    className="p-2 h-12 rounded bg-blue-500"
                                    alt=""
                                    srcset=""
                                />
                                </div>
                                <div className="col-span-11 pl-1 w-full">
                                <div className="flex w-full">
                                    <div className="">
                                        <p className="text-lg font-bold font-poppins text-[#464646] mb-2">
                                            AFAS Dasar Pria
                                        </p>
                                    </div>
                                    <div className="my-auto ml-auto flex flex-col text-[#7A7A7A] text-xs">
                                        <p>Status Kelas</p>
                                    </div>
                                </div>
                                <div className="mt-[2px]">
                                    <div className="grid grid-cols-12 gap-1">
                                        <div className="col-span-4">
                                        <div className="flex my-1 w-28">
                                            <i class="fa-solid text-xs fa-location-dot text-[#7A7A7A]"></i>
                                            <p className="ml-2 mb-2 font-bold text-xs text-[#7A7A7A]">
                                            Lokasi{" "}
                                            </p>
                                        </div>
                                        <div className="flex my-1 w-28">
                                            <i class="fa-regular fa-calendar text-xs text-[#7A7A7A]"></i>
                                            <p className="ml-2 font-bold text-xs text-[#7A7A7A]">
                                            Pelaksanaan
                                            </p>
                                        </div>
                                        </div>
                                        <div className="col-span-4 border-l-2 px-3">
                                        <div className="flex my-1 w-28">
                                            <i class="fa-solid fa-user-group text-xs text-[#7A7A7A]"></i>
                                            <p className="ml-2 mb-2 font-bold text-xs text-[#7A7A7A]">
                                            Kouta{" "}
                                            </p>
                                        </div>
                                        <div className="flex my-1 w-28">
                                            <i class="fa-solid fa-user-plus text-xs text-[#7A7A7A]"></i>
                                            <p className="ml-2 font-bold text-xs text-[#7A7A7A]">
                                            Pendaftar{" "}
                                            </p>
                                        </div>
                                        </div>
                                        <div className="col-span-4 flex">
                                            <button className="w-3/5 px-4 py-2 ml-auto mb-auto bg-gray-500 text-white rounded font-semibold">
                                                <p className="text-sm">Selesai</p>
                                            </button>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="rounded w-auto mr-5 mt-5 p-4 bg-[#F5FCFF] shadow border">
                            <div className="grid grid-cols-12">
                                <div className="col-span-1">
                                <img
                                    src={iconkelas}
                                    className="p-2 h-12 rounded bg-blue-500"
                                    alt=""
                                    srcset=""
                                />
                                </div>
                                <div className="col-span-11 pl-1 w-full">
                                <div className="flex w-full">
                                    <div className="">
                                        <p className="text-lg font-bold font-poppins text-[#464646] mb-2">
                                            AFAS Dasar Pria
                                        </p>
                                    </div>
                                    <div className="my-auto ml-auto flex flex-col text-[#7A7A7A] text-xs">
                                        <p>Konfirmasi sebelum</p>
                                        <p className='text-right font-bold'>26 Februari 2023</p>
                                    </div>
                                </div>
                                <div className="mt-[2px]">
                                    <div className="grid grid-cols-12 gap-1">
                                        <div className="col-span-4">
                                        <div className="flex my-1 w-28">
                                            <i class="fa-solid text-xs fa-location-dot text-[#7A7A7A]"></i>
                                            <p className="ml-2 mb-2 font-bold text-xs text-[#7A7A7A]">
                                            Lokasi{" "}
                                            </p>
                                        </div>
                                        <div className="flex my-1 w-28">
                                            <i class="fa-regular fa-calendar text-xs text-[#7A7A7A]"></i>
                                            <p className="ml-2 font-bold text-xs text-[#7A7A7A]">
                                            Pelaksanaan
                                            </p>
                                        </div>
                                        </div>
                                        <div className="col-span-4 border-l-2 px-3">
                                        <div className="flex my-1 w-28">
                                            <i class="fa-solid fa-user-group text-xs text-[#7A7A7A]"></i>
                                            <p className="ml-2 mb-2 font-bold text-xs text-[#7A7A7A]">
                                            Kouta{" "}
                                            </p>
                                        </div>
                                        <div className="flex my-1 w-28">
                                            <i class="fa-solid fa-user-plus text-xs text-[#7A7A7A]"></i>
                                            <p className="ml-2 font-bold text-xs text-[#7A7A7A]">
                                            Pendaftar{" "}
                                            </p>
                                        </div>
                                        </div>
                                        <div className="col-span-4 flex">
                                            <button className="w-3/5 px-4 py-2 ml-auto mb-auto bg-yellow-500 text-white rounded font-semibold">
                                                <p className="text-sm">Konfirmasi</p>
                                            </button>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default KelasSaya