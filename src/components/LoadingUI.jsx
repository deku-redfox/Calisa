import Image from "next/image";

export default function LoadingUI() {
    return (
        <div className="z-[100] fixed cover bg-primary flex items-center justify-center">
            <Image src='/loading.gif' width={180} height={200} alt="Loading Image Gif" />
        </div>
    )
}