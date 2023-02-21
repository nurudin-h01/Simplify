import React, {useEffect} from "react";
import { useForm } from "react-hook-form";
import { useRecoilState, useRecoilValue } from 'recoil';
import formatom from "../store/atoms/FormAtom";
import formselector from "../store/selectors/FormSelector";


export default function Filter() {
  const [formstate, setformstate] = useRecoilState(formatom);
  const formvalue = useRecoilValue(formselector)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  useEffect(()=>{
    const sub = watch((data)=>{
      setformstate(data)

    })
    return () =>{
      sub.unsubscribe();
    }
  },[watch])
  
  return (
    <div className="m-5 col-span-3 text-[#272837] p-6 bg-white border border-gray-200 rounded-lg shadow">
      <p className="text-basea7YZ text-start font-bold mb-5">Filter By</p>
      <form onSubmit={handleSubmit(onSubmit)} className="focus:ring-green-500 focus:border-green-500">
        <div className="mb-3">
          <label for="jeniskelamin" class="block mb-1 text-xs text-gray-900">Jenis Kelamin</label>
          <select {...register("jeniskelamin")} id="jeniskelamin"className="form-select appearance-none block w-full px-3 py-1.5 text-xs font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-[#272837] focus:outline-none">
            <option className="text-xs" selected>Semua</option>
            <option className="text-xs" value="Laki-laki">Laki- laki</option>
            <option className="text-xs" value="Perempuan">Perempuan</option>
          </select>
        </div>
        <div className="mb-3">
          <label for="jenis" class="block mb-1 text-xs text-gray-900">Jenis</label>
          <select {...register("jenis")} id="jenis"className="form-select appearance-none block w-full px-3 py-1.5 text-xs font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-[#272837] focus:outline-none">
            <option className="text-xs" selected>Semua</option>
            <option className="text-xs" value="Laki-laki">Laki- laki</option>
            <option className="text-xs" value="Perempuan">Perempuan</option>
          </select>
        </div>
        <div className="mb-3">
          <label for="tempat" class="block mb-1 text-xs text-gray-900">Tempat</label>
          <select {...register("tempat")} id="tempat" className="form-select appearance-none block w-full px-3 py-1.5 text-xs font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-[#272837] focus:outline-none">
            <option className="text-xs" selected>Semua</option>
            <option className="text-xs" value="Laki-laki">Laki- laki</option>
            <option className="text-xs" value="Perempuan">Perempuan</option>
          </select>
        </div>
        <div className="mb-3">
          <label for="tahun" class="block mb-1 text-xs text-gray-900">Tahun</label>
          <select {...register("tahun")} id="tahun"className="form-select appearance-none block w-full px-3 py-1.5 text-xs font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-[#272837] focus:outline-none">
            <option className="text-xs" selected>Semua</option>
            <option className="text-xs" value="Laki-laki">Laki- laki</option>
            <option className="text-xs" value="Perempuan">Perempuan</option>
          </select>
        </div>
      </form>
    </div>
  );
}
