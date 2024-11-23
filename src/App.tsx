import react from "react";
import ControlPanel from "./ControlPanel";


export default function App(){
    return(
        <div className="relative h-screen w-full bg-black overflow-hidden flex justify-center items-center">
            {/* Blurry Background */}
            <div className="absolute inset-0 text-white blur-sm z-0 bg-[#3f3f3f] ">
            </div>
  
            {/* Content */}
            <div className=" z-10 w-[400px] ">
                <ControlPanel />
            </div>
        </div>
    )
}