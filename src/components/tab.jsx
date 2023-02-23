import React from "react";
import menu from "../icon/menu.png";
import save from "../icon/save.png";
import cupboard from "../icon/cupboard.png";
import { Link, useMatch, useResolvedPath, useLocation } from "react-router-dom";


export default function Tab({children}){
    let location = useLocation();
    function WebLink({ children, to, ...props }) {
        let resolved = useResolvedPath(to);
        let match = useMatch({ path: resolved.pathname, end: true });
        return (
            <div>
                <Link to={to} {...props}>
                    <button className={"my-3 rounded " + (match ? "bg-[#0F4C7B]" : "")}>
                            {children}
                    </button>
                </Link>
                {match && ""}
            </div>
        );
    };

    return(
        <div className=" grid grid-cols-[60px_auto] w-full ">
            <div className=" bg-[#006EC5] top-14 px-2 flex fixed h-screen flex-col">
                <ul className="py-5 mx-auto">
                    <li className="">
                        <WebLink to="/kelas">
                            <img className="h-4 m-3" src={cupboard} alt="" srcset="" />
                        </WebLink>
                    </li>
                    <li className="">
                        <WebLink to="/riwayat">
                            <img className="h-4 m-3" src={save} alt="" srcset="" />
                        </WebLink>
                    </li>
                    <li className="">
                        <WebLink to="/kelasSaya">
                            <img className="h-4 m-3" src={menu} alt="" srcset="" />
                        </WebLink>
                    </li>
                </ul>

            </div>
            <div className="">
                {children}
            </div>

        </div>
    )

}