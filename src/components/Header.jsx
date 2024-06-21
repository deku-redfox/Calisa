'use client'

import { Navbar, NavbarBrand, NavbarContent, NavbarItem, 
    NavbarMenuToggle, NavbarMenu, NavbarMenuItem} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { useState } from "react";
import AppLink from "@/model/app-models/link";
import { usePathname } from "next/navigation";
import { DropdownItem, DropdownTrigger } from "@nextui-org/react";
import AppLocale from "@/model/app-models/locale";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faEarth, faEnvelope, faExternalLink, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import AppLogo from "./AppLogo";
import AppDropdown from "./AppDropdown";

export default function Header() {
    return (
        <>
            <TopBar />
            <BottomBar />
        </>
    )
}

function TopBar() {
    return (
        <div className="h-12 bg-primary-darker max-md:hidden text-gray-300">
            <div className="container h-full">
                <div className="h-full flex items-center justify-between text-[14px] tracking-wider">
                    <div>
                        <FontAwesomeIcon icon={faPhoneVolume} className="text-secondary-light"/>
                        <span className="ml-3">Contactez-nous au :</span>
                        <span className="ml-1 mr-6">+237 654789745</span>
                        <Link href='#' className="hover:text-secondary-light">
                            <FontAwesomeIcon icon={faEnvelope} className="text-secondary-light"/>
                            <span className="ml-3">calisa@gmail.com</span>
                        </Link>
                    </div>
                    <LangBtn />
                </div>
            </div>
        </div>
    )
}

function BottomBar() {

    const navLinks = [
        new AppLink('/', 'Accueil'),
        new AppLink('/events', 'Evenements'),
        new AppLink('/gallery', 'Galerie'),
        new AppLink('/blog', 'Blog'),
        new AppLink('/#about-us', 'A Propos'),
        new AppLink('/#faq', 'FAQ'),
    ]

    const menuNavs = [
        ...navLinks,
        new AppLink('https://wa.link/6vk36p', 'Notre Whatsapp', true)
    ]

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const path = usePathname();

    return (
        <Navbar shouldHideOnScroll onMenuOpenChange={setIsMenuOpen} maxWidth="xl" height='86px'
            className="shadow-md bg-white  overflow-hidden">

            <NavbarContent>
                <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="md:hidden"/>

                <NavbarBrand>
                    <AppLogo />
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="space-x-2 hidden md:flex" justify="center">
                {navLinks.map((e, index) => {
                    const isActive = path === e.url
                    return (
                        <NavbarItem key={index}>
                            <Link href={e.url} className={`font-semibold max-lg:text-[15px] tracking-wide
                                hover:text-secondary-light ${isActive && 'text-secondary'}`}>
                                {e.title}
                            </Link>
                        </NavbarItem>
                    )
                })}
            </NavbarContent>

            <NavbarContent justify="end">
                <NavbarItem>
                    <LangBtn isBottomBar/>
                </NavbarItem>
            </NavbarContent>

            <NavbarMenu className="bg-white">
                {menuNavs.map((e, index) => {
                    const isActive = path === e.url
                    return (
                        <NavbarMenuItem key={index}>
                            <Link href={e.url} className={`text-lg font-semibold tracking-wide ${isActive && 'text-red-light'}`}>
                                {e.title}
                            </Link>
                        </NavbarMenuItem>
                    )
                })}
            </NavbarMenu>

            <Link href='https://wa.link/6vk36p' className="absolute right-0 xl:-right-[50px] z-50 top-0 bottom-0 w-[160px] lg:w-[190px] xl:w-[250px] flex items-center bg-red-700
                justify-center text-white hover:bg-green-700 cursor-pointer duration-400 max-md:hidden tracking-wide" 
                style={{clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0 100%)'}}>
                <p className="ml-4">
                    <span className="lg:text-lg font-semibold mr-3">Whatsapp</span>
                    <FontAwesomeIcon icon={faExternalLink} size="lg"/>
                </p>
            </Link>
        </Navbar>
    )
}

function LangBtn({isBottomBar = false}) {
    const locales = [
        new AppLocale('en', 'US', 'English'),
        new AppLocale('fr', 'FR', 'Français'),
    ]

    return (
        <AppDropdown
            initialValue={locales[1].localeName}
            ariaLabel="Website Language"
            triggerBuilder={(currentValue) => (
                <DropdownTrigger className={`${isBottomBar && 'lg:hidden'}`}>
                    <Button href="#" variant="solid" className={isBottomBar ? 'bg-grey-soft' : 'bg-transparent'}>
                        <div className="flex items-center space-x-3 font-semibold">
                            <FontAwesomeIcon icon={faEarth} className={isBottomBar ? 'text-primary' : 'text-secondary-light'}/>
                            <span className={`${!isBottomBar && 'text-gray-300'}`}>
                                {locales.find(e => e.localeName === currentValue).countryCode}
                            </span>
                            <FontAwesomeIcon icon={faChevronDown} className={`${!isBottomBar && 'text-gray-300'}`}/>
                        </div>
                    </Button>
                </DropdownTrigger>
            )}>

            {locales.map(e => (
                    <DropdownItem key={e.localeName}>
                        {e.localeName}
                    </DropdownItem>))}

        </AppDropdown>
    )
}