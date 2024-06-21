'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@fortawesome/fontawesome-svg-core/styles.css'
import CustomInput from './CustomInput'
import Btn from './Btn'
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons'
import { postList } from '@/datas/post-list'

const BlogSidebar = () => {

    const [search, setSearch] = useState('')

    const latestPostList = postList.filter(e => e.id < 3)

    const handleOnChange = (e) => {
        setSearch(e.target.value)
    }

    return (
        <div className="dividedPageSide flex flex-col gap-10">

            <div className="sidebarBox flex flex-col">
                <div>
                    <h4>Search Here</h4>
                    <div className="h-1 w-8 bg-red-light rounded-lg mt-1"></div>
                </div>
                <CustomInput strecth bgColor='bg-transparent' placeholder='Search a post...' 
                    className='mt-6 mb-4' onchanged={(e) => handleOnChange(e)}/>
                <Btn title='Search' url={`/blog?query=${search}`} withWhiteBg/>
            </div>

            <div className="sidebarBox">
                <div>
                    <h4>Latest Posts</h4>
                    <div className="h-1 w-8 bg-red-light rounded-lg mt-1"></div>
                </div>
                <div className="space-y-4 mt-6">

                    {
                        latestPostList.map(e => <LatestBlogItem blogItem={e} key={e.id}/>)
                    }

                    
                </div>
            </div>

        </div>
    )
}

export default BlogSidebar

// Customize this blogItem then adapt CSS code
function LatestBlogItem({blogItem}) {

    const { id, title, thumbnail, createdAt } = blogItem

    return (
        <div className="group grid grid-cols-[64px_auto] space-x-4 cursor-pointer">

            <figure className="relative h-[64px] rounded-md overflow-hidden">
                <Image src={thumbnail} fill className='object-cover scale-125 object-center' alt={`thumbnail of ${title}`} />
            </figure>

            <div className="text-iron text-sm">
                <p>
                    <FontAwesomeIcon icon={faCalendarAlt} className='text-primary' />
                    <span className='ml-1'>{createdAt}</span>
                </p>
                <p className="group-hover:text-primary font-bold line-clamp-2 tracking-wider leading-relaxed duration-200">
                    <Link href={`/blog/${id}`} className='block'>{title}</Link>
                </p>
            </div>

        </div>
    )
}