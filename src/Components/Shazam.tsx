import React from "react"
import { useAppDispatch, useAppSelector } from '../redux/hooks'; 
import { toggleIcon, selectClickedIcons } from '../redux/clickedIconsSlice';
import { SiShazam } from "react-icons/si";

export default function Shazam(){
    const dispatch = useAppDispatch();
    const clickedIcons = useAppSelector(selectClickedIcons);

    const handleClick = (icon: keyof typeof clickedIcons) => {
        dispatch(toggleIcon(icon)); 
      };

    return(
        <div className="shazam" onClick={() => {handleClick("Shazam")}}>
            <SiShazam  size={60} className={`p-4 ${clickedIcons.Shazam ? "text-[#477de2] rounded-full bg-white" : "text-[#ffffff] rounded-full bg-zinc-900"} cursor-pointer`}/>
        </div>
    )
}