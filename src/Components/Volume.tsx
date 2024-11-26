import React from "react"
import { useAppDispatch, useAppSelector } from '../redux/hooks'; 
import { toggleIcon, selectClickedIcons } from '../redux/clickedIconsSlice';
import { FaVolumeUp } from "react-icons/fa";

export default function Volume(){
    const dispatch = useAppDispatch();
    const clickedIcons = useAppSelector(selectClickedIcons);

    return(
        <div className="brightness  ">
            <div className="p-2 h-full w-4/5 rounded-3xl bg-zinc-900 cursor-pointer flex justify-center items-end">
                <FaVolumeUp  size={40} className="p-3 bg-zinc-900 cursor-pointer"/>
            </div>
        </div>
    )
}