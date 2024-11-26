import React from "react";
import Connections from "./Components/Connections";
import MusicAndAirplay from "./Components/MusicAndAirplay";
import Orientation from "./Components/Orientation";
import ScreenMirroring from "./Components/ScreenMirroring";
import Brightness from "./Components/Brightness";
import Volume from "./Components/Volume";
import FlashLight from "./Components/FlashLight";
import Timer from "./Components/Timer";
import Focus from "./Components/Focus";
import OSF from "./Components/OSF";
import Calculator from "./Components/Calculator";
import PowerSaver from "./Components/PowerSaver";
import Camera from "./Components/Camera";
import ScreenRecord from "./Components/ScreenRecord";
import Shazam from "./Components/Shazam";
import QRCodeSCanner from "./Components/QRCodeScanner";
import Notes from "./Components/Notes";

export default function ControlPanel(){
    return(
        <div className="text-white grid grid-cols-4 gap-y-4 gap-x-1 w-full  p-5">
            {/* Connections */}
            <Connections/>


            {/* Music & Airplay */}
            <MusicAndAirplay/>

            {/* Orientation, Screen Mirroring, Brightness*/}
            <OSF/>

            <Brightness/>

            <Volume />


            <FlashLight/>

            <Timer/>
           
            <Calculator/>

            <Camera/>

            <PowerSaver/>

            <ScreenRecord/>

            <Shazam/>

            <QRCodeSCanner/>

            <Notes/>


        </div>
    )
}