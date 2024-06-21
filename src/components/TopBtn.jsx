'use client'

import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

export default function TopBtn() {

    const [active, setActive] = useState(false);

    const handleClick = () => {
        window.scrollTo({
            top: 0
        })
    }

    useEffect(()=> {

        const handleOnScroll = ()=> {
            if (window.scrollY >= 100) {
                setActive(true)
            } else {
                setActive(false)
            }
        }

        window.addEventListener('scroll', handleOnScroll)

        return ()=> {
            window.removeEventListener('scroll', handleOnScroll)
        }
    }, [])

    return (
        <button onClick={handleClick} type="button" className={`fixed bg-secondary bottom-14 right-0 duration-500 z-50
            flex items-center justify-center w-10 h-10 rounded-tl-md rounded-bl-md shadow-sm shadow-secondary-light
            ${active ? 'translate-x-0 opacity-100' : 'opacity-0 translate-x-full'}`}>
                <FontAwesomeIcon icon={faChevronUp} color="white"/>
        </button>
    )
    
}