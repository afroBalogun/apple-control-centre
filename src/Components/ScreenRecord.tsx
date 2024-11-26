import React, { useState } from "react"
import { useAppDispatch, useAppSelector } from '../redux/hooks'; 
import { toggleIcon, selectClickedIcons } from '../redux/clickedIconsSlice';
import { BsRecord2 } from "react-icons/bs";

export default function ScreenRecord(){
    const dispatch = useAppDispatch();
    const clickedIcons = useAppSelector(selectClickedIcons);
    const [countdown, setCountdown] = useState<number | null>(null);

    const handleClick = () => {
        if (countdown !== null) return;

        if (!clickedIcons.screenRecord) {

        const countdownInterval = setInterval(() => {
            setCountdown((prev) => {
              if (prev === null || prev <= 1) {
                clearInterval(countdownInterval);
                setCountdown(null); 
                return null;
              }
              return prev - 1; 
            });
          }, 1000);
    
        dispatch(toggleIcon("screenRecord"));
        setCountdown(3); 
        }

        else {
            dispatch(toggleIcon("screenRecord"));
        }
      };

      const countdownWrap = (
        <div
          className="countdown-wrap flex items-center justify-center rounded-full p-2 "
        >
          {countdown}
        </div>
      );
      

    return(
        <div className="screen-record" onClick={() => {handleClick() }}>
{countdown === null ? (
        // Show the icon when there's no active countdown
        <BsRecord2
          size={60}
          className={`p-4 ${
            clickedIcons.screenRecord
              ? "text-[#ec3030] rounded-full bg-white"
              : "text-[#ffffff] rounded-full bg-zinc-900"
          } cursor-pointer`}
        />
      ) : (
        <div
          className={`p-4 text-3xl font-bold ${
            clickedIcons.screenRecord
              ? "text-[#ffffff] rounded-full bg-zinc-900 text-xs"
              : "text-[#ffffff] rounded-full bg-zinc-900 text-xs"
          } flex items-center justify-center`}
          style={{ width: "60px", height: "60px" }}
        >
          {countdownWrap}
        </div>
      )}        </div>
    )
}