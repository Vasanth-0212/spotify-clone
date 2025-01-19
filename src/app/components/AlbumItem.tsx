"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface AlbumItemProps {
    img: any;
    name: string;
    desc: string;
    id: number;
}

const AlbumItem: React.FC<AlbumItemProps> = ({ img, name, desc, id }) => {
    const router = useRouter();

    return (
        <div key={id} className="flex flex-col items-center space-y-2 rounded-xl p-2 h-[200px] w-[200px] text-white cursor-pointer"
            onClick={() => {
            router.push(`album?id=${id}`)
            }}
        >
            <Image src={img} alt="album" objectFit="cover" />
            <div className="justify-start">
            <h1 className="font-extrabold font-sans text-xl">{name}</h1>
            <h2>{desc}</h2>
            </div>
        </div>
    );
};

export default AlbumItem;