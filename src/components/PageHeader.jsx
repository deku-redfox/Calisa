import Link from 'next/link'

const PageHeader = ({title, links = [], page}) => {

	const linksDisplay = links.map((link, index) => {
		return (
			<span key={index}>
				<Link href={link.url}>{link.title}</Link>
				<span className='font-semibold text-lg text-secondary mx-2 align-middle'>&bull;</span>
			</span>
		)
	})

  return (
    <div className="w-full h-[300px] bg-[url(/page-header.jpg)] bg-no-repeat bg-cover bg-center bg-blue-grey relative">

			<div className="absolute cover bg-black/50"></div>

			<div className="absolute cover container h-full w-full flex items-center max-md:justify-center">

			<div className="space-y-4 text-white">
				<p className='text-4xl lg:text-5xl'>{title ?? page}</p>
				<div>
					<>
						<Link href='/'>Home</Link>
						<span className='font-semibold text-lg text-secondary mx-2 align-middle'>&bull;</span>
					</>
					{linksDisplay}
					{/** Customiser comment cette place est separee des autres et autres */}
					<span className='text-gray-200 ml-2'> {page}</span>
				</div>
			</div>

			</div>

    </div>
  )
}

export default PageHeader