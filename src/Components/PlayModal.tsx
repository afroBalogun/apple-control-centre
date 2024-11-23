import React from "react";
import { useAppDispatch, useAppSelector } from '../redux/hooks'; 
import { toggleIcon, selectClickedIcons } from '../redux/clickedIconsSlice';
import { toggleExpandPlayModal, selectexpandPlayModal } from "../redux/uiSlice";
import { IoIosRewind } from "react-icons/io";
import { IoIosFastforward, IoIosPlay } from "react-icons/io";
import { FaVolumeOff, FaVolumeUp } from "react-icons/fa";
import { SiAirplayaudio } from "react-icons/si";



export default function PlayModal(){
    const dispatch = useAppDispatch();
    const clickedIcons = useAppSelector(selectClickedIcons);
  

    const isExpanded = useAppSelector(selectexpandPlayModal);

    const handleClick = (icon: keyof typeof clickedIcons) => {
        dispatch(toggleIcon(icon)); 
      };

      const handleIsExpanded = () => {
        dispatch(toggleExpandPlayModal());
      };
    return(
        <div className={`h-full absolute w-full top-0 ${isExpanded? "left-0" : ""}  p-5 flex items-center justify-center `}>
                {/* Blurred Background */}
                <div className="absolute top-0 left-0 float-left inset-0 blur-sm z-10 bg-transparent w-screen h-screen bg-[#303030] "
                    onClick={() => handleIsExpanded()}
                >
                </div>
                <div className="relative gap-5 px-7 py-5 rounded-3xl z-20 w-[350px] h-[90%]  bg-[#252525]  flex flex-col place-items-center ">
                    <div className="w-[100%]  h-1/2  bg-[#303030] rounded-3xl cursor-pointer">

                    </div>
                    <div className="w-full flex justify-between mt-5">
                        <p>Not Playing</p>
                        <p>.....</p>
                    </div>

                    <div className="w-full h-1 bg-[#303030] rounded-sm cursor-pointer"></div>

                    <div className="w-full flex justify-between -mt-5">
                        <p>-:--</p>
                        <p>-:--</p>
                    </div>

                    <div className="w-full -mt-5 flex justify-around items-center px-10">
                        <IoIosRewind size={35} className="cursor-pointer"/>
                        <IoIosPlay size={50} className="cursor-pointer"/>
                        <IoIosFastforward size={35} className="cursor-pointer"/>
                    </div>

                    <div className="w-full flex justify-between items-center ">
                        <FaVolumeOff className="text-[#303030] cursor-pointer"/>
                        <div className="h-1 w-3/4 bg-[#303030] rounded-sm cursor-pointer">

                        </div>
                        <FaVolumeUp className="text-[#303030] cursor-pointer"/>
                    </div>

                    <div className="flex items-center gap-1 bg-[#303030] px-4 py-2 rounded-3xl cursor-pointer">
                        <SiAirplayaudio />
                        <p className="text-xs">iPhone</p>
                    </div>
                </div>
        </div>
    )
}