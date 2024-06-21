import '@fortawesome/fontawesome-svg-core/styles.css'
import BlogSidebar from '@/components/BlogSidebar'
import BlogPost from '@/model/blog'
import PageHeader from '@/components/PageHeader'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { postList } from '@/datas/post-list'
import { descriptions } from '@/datas/descriptions-list'

// export default async function RemoteMdxPage() {
//   // MDX text - can be from a local file, database, CMS, fetch, anywhere...
//   const res = await fetch('https://...')
//   const markdown = await res.text()
//   return <MDXRemote source={markdown} />
// }

export default function Blog({params}) {

	const postId = params.id
	const currentBlogPost = postList.find(e => e.id == postId)

	return (
		<main>

			<PageHeader page={currentBlogPost.title} />

			<section className='py-20 bg-white'>

				<div className="container">

					<div className="dividedPage">

						<div className="dividedPageMain xl:pr-12">

							<div className="w-full relative h-[330px] md:h-[430px] xl:h-[470px]">
								<Image src={currentBlogPost.thumbnail} fill alt={`Thumbnail of ${currentBlogPost.title} post`} />
							</div>

							<div className="flex space-x-4 items-center mt-7 mb-1">
								<div className="flex space-x-2 items-center">
									<FontAwesomeIcon icon={faUser} className='text-secondary-light' />
									<span className='text-iron'>{currentBlogPost.posterName}</span>
								</div>
								<div className="flex space-x-2 items-center">
									<FontAwesomeIcon icon={faCalendarAlt} className='text-secondary-light' />
									<span className='text-iron'>{currentBlogPost.createdAt}</span>
								</div>
							</div>

							<div className="titleUnderline mb-6"></div>

							<div className="space-y-4 tracking-wide">
								<p className="tracking-wide">
									{descriptions[2]}
								</p>
								<h3>C'est quoi le Calisa ?</h3>
								<p className="tracking-wide">
									{descriptions[1]}
								</p>
								<h3>Quelle est l'histoire de sa creation ?</h3>
								<p className="tracking-wide">
									{descriptions[3]} {descriptions[3]}
								</p>
								<p className="tracking-wide">
									{descriptions[4]}
								</p>
								<h3>Conclusion</h3>
								<p className="tracking-wide">
									{descriptions[2]}
								</p>
							</div>

						</div>

						<BlogSidebar />

					</div>

				</div>

			</section>

		</main>
	)
}