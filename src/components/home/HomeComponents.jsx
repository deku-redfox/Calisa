"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowRight,
    faFolder,
    faUser,
    faCalendar,
    faAdd,
    faMinus
} from "@fortawesome/free-solid-svg-icons";
import { motion } from 'framer-motion'

import Btn from "../Btn";

import Carousel1 from '/public/carousel-1.jpg'
import Carousel2 from '/public/carousel-2.jpg'
import Carousel3 from '/public/carousel-3.jpg'
import styles from './gallerySlider.module.css'


export function IntroBox() {
    const imgList = [Carousel1, Carousel2, Carousel3]
    const [img, setImg] = useState(0)

    const handleNextImg = () => {
        if (img < 2) setImg(img + 1)
        else setImg(0)
    }

    return (
        <section className="h-[540px] relative overflow-hidden bg-primary-dark">

            <Image key={img} src={imgList[img]} alt="c" fill className="object-cover animate-scaleIn"
                onAnimationEnd={handleNextImg} />

            <div className="absolute cover bg-black/40">

                <motion.div className="absolute cover flex flex-col max-lg:items-center justify-center
                    lg:max-w-[55%] px-[5.5%] tracking-wider max-lg:text-center"
                    initial={{ opacity: 0, y: 120 }}
                    transition={{ duration: 0.7 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}>

                    <h1 className="text-white">
                        Le centre d&apos;accompagnement et d&apos;assistance des personnes aveugles du Cameroun
                    </h1>
                    <h4 className="mt-7 mb-8 text-gray-300 tracking-widest">
                        Decouvrez un espace dedié à l&apos;autonomie et l&apos;épanouissement des personnes aveugles au Cameroun. Rejoignez-nous dans
                        notre mission de transformation de vies
                    </h4>
                    <div>
                        <Btn title="Contactez-nous" url="whatsapp.com" />
                    </div>

                </motion.div>

            </div>

        </section>
    )
}

export function HomeSection({
    title,
    description,
    isWhite = true,
    id = '',
    children
}) {
    return (
        <section className={`py-14 sm:py-20 overflow-hidden ${isWhite ? 'bg-white' : 'bg-gray-50'}`} id={id}>
            <div className="container w-full relative">

                <div className="flex flex-col w-full items-center">
                    <h2 className="text-primary-dark text-center">{title}</h2>

                    <p className="max-w-[520px] mt-5 mb-10 text-center text-lg font-semibold">{description}</p>

                    {children}
                </div>

            </div>
        </section>
    )
}


export function ActivityBox({
    title,
    icon,
    thumbnail,
    activities = []
}) {
    return (
        <motion.div className="relative h-[300px] sm:h-[240px] md:h-[300px] lg:h-[270px] xl:h-[310px]
            cursor-pointer mb-14 group w-full"
            initial={{ opacity: 0, y: 120 }}
            transition={{ duration: 0.7 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}>

            <Image src={thumbnail} fill alt={`${title} Activity Thumbnail`} />

            <div className="absolute left-10 right-4 -bottom-8 bg-white shadow-lg h-[75px]">
                <div className="-ml-5 flex items-center h-full space-x-3">
                    <FontAwesomeIcon icon={icon} color="white" size="2xl"
                        className="bg-red-light block p-2 rounded-md" />
                    <h4 className="text-primary-dark font-semibold">{title}</h4>
                </div>
            </div>

            <div className="absolute bg-white left-4 right-4 -bottom-8 h-0 py-3 pointer-events-none
            opacity-0 group-hover:opacity-100 group-hover:h-full group-hover:pointer-events-auto"
                style={{
                    transition: "opacity 300ms ease-in-out, height 400ms ease-in-out"
                }}>
                <div className="-ml-5 mb-3 flex items-center space-x-3">
                    <FontAwesomeIcon icon={icon} color="white" size="2xl"
                        className="bg-red-light block p-2 rounded-md" />
                    <h3 className="text-primary-dark font-semibold">{title}</h3>
                </div>
                <ul className="pl-10 pr-4 list-disc">
                    {activities.map((e, i) => (
                        <li key={i} className="text-primary">{e}</li>
                    ))}
                </ul>
            </div>

        </motion.div>
    )
}

export function FaqAccordion() {

    const [index, setIndex] = useState(0)

    return (
        <div className='flex flex-col space-y-3 w-full lg:px-[16%]'>

            <AccordionItem index={0} currentIndex={index} onSelect={(i) => setIndex(i)}
                title='Qui peut bénéficier de nos services ?'>
                Nos services sont destinés aux personnes aveugles de tous âges.
            </AccordionItem>

            <AccordionItem index={1} currentIndex={index} onSelect={(i) => setIndex(i)}
                title="Comment puis-je m'isncrire pour recevoir des services ?">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, alias adipisci.
                Pariatur natus facere numquam ratione fuga sequi dolorum cupiditate.
            </AccordionItem>

            <AccordionItem index={2} currentIndex={index} onSelect={(i) => setIndex(i)}
                title='Organisez-vous des évènements ou des activités spéciales ?'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, alias adipisci.
                Pariatur natus facere numquam ratione fuga sequi dolorum cupiditate.
            </AccordionItem>

            <AccordionItem index={3} currentIndex={index} onSelect={(i) => setIndex(i)}
                title='Comment puis-je faire un don au centre ?'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, alias adipisci.
                Pariatur natus facere numquam ratione fuga sequi dolorum cupiditate.
            </AccordionItem>
        </div>
    )
}

function AccordionItem({
    children,
    currentIndex = 0,
    index = 0,
    title = '',
    onSelect
}) {
    const isSelected = currentIndex === index

    return (
        <div className="group rounded-lg border-2 py-4 px-6 cursor-pointer bg-white duration-500"
            onClick={() => onSelect(index)}>
            <div className="flex justify-between items-center px-2">
                <p className="group-hover:text-primary font-semibold text-lg hover:text-primary duration-100">{title}</p>
                <div className={`p-1 border border-transparent duration-300 ${isSelected && 'group-hover:border-primary group-hover:rotate-90'}`}>
                    <FontAwesomeIcon icon={isSelected ? faMinus : faAdd} className='js-icon' />
                </div>
            </div>
            <p className={`text-iron overflow-hidden duration-300 
        ${isSelected ? 'h-[72px] mt-4 mb-2' : 'h-0'}`}>
                {children}
            </p>
        </div>
    )
}


export function RecentBlogItem({ blogPost }) {

    const { id, thumbnail, title, posterName, createdAt } = blogPost

    return (
        <motion.div className="flex flex-col rounded-lg overflow-hidden shadow-md mx-4 mb-10
        h-[380px] lg:h-[300px] xl:h-[360px] group"
            initial={{ opacity: 0, y: 120 }}
            transition={{ duration: 0.7 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}>

            <Link href='#' className="relative h-full overflow-hidden">
                <Image src={thumbnail} fill alt={title + 'Post thumbnail'}
                    className="group-hover:scale-110 duration-700" />
            </Link>

            <div className="h-[180px] flex flex-col px-6 pt-2 items-start bg-white">

                <div className="flex space-x-6 items-center py-3 text-sm">
                    <div className="flex space-x-2 items-center">
                        <FontAwesomeIcon icon={faUser} className='text-primary' />
                        <span className='text-iron'>{posterName}</span>
                    </div>
                    <div className="flex space-x-2 items-center">
                        <FontAwesomeIcon icon={faCalendar} className='text-primary' />
                        <span className='text-iron'>{createdAt}</span>
                    </div>
                </div>

                <h4 className="text-primary-dark hover:text-blue-500 duration-200 leading-snug">
                    <Link href={`blog/${id}`} className="line-clamp-2">{title}</Link>
                </h4>

            </div>
        </motion.div>
    )
}


export function GallerySlider({ pictures = [] }) {

    return (
        <div className={`w-screen h-[350px] lg:h-[460px] relative`}>
            <div className={styles.leftHoverBarrier}></div>
            <div className={styles.rightHoverBarrier}></div>

            <div className={`flex w-full h-full ${styles.banner}`}>
                <ImageSlide pictures={pictures} />
                <ImageSlide pictures={pictures} />
            </div>
        </div>
    );
}


function ImageSlide({ pictures }) {
    return (
        <div className={`${styles.images}`}>
            {
                pictures.map(({ id, createdAt, data, description, folder }) => (
                    <div className={`${styles.image} group`} key={id}>
                        <Image src={data} fill alt={`Image de ${description}`} />
                        <div className="absolute cover flex flex-col justify-end px-10 pb-6 opacity-0 duration-250
                            group-hover:opacity-100 text-white" style={{
                                backgroundImage: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)'
                            }}>
                            <p className="tracking-wide text-center">{description}</p>
                            <div className="mt-8 flex justify-between w-full">
                                <Link href={`gallery?folder=${folder ? folder.id : '0'}`} className="text-lg hover:text-secondary-light">
                                    <FontAwesomeIcon icon={faFolder} />
                                    <span className="font-semibold mx-3">{folder ? folder.folderName : 'Principal'}</span>
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </Link>
                                <p className="italic">{createdAt}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}