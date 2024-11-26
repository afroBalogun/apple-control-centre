import React from "react";
import Orientation from "./Orientation";
import SCreenMirroring from "./ScreenMirroring";
import Focus from "./Focus";

export default function OSF(){
    return(
        <div className="OSF col-span-2 w-[90%] flex flex-col gap-4">
            <div className="flex justify-between p-1">
                <Orientation/>
                <SCreenMirroring/>
            </div>
            <Focus/>
        </div>
    )
}