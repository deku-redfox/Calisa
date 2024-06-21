import Link from "next/link";

export default function Btn({
    url = '',
    title = '',
    isDark = false,
    withWhiteBg = false,
    onClick
}) {
    const buttonClass = `border-2 rounded-md py-[0.6rem] px-8 font-semibold text-center text-[15px]
            hover:bg-transparent ${isDark ? 'bg-primary-dark border-primary-dark text-white hover:text-black' 
            : `bg-secondary border-secondary text-white ${withWhiteBg && 'hover:text-black'}`}`;

    if (!onClick)
    return (
        <Link href={url} className={buttonClass}>
                {title.toUpperCase()}
        </Link>
    )

    else
    return (
        <button onClick={onClick} className={buttonClass}>
            {title.toUpperCase()}
        </button>
    )
}