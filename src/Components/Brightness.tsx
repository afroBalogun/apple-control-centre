import React from "react"
import { useAppDispatch, useAppSelector } from '../redux/hooks'; 
import { toggleIcon, selectClickedIcons } from '../redux/clickedIconsSlice';
import { CiBrightnessDown } from "react-icons/ci";

export default function Brightness(){
    const dispatch = useAppDispatch();
    const clickedIcons = useAppSelector(selectClickedIcons);

    return(
        <div className="relative brightness ">
            <div className="p-2 h-full w-4/5 rounded-3xl bg-zinc-900 cursor-pointer flex justify-center items-end">
                <CiBrightnessDown size={40} className="p-3 bg-zinc-900 cursor-pointer"/>
            </div>
        </div>
    )
}