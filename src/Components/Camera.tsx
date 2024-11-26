import React from "react"
import { useAppDispatch, useAppSelector } from '../redux/hooks'; 
import { toggleIcon, selectClickedIcons } from '../redux/clickedIconsSlice';
import { IoIosCamera } from "react-icons/io";

export default function Camera(){
    const dispatch = useAppDispatch();
    const clickedIcons = useAppSelector(selectClickedIcons);

    const handleClick = (icon: keyof typeof clickedIcons) => {
        dispatch(toggleIcon(icon)); 
      };

    return(
        <div className="camera" onClick={() => {handleClick("camera")}}>
            <IoIosCamera   size={60} className={`p-4 ${clickedIcons.camera ? "text-[#47a1e2] rounded-full bg-white" : "text-[#ffffff] rounded-full bg-zinc-900"} cursor-pointer`}/>
        </div>
    )
}