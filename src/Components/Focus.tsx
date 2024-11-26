import React from "react";
import { IoMoon } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from '../redux/hooks'; 
import { toggleIcon, selectClickedIcons } from '../redux/clickedIconsSlice';

export default function Focus(){

    const dispatch = useAppDispatch();
    const clickedIcons = useAppSelector(selectClickedIcons);

    const handleClick = (icon: keyof typeof clickedIcons) => {
        dispatch(toggleIcon(icon)); 
      };

    return(
        <div className = " p-2 rounded-3xl flex col-span-2 gap-2 items-center justify-start bg-zinc-900"
        >
            <div>
                <IoMoon size={45} 
                    onClick={() => {handleClick("focus")}}
                    className={`p-3 ${clickedIcons.focus ? "text-[#6b47e2] rounded-full bg-white" : "text-[#ffffff] rounded-full bg-[#3f3f3f]"} cursor-pointer`}/>
            </div>
            <div className="text-xs ">
                <p>
                    Do not disturb
                </p>
                <p className="text-xs text-[#3f3f3f]">
                    On 
                </p>
            </div>

        </div>
    )
}