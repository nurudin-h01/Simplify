import React from "react";
import menu from "../icon/menu.png";
import save from "../icon/save.png";
import cupboard from "../icon/cupboard.png";

export default function Tab({children}){
    return(
        <div className="top-14 fixed grid grid-cols-[60px_auto] w-full h-screen">
            <div className=" bg-[#006EC5] flex flex-col">
                <ul className="py-5 mx-auto">
                    <li className="">
                        <button className="bg-[#0F4C7B] my-3 rounded">
                            <img className="h-4 m-3" src={cupboard} alt="" srcset="" />
                        </button>
                    </li>
                    <li className="">
                        <button className=" my-3 rounded">
                            <img className="h-4 m-3" src={save} alt="" srcset="" />
                        </button>
                    </li>
                    <li className="">
                        <button className=" my-3 rounded">
                            <img className="h-4 m-3" src={menu} alt="" srcset="" />
                        </button>
                    </li>
                </ul>

            </div>
            <div className="">
                {children}
            </div>

        </div>
    )

}