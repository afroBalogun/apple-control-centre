import React from "react"
import { useAppDispatch, useAppSelector } from '../redux/hooks'; 
import { toggleIcon, selectClickedIcons } from '../redux/clickedIconsSlice';
import { IoIosTimer } from "react-icons/io";

export default function Timer(){
    const dispatch = useAppDispatch();
    const clickedIcons = useAppSelector(selectClickedIcons);

    return(
        <div className="timer">
            <IoIosTimer   size={60} className="p-4 rounded-full bg-zinc-900 cursor-pointer"/>
        </div>
    )
}