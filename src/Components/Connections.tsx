import React, { useState } from "react";
import { CiLink } from "react-icons/ci";
import { FaBluetoothB } from "react-icons/fa";
import { BiSignal4 } from "react-icons/bi";
import { IoAirplaneSharp } from "react-icons/io5";
import { MdOutlineWifi } from "react-icons/md";
import { MdVpnKey } from "react-icons/md";
import { useAppDispatch, useAppSelector } from '../redux/hooks'; 
import { toggleIcon, selectClickedIcons } from '../redux/clickedIconsSlice';
import { toggleExpandIconsModal, selectexpandIconsModal } from "../redux/uiSlice";
import IconsModal from "./IconsModal";


type IconKeys = "airplane" | "airdrop" | "wifi" | "signal" | "bluetooth" | "link" | "vpn";


export default function Connections(){

    const dispatch = useAppDispatch();
    const clickedIcons = useAppSelector(selectClickedIcons);
  

    const isExpanded = useAppSelector(selectexpandIconsModal);


      const handleClick = (icon: keyof typeof clickedIcons) => {
        dispatch(toggleIcon(icon)); // Dispatch the toggle action
      };
  

    const handleIsExpanded = () => {
        dispatch(toggleExpandIconsModal());
      };


      

     
    //   console.log(clickedIcons);


      return (
        <div className="bg-zinc-900 w-[90%] rounded-3xl p-3 grid grid-cols-2 gap-2 justify-center items-center col-span-2">
            {/* Airplane Icon */}
            <IoAirplaneSharp
              size={60}
              className={`p-4 rounded-full ${
                clickedIcons.airplane ? "bg-[#e88102]" : "bg-[#3f3f3f]"
              } cursor-pointer`}
              onClick={() => handleClick("airplane")}
            />


            {/* Airdrop Image */}
            <div className={`flex justify-center items-center rounded-full h-full ${
                clickedIcons.airdrop ? "bg-[#0567f0]" : "bg-[#3f3f3f]"
              } cursor-pointer`}
              onClick={() => handleClick("airdrop")}
              >
              <img src="static/images/airdrop.png" alt="airdrop" />
            </div>
            

            {/* WiFi Icon */}
            <MdOutlineWifi
              size={60}
              className={`p-4 rounded-full ${
                clickedIcons.wifi ? "bg-[#0567f0]" : "bg-[#3f3f3f]"
              } cursor-pointer`}
              onClick={() => handleClick("wifi")}
            />




    
          {/* Nested Grid for Smaller Icons */}
          {
                isExpanded ? 
                <IconsModal/>
             : (
                <div className="grid grid-cols-2 gap-1" 
                onClick={() => handleIsExpanded()}
                >

                <BiSignal4
                  size={30}
                  className={`p-2 rounded-full ${
                    clickedIcons.signal ? "bg-[#22c925]" : "bg-[#3f3f3f]"
                  } cursor-pointer`}
                />

                <FaBluetoothB
                  size={30}
                  className={`p-2 rounded-full ${
                    clickedIcons.bluetooth ? "bg-[#0567f0]" : "bg-[#3f3f3f]"
                  } cursor-pointer`}
                />

                <CiLink
                  size={30}
                  className={`p-2 rounded-full ${
                    clickedIcons.link ? "bg-[#0567f0]" : "bg-[#3f3f3f]"
                  } cursor-pointer`}
                />

                <MdVpnKey
                  size={30}
                  className={`p-2 rounded-full ${
                    clickedIcons.vpn ? "bg-[#0567f0]" : "bg-[#3f3f3f]"
                  } cursor-pointer`}
                />
          </div>
            )
          }
        </div>
      );
    }

   