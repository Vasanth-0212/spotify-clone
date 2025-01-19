"use client";
import Image from "next/image";
import { albumsData } from "../../../public/assets/assets";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { songsData } from "../../../public/assets/assets";
import { useRouter } from "next/navigation";
import AlbumItem from "../components/AlbumItem";  

const Home = () => {

    const router = useRouter();

    return (
        <div className="absolute top-0 right-0 bg-gray-950 h-full w-4/5 ml-[300px] overflow-hidden">
            <ScrollArea>
                <div className="mt-10">
                    <h1 className="text-white text-2xl font-extrabold mb-2">Featured Albums</h1>
                    <div className="flex">
                        {albumsData.map((album) => {
                            return (
                                <AlbumItem key={album.id} img={album.image} name={album.name} desc={album.desc} id={album.id}/>
                            )
                        })}
                    </div>
                </div>
                <div className="mt-32 w-screen">
                    <h1 className="text-white text-2xl font-extrabold mb-2">Today's Biggest Hits</h1>
                    <div className="flex">
                        {songsData.slice(0,6).map((song) => {
                            return (
                                <div className="flex flex-col items-center space-y-2 rounded-xl p-2 h-[200px] w-[200px] text-white">
                                    <Image src={song.image} alt="album" objectFit="cover" />
                                    <div className="justify-start">
                                        <h1 className="font-extrabold font-sans text-xl">{song.name}</h1>
                                        <h2>{song.desc}</h2>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </ScrollArea>
        </div>
    )
}

export default Home;