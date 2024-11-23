import React from "react"
import { useAppDispatch, useAppSelector } from '../redux/hooks'; 
import { toggleIcon, selectClickedIcons } from '../redux/clickedIconsSlice';
import { IoIosFlashlight } from "react-icons/io";

export default function FlashLight(){
    const dispatch = useAppDispatch();
    const clickedIcons = useAppSelector(selectClickedIcons);

    return(
        <div className="flashlight">
            <IoIosFlashlight  size={60} className="p-4 rounded-full bg-zinc-900 cursor-pointer"/>
        </div>
    )
}