import React from "react"
import { useAppDispatch, useAppSelector } from '../redux/hooks'; 
import { toggleIcon, selectClickedIcons } from '../redux/clickedIconsSlice';
import { IoIosFlashlight } from "react-icons/io";

export default function FlashLight(){
    const dispatch = useAppDispatch();
    const clickedIcons = useAppSelector(selectClickedIcons);

    const handleClick = (icon: keyof typeof clickedIcons) => {
        dispatch(toggleIcon(icon)); 
      };

    return(
        <div className="flashlight" onClick={() => {handleClick("flashLight")}}>
            <IoIosFlashlight  size={60} className={`p-4 ${clickedIcons.flashLight ? "text-[#6b47e2] rounded-full bg-white" : "text-[#ffffff] rounded-full bg-zinc-900"} cursor-pointer`}/>
        </div>
    )
}