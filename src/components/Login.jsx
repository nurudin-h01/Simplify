import React from 'react';
import imageLogo from 'assets/image/logo.png';

export default function Login() {
  return (
    <div className="flex bg-blueLight h-screen flex-col">
        <div className='m-auto'>
            <div className='relative flex justify-center'>
                <img className='w-14 h-14' src={imageLogo} alt="logo-simplify" />
            </div>
            <div className='flex justify-center mt-5'>
                <h1 className='font-poppins font-medium text-xl'>Sign in to <span className='font-bold text-blues'>Simplify</span></h1>
            </div>
            <div className='mt-5 flex justify-center bg-white p-10 shadow-md rounded-xl'>
                <form>
                    <div className='flex flex-col w-80'>
                        <label className='font-poppins font-normal text-sm mb-1'>Username or email adress</label>
                        <input className='py-1 px-2 border-2 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500' type="text" />
                    </div>
                    <div className='flex flex-col mt-3'>
                        <label className='font-poppins font-normal text-sm mb-1'>Password</label>
                        <input className='py-1 px-2 border-2 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500' type="text" />
                    </div>
                    <button className='mt-3 w-full bg-blues hover:bg-blueDark text-white font-bold py-2 px-4 rounded'>login</button>
                </form>
            </div>
        </div>
    </div>
  )
}
