import React from "react"
import { useAppDispatch, useAppSelector } from '../redux/hooks'; 
import { toggleIcon, selectClickedIcons } from '../redux/clickedIconsSlice';
import { PiScreencastLight } from "react-icons/pi";

export default function SCreenMirroring(){
    const dispatch = useAppDispatch();
    const clickedIcons = useAppSelector(selectClickedIcons);

    return(
        <div className="screen-mirroring">
            <PiScreencastLight size={60} className="p-4 rounded-full bg-zinc-900 cursor-pointer"/>
        </div>
    )
}