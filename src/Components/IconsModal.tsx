import React from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { useAppDispatch, useAppSelector } from '../redux/hooks'; 
import { toggleIcon, selectClickedIcons } from '../redux/clickedIconsSlice';
import { toggleExpandIconsModal, selectexpandIconsModal } from "../redux/uiSlice";
import { CiLink } from "react-icons/ci";
import { FaBluetoothB } from "react-icons/fa";
import { BiSignal4 } from "react-icons/bi";
import { IoAirplaneSharp } from "react-icons/io5";
import { MdOutlineWifi } from "react-icons/md";
import { MdVpnKey } from "react-icons/md";


type IconKeys = "airplane" | "airdrop" | "wifi" | "signal" | "bluetooth" | "link" | "vpn";

export default function IconsModal(){


      const dispatch = useAppDispatch();
      const clickedIcons = useAppSelector(selectClickedIcons);

      const isExpanded = useAppSelector(selectexpandIconsModal);
        

      const handleClick = (icon: keyof typeof clickedIcons) => {
        dispatch(toggleIcon(icon)); 
      };

      const handleIsExpanded = () => {
        dispatch(toggleExpandIconsModal());
      };

      const Icons = [
        {
          icon: (
            <IoAirplaneSharp
              size={40}
              className={`p-3 rounded-full ${
                clickedIcons.airplane ? "bg-[#e88102]" : "bg-[#3f3f3f]"
              } cursor-pointer`}
              onClick={() => handleClick("airplane")}
            />
          ),
          title: "Airplane Mode",
          key: "airplane" as IconKeys,
          status: {
            true: "On",
            false: "Off",
          },
        },
        {
          icon: (
            <div
              className={`flex justify-center items-center rounded-full h-full p-3 ${
                clickedIcons.airdrop ? "bg-[#0567f0]" : "bg-[#3f3f3f]"
              } cursor-pointer`}
              onClick={() => handleClick("airdrop")}
            >
              <img src="static/images/airdrop.png" alt="airdrop" className="w-[15px]" />
            </div>
          ),
          title: "Airdrop",
          key: "airdrop" as IconKeys,
          status: {
            true: "Everyone",
            false: "Receiving Off",
          },
          arrows: {
            up: <IoIosArrowUp />,
            down: <IoIosArrowDown />,
          },
        },
        {
          icon: (
            <MdOutlineWifi
              size={40}
              className={`p-3 rounded-full ${
                clickedIcons.wifi ? "bg-[#0567f0]" : "bg-[#3f3f3f]"
              } cursor-pointer`}
              onClick={() => handleClick("wifi")}
            />
          ),
          title: "Wi-Fi",
          key: "wifi" as IconKeys,
          status: {
            true: "On",
            false: "Off",
          },
          arrows: {
            up: <IoIosArrowUp />,
            down: <IoIosArrowDown />,
          },
        },
        {
          icon: (
            <BiSignal4
              size={40}
              className={`p-3 rounded-full ${
                clickedIcons.signal ? "bg-[#22c925]" : "bg-[#3f3f3f]"
              } cursor-pointer`}
              onClick={() => handleClick("signal")}
            />
          ),
          title: "Mobile Data",
          key: "signal" as IconKeys,
          status: {
            true: "On",
            false: "Off",
          },
        },
        {
          icon: (
            <FaBluetoothB
              size={40}
              className={`p-3 rounded-full ${
                clickedIcons.bluetooth ? "bg-[#0567f0]" : "bg-[#3f3f3f]"
              } cursor-pointer`}
              onClick={() => handleClick("bluetooth")}
            />
          ),
          title: "Bluetooth",
          key: "bluetooth" as IconKeys,
          status: {
            true: "On",
            false: "Off",
          },
          arrows: {
            up: <IoIosArrowUp />,
            down: <IoIosArrowDown />,
          },
        },
        {
          icon: (
            <CiLink
              size={40}
              className={`p-3 rounded-full ${
                clickedIcons.link ? "bg-[#0567f0]" : "bg-[#3f3f3f]"
              } cursor-pointer`}
              onClick={() => handleClick("link")}
            />
          ),
          title: "Personal Hotspot",
          key: "link" as IconKeys,
          status: {
            true: "On",
            false: "Off",
          },
        },
        {
          icon: (
            <MdVpnKey
              size={40}
              className={`p-3 rounded-full ${
                clickedIcons.vpn ? "bg-[#0567f0]" : "bg-[#3f3f3f]"
              } cursor-pointer`}
              onClick={() => handleClick("vpn")}
            />
          ),
          title: "VPN",
          key: "vpn" as IconKeys,
          status: {
            true: "On",
            false: "Off",
          },
        },
      ];


      const expandedIcons = Icons.map((icon) => {
        return (
            <li className="flex w-full gap-5 my-5 items-center bg-[#303030a6] p-2 px-4 rounded-xl">
                <div className="flex w-full gap-5 items-center">
                    {icon.icon}
                    <div className="flex flex-col text-sm ">
                        <p className="font-semibold ">
                            {icon.title}
                        </p>
                        <p className="font-thin text-xs text-gray-500">
                            {clickedIcons[icon.key]? icon.status.true : icon.status.false}
                        </p>
                    </div>
                </div>
                {icon.arrows && <div className="flex flex-col cursor-pointer">
                   {icon.arrows?.up}
                   {icon.arrows?.down}

                </div>}
            </li>
        )
  })

    return (
         
            <div className={`h-full absolute w-full top-0 ${isExpanded? "left-0" : ""}  p-4 flex items-center justify-center `}>
                {/* Blurred Background */}
                <div className="absolute top-0 left-0 float-left inset-0 blur-sm z-10 bg-transparent w-screen h-screen bg-[#252525] "
                    onClick={() => handleIsExpanded()}
                >
                </div>
                <ul className="relative z-20 w-[400px] h-full ml-5">
                    {expandedIcons}
                </ul>
            </div>
    )
}