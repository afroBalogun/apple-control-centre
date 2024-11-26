import React from "react"
import { useAppDispatch, useAppSelector } from '../redux/hooks'; 
import { toggleIcon, selectClickedIcons } from '../redux/clickedIconsSlice';
import { FaCalculator } from "react-icons/fa6";

export default function Calculator(){
    const dispatch = useAppDispatch();
    const clickedIcons = useAppSelector(selectClickedIcons);

    return(
        <div className="calculator">
            <FaCalculator  size={60} className="p-4 rounded-full bg-zinc-900 cursor-pointer"/>
        </div>
    )
}