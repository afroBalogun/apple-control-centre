import React from "react"
import { useAppDispatch, useAppSelector } from '../redux/hooks'; 
import { toggleIcon, selectClickedIcons } from '../redux/clickedIconsSlice';
import { PiNoteFill } from "react-icons/pi";

export default function Notes(){
    const dispatch = useAppDispatch();
    const clickedIcons = useAppSelector(selectClickedIcons);

    const handleClick = (icon: keyof typeof clickedIcons) => {
        dispatch(toggleIcon(icon)); 
      };

    return(
        <div className="notes" onClick={() => {handleClick("notes")}}>
            <PiNoteFill  size={60} className={`p-4 ${clickedIcons.notes ? " rounded-full bg-[#857b7b]" : "text-[#ffffff] rounded-full bg-zinc-900"} cursor-pointer`}/>
        </div>
    )
}