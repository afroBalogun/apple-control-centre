import React from "react"
import { useAppDispatch, useAppSelector } from '../redux/hooks'; 
import { toggleIcon, selectClickedIcons } from '../redux/clickedIconsSlice';
import { BsQrCodeScan } from "react-icons/bs";

export default function QRCodeSCanner(){
    const dispatch = useAppDispatch();
    const clickedIcons = useAppSelector(selectClickedIcons);

    const handleClick = (icon: keyof typeof clickedIcons) => {
        dispatch(toggleIcon(icon)); 
      };

    return(
        <div className="qr-scanner" onClick={() => {handleClick("QRCodeScanner")}}>
            <BsQrCodeScan size={60} className={`p-4 ${clickedIcons.QRCodeScanner ? " rounded-full bg-[#857b7b]" : "text-[#ffffff] rounded-full bg-zinc-900"} cursor-pointer`}/>
        </div>
    )
}