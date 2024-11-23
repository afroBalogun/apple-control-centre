import React, { useState } from "react";
import { SiAirplayaudio } from "react-icons/si";
import { IoIosRewind } from "react-icons/io";
import { IoIosFastforward, IoIosPlay,  } from "react-icons/io";
import { useAppDispatch, useAppSelector } from '../redux/hooks'; 
import { toggleIcon, selectClickedIcons } from '../redux/clickedIconsSlice';
import { toggleExpandPlayModal, selectexpandPlayModal } from "../redux/uiSlice";
import PlayModal from "./PlayModal";


export default function MusicAndAirplay(){
    const dispatch = useAppDispatch();
    const clickedIcons = useAppSelector(selectClickedIcons);
  

    const isExpanded = useAppSelector(selectexpandPlayModal);

    const handleClick = (icon: keyof typeof clickedIcons) => {
        dispatch(toggleIcon(icon)); 
      };

      const handleIsExpanded = () => {
        dispatch(toggleExpandPlayModal());
      };   

    //   console.log(isExpanded)

    if (isExpanded === true){
        return(
            <PlayModal/>
        )
    }
      
    return (
        <div className="bg-zinc-900 w-[90%] col-span-2 rounded-3xl p-3 flex flex-col gap-4 cursor-pointer"                 
            onClick={() => {handleIsExpanded()}}
>
            <div className="flex justify-between items-start"
            >
                <div className="w-[40%] h-[50px] rounded-xl bg-[#3f3f3f] ">
                
                </div>
                <SiAirplayaudio size={35}
                className={`p-2 rounded-full cursor-pointer bg-[#3f3f3f]`} 
                />
            </div>

            <p
                className="text-xs text-[#656565] font-bold"
            >Not Playing</p>


            <div className="flex justify-between items-center">
                <IoIosRewind size={30} className="cursor-pointer"/>
                <IoIosPlay size={35} className="cursor-pointer"/>

                <IoIosFastforward size={30} className="cursor-pointer"/>
            </div>


        </div>
    )
}