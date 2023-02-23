import React from "react";
import image from "../icon/navbar.png";
import profile from "../icon/profile.png";
import { Link, useMatch, useResolvedPath, useLocation } from "react-router-dom";


export default function Navbar({ children }) {
  let location = useLocation()

  function WebLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    return (
        <div>
            <Link className={"nav-link " + (match ? "active" : "")} to={to} {...props}>
                {children}
            </Link>
            {match && ""}
        </div>
    );
}
  return (
    <div className="top-0 flex py-2 px-7 w-full shadow-md fixed bg-white">
       <div className="grid grid-cols-12 w-full">
            <div className="col-span-3 my-auto">
                <img src={image} className="h-10 aspect-auto ml-5" alt="" srcset="" />
            </div>
            <div className="col-span-7 my-auto invisible md:visible">
                <ul className="flex">
                    <li className="mr-10 bg-[#DFF1FF] py-1 px-3 rounded">
                        <button className="text-[#006EC5] font-bold text-[14px]">Kelas</button>
                    </li>
                    <li className="mr-10 py-1 px-3 rounded">
                        <button className="font-medium text-[#272837] text-[14px]">Kaji</button>
                    </li>
                    <li className="mr-10 py-1 px-3 rounded">
                        <button className="font-medium text-[#272837] text-[14px]">Suluk</button>
                    </li>
                    <li className="mr-10 py-1 px-3 rounded">
                        <button className="font-medium text-[#272837] text-[14px]">QnA</button>
                    </li>
                </ul>
             
            </div>
            <div className="col-span-2 flex justify-end my-auto invisible md:visible">
                <h1 className="font-medium my-auto mr-4 text-[#272837] text-[14px]">Name </h1>
                <img src={profile} className="h-10" alt="profile" srcset="" />
            </div>
        </div>
    </div>
  );
}