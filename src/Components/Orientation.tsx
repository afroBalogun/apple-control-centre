import React from "react"
import { GiPadlock, GiPadlockOpen  } from "react-icons/gi";
import { FaArrowRotateRight } from "react-icons/fa6";
import { useAppDispatch, useAppSelector } from '../redux/hooks'; 
import { toggleIcon, selectClickedIcons } from '../redux/clickedIconsSlice';



export default function Orientation(){

    const dispatch = useAppDispatch();
    const clickedIcons = useAppSelector(selectClickedIcons);

    const handleClick = (icon: keyof typeof clickedIcons) => {
        dispatch(toggleIcon(icon)); 
      };

    return(
        <div className=" " onClick={() => {handleClick("orientation")}}>
            {
                clickedIcons.orientation ? 
                    <GiPadlock size={60} className="bg-white text-red-700 p-6 rounded-full "/>
                :  
                    <GiPadlockOpen size={60} className="bg-zinc-900 text-white p-6 rounded-full "/>

            }
            <FaArrowRotateRight size={45} className="relative -top-[50%] left-[8px] p-[2px] text-[#3f3f3f] cursor-pointer"/>
            {/* <FontAwesomeIcon icon={faArrowRotateRight} className="relative -top-[68%] left-[14px] font-thin p-[2px] text-3xl text-blue-300 cursor-pointer" /> */}
        </div>
    )
}