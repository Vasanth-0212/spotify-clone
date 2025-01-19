


import { useState , useEffect } from "react";
import { songsData } from "../../../public/assets/assets.js";
import Image from "next/image";

const MusicPlayer = () => {
    return(
        <div className="absolute bottom-0 w-screen h-20 bg-gray-950 text-white flex items-center justify-between px-6 ">
            <div className="md:flex items-center justify-start space-x-4 hidden sm:block">
                <Image src={songsData[0].image} alt="song" width={50} height={50} />
                <div>
                    <h1>{songsData[0].name}</h1>
                    <h2>{songsData[0].desc.slice(0,12)}</h2>
                </div>
            </div>
            <div className="flex flex-col space-y-2">
                <div className="flex items-center justify-center space-x-2">
                    <Image src="/assets/shuffle.png" alt="shuffle" width={15} height={15} />
                    <Image src="/assets/prev.png" alt="previous" width={15} height={15} />
                    <Image src="/assets/play.png" alt="play" width={15} height={15} />
                    <Image src="/assets/next.png" alt="next" width={15} height={15} />
                    <Image src="/assets/loop.png" alt="repeat" width={15} height={15} />
                </div>     
                <div className="flex items-center space-x-2">
                    <p>1:06</p>
                    <div className="w-[400px] h-[4px] bg-white rounded-xl"></div>
                    <p>3:52</p>
                </div> 
            </div>
            <div className="md:flex items-center justify-end space-x-2 hidden sm:block">
                <Image src="/assets/volume.png" alt="volume" width={15} height={15} />
                <div className="w-[100px] h-[2px] bg-white rounded-xl"></div>
                <Image src="/assets/zoom.png" alt="zoom" width={15} height={15} />
            </div>
        </div>
    )
}

export default MusicPlayer;