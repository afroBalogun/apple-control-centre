import React from "react"
import { useAppDispatch, useAppSelector } from '../redux/hooks'; 
import { toggleIcon, selectClickedIcons } from '../redux/clickedIconsSlice';
import { FaBatteryQuarter } from "react-icons/fa6";

export default function PowerSaver(){
    const dispatch = useAppDispatch();
    const clickedIcons = useAppSelector(selectClickedIcons);

    const handleClick = (icon: keyof typeof clickedIcons) => {
        dispatch(toggleIcon(icon)); 
      };

    return(
        <div className="power-saver" onClick={() => {handleClick("powerSaver")}}>
            <FaBatteryQuarter  size={60} className={`p-4 ${clickedIcons.powerSaver ? "text-[#eed04b] rounded-full bg-white" : "text-[#ffffff] rounded-full bg-zinc-900"} cursor-pointer`}/>
        </div>
    )
}