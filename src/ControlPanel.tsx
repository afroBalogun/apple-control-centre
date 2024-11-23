import React from "react";
import Connections from "./Components/Connections";
import MusicAndAirplay from "./Components/MusicAndAirplay";
import Orientation from "./Components/Orientation";
import ScreenMirroring from "./Components/ScreenMirroring";
import Brightness from "./Components/Brightness";
import Volume from "./Components/Volume";
import FlashLight from "./Components/FlashLight";
import Timer from "./Components/Timer";

export default function ControlPanel(){
    return(
        <div className="text-white grid grid-cols-4 gap-y-4 gap-x-1 w-full  p-5">
            {/* Connections */}
            <Connections/>


            {/* Music & Airplay */}
            <MusicAndAirplay/>

            {/* Orientation */}
            <Orientation/>

            <ScreenMirroring/>

            <Brightness/>

            <Volume />

            <FlashLight/>

            <Timer/>
        </div>
    )
}