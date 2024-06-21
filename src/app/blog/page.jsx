import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'
import BlogSidebar from '@/components/BlogSidebar'
import AppLink from '@/model/app-models/link'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import Btn from '@/components/Btn'
import PageHeader from '@/components/PageHeader'
import PaginationBar from '@/components/PaginationBar'
import { postList } from '@/datas/post-list'

export default function Blog({searchParams}) {

	const postItemLimit = 5
	const pageParam = searchParams.page ?? '1'
	const queryParam = searchParams.query ?? ''

	const currentPage = Number(pageParam)

	const currentPostList = postList.filter(e => 
		(e.id < currentPage * postItemLimit && e.id >= postItemLimit * (currentPage-1)) &&
		(e.title.includes(queryParam)))

	const pageCount = Math.ceil(postList.length / postItemLimit)

	return (
		<main>

			<PageHeader title='Blog' links={[new AppLink('/Blog', 'blog')]} />

			<section className='py-20 bg-gray-50'>

				<div className="container">

					<div className="dividedPage">

						<div className="dividedPageMain flex flex-col gap-12">

							{
								currentPostList.map(e => <BlogItem blogPost={e} key={e.id}/>)
							}

							<PaginationBar pageCount={pageCount} 
								baseLink={`/blog?${queryParam && `query=${queryParam}`}&`} currentPage={currentPage} />
						</div>

						<BlogSidebar />

					</div>

				</div>

			</section>

		</main>
	)
}


function BlogItem({ blogPost }) {

	const { id, title, createdAt, thumbnail, description, posterName } = blogPost

	return (
		<div className="bg-white flex flex-col md:flex-row rounded-md shadow-md overflow-hidden 
			h-[620px] md:h-[280px] xl:h-[320px]">
			<Link href={`/blog/${id}`} className="relative h-[350px] md:flex-[0.8]">
				<Image src={thumbnail} fill className='object-cover object-center' 
					alt={`thumbnail of ${title}`} />
			</Link>

			<div className="flex-1 flex flex-col px-4 md:px-8  py-6">

				<h3 className="text-primary-darker hover:text-primary duration-200 leading-snug line-clamp-1">
					<Link href={`/blog/${id}`}>{title}</Link>
				</h3>

				<div className="flex space-x-4 items-center mt-3 mb-1">
					<div className="flex space-x-2 items-center">
						<FontAwesomeIcon icon={faUser} className='text-secondary-light' />
						<span className='text-iron'>{posterName}</span>
					</div>
					<div className="flex space-x-2 items-center">
						<FontAwesomeIcon icon={faCalendarAlt} className='text-secondary-light' />
						<span className='text-iron'>{createdAt}</span>
					</div>
				</div>

				<div className="titleUnderline mb-4"></div>

				<p className="mb-auto text-iron line-clamp-3 xl:line-clamp-4">
					{description}
				</p>

				<div className="mt-2">
					<Btn title='Lire Plus' url={`/blog/${id}`} isDark/>
				</div>

			</div>

		</div>
	)
}