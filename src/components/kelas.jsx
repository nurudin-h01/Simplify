import React from "react";
import iconkelas from "../icon/kelas.png";

export default function Kelas({namakelas}) {
  return (
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
            <div className="box-1 w-full">
              <p className="text-lg font-bold font-poppins text-[#464646] mb-2">
                {namakelas}
              </p>
            </div>
            <div className="box-2 ml-auto flex flex-col text-[#464646]">
              <i class="text-lg fa-regular fa-bookmark text-[#464646] ml-auto"></i>
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
                  <button className="px-4 py-2 ml-auto mt-auto bg-[#006EC5] text-white rounded font-semibold">
                    <p className="text-sm">Daftar Kelas</p>
                  </button>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}
