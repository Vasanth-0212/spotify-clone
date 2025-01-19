"use client";
import Image from 'next/image'
import { House, Search, Library } from 'lucide-react';

const Sidebar = () => {
    
    return (
        <div className='h-screen text-white gap-5 bg-gray-950 flex flex-col items-start pt-10 pl-4'>
            <Image
                src="/spotify-logo.png"
                alt="My Image"
                width={150}
                height={100}
            />
            <div className='flex flex-col space-y-4'>
                <div className='font-bold flex space-x-2 mt-4'>
                    <House />
                    <h1>Home</h1>
                </div>
                <div className='font-bold flex space-x-2 mt-4'>
                    <Search />
                    <h1>Search</h1>
                </div>
                <div className='font-bold flex space-x-2'>
                    <Library />
                    <h1>Library</h1>
                </div>
            </div>
            <div className='mt-3'>
                <h1 className='font-sans text-xl'>PLAYLISTS</h1>
            </div>
        </div>
    )
}

export default Sidebar;