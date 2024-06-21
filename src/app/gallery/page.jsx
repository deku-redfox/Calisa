'use client'

import PageHeader from "@/components/PageHeader"
import { folderList } from "@/datas/folder-list"
import { galleryPictures } from "@/datas/gallery"
import AppLink from "@/model/app-models/link"
import { faFolder } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react"
import Image from "next/image"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { useState } from "react"

export default function GalleryPage() {

	const searchParams = useSearchParams()
	const folderParam = searchParams.get('folder') ?? '0'

	const currentFolder = folderList.find(e => e.id === folderParam)

	const allFolders = folderList

	const galleryPics = galleryPictures.filter(e => e.folder.id === currentFolder.id)

	const { isOpen, onOpen, onOpenChange } = useDisclosure();
	const [ currentPic, setCurrentPic ] = useState(galleryPics[0])

	const handleOnPic = (picture) => {
		setCurrentPic(picture)
		onOpen()
	}

	return (
		<main>

			<PageHeader title='Galerie' links={[new AppLink('/gallery', 'Galerie'),
			new AppLink(`/gallery?folder=${currentFolder.id}`, currentFolder.folderName)]} />

			<section className="py-20">

				<div className="container">

					<div className="dividedPage">

						<div className="dividedPageMain">
							<div className="columns-3xs gap-6">
								{
									galleryPics.map((picture) => (
										<Image key={picture.id} width={1000} height={1000} src={picture.data} alt={`Picture from ${currentFolder} Folder`}
												className="relative h-auto w-full  cursor-pointer mb-7 rounded-md hover:scale-105 duration-300 shadow-lg" 
												onClick={() => handleOnPic(picture)} />
									))
								}
								<Modal
									isOpen={isOpen}
									onOpenChange={onOpenChange}
									scrollBehavior='outside'
									size="xl">
									<ModalContent>
										{(onClose) => (
											<>
												<ModalHeader>
													Photo de: 
													<span className="ml-2 text-primary">{currentFolder.folderName}</span>
												</ModalHeader>
												<ModalBody>
													<Image width={1500} height={1500} src={currentPic.data} alt={`Picture from ${currentFolder.folderName} Folder`}
														className="relative h-auto" />
													<p className="italic">
														Photo prise le: <b>{currentPic.createdAt}</b>
													</p>
													<p className="mt-2 tracking-wide">{currentPic.description}</p>
												</ModalBody>
												<ModalFooter>
													<Button color="secondary" variant="light" onPress={onClose}>
														Close
													</Button>
												</ModalFooter>
											</>
										)}
									</ModalContent>
								</Modal>
							</div>
						</div>

						<GallerySidebar folderList={allFolders} currentFolderId={currentFolder.id} />
					</div>

				</div>

			</section>

		</main>
	)

}


function GallerySidebar({ folderList = [], currentFolderId }) {

	return (
		<div className="dividedPageSide">

			<div className="sidebarBox">
				<div>
					<h4>Dossiers</h4>
					<div className="titleUnderline"></div>
				</div>
				<ul className="mt-5">
					{
						folderList.map(({ id, folderName }) => {
							const isCurrent = currentFolderId === id;

							return (
								<li key={id}>
									<Link href={`/gallery?folder=${id}`} className={`flex py-2 space-x-3 hover:text-primary-300
														${isCurrent && 'text-primary font-semibold'}`}>
										<FontAwesomeIcon icon={faFolder} size="lg" className="pt-[2px]"/>
										<span>{folderName}</span>
									</Link>
								</li>
							)
						})
					}
				</ul>
			</div>

		</div>
	)

}