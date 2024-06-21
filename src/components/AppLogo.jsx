import Link from "next/link";

export default function AppLogo({
    isWhite=false
}) {
    return (
        <Link href='/' className={`font-bold text-[31px] lg:text-[38px] ${isWhite && 'text-white'}`}>
            CALISA
        </Link>
    )
}