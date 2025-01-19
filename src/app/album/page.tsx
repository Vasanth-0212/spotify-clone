"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { albumsData } from "../../../public/assets/assets";
import { songsData } from "../../../public/assets/assets";
import Image from "next/image";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Clock } from "lucide-react";


const Album = () => {

    const [id, setId] = useState<number | undefined>(undefined);
    useEffect(() => {
        const queryParams = new URLSearchParams(window.location.search);
        const id = queryParams.get('id');
        if (id) {
            setId(Number(id));
        }
    }, []);

    return (
        <div className="absolute top-0 right-0 bg-gray-950 h-screen w-4/5 overflow-y-auto">
            <div className={`m-16 flex gap-5 `} style={{ backgroundColor: id !== undefined ? albumsData[id].bgColor : 'transparent' }}>
                {id !== undefined && <Image src={albumsData[id].image} alt="album" width={200} height={200} className="hidden sm:block"/>}
                <div className="flex flex-col space-y-3">
                    <p className="text-xl text-white font-sans">Playlist</p>
                    <h1 className="text-7xl font-extrabold text-white">{id !== undefined && albumsData[id].name}</h1>
                    <p className="text-white text-xl">{id !== undefined && albumsData[id].desc}</p>
                    <div className="flex space-x-3 text-white items-center">
                        <Image src={'/assets/spotify_logo.png'} alt="spotify" width={50} height={30} />
                        <p className="text-white text-xl">Spotify</p>
                        <div className="flex space-x-4">
                            <p>• 1,234,256 likes</p>
                            <p>• 50 songs</p>
                            <p>• about 2hr 30min</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-4/5 m-10 text-white">
                <Table className="text-gray-400">
                    <TableHeader>
                        <TableRow className="hover:bg-gray-800">
                            <TableHead className="w-10">#</TableHead>
                            <TableHead className="w-50">Title</TableHead>
                            <TableHead className="w-100">Album</TableHead>
                            <TableHead className="w-30"><Clock /></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {songsData.map((song, index) => (
                            <TableRow key={song.id} className="hover:bg-gray-800 cursor-pointer">
                                <TableCell>{index + 1}</TableCell>
                                <TableCell className="flex space-x-4 items-center ">
                                    <Image src={song.image} alt={song.name} width={50} height={50} />
                                    <div className="text-lg text-white">
                                        {song.name}
                                    </div>
                                </TableCell>
                                <TableCell>{id !== undefined && albumsData[id]?.name}</TableCell>
                                <TableCell>{song.duration}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}

export default Album;