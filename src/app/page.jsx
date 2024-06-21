import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Chip } from "@nextui-org/chip";
import { 
  faBroom, 
  faCheck, 
  faComputer, 
  faRunning 
} from "@fortawesome/free-solid-svg-icons";

import Btn from "@/components/Btn";

import { 
  IntroBox,
  HomeSection,
  ActivityBox,
  GallerySlider,
  FaqAccordion,
  RecentBlogItem 
} from "@/components/home/HomeComponents";
import { galleryPictures } from "@/datas/gallery";
import { postList } from "@/datas/post-list";


export default function Page() {

  const pictures = galleryPictures.filter(e => e.topImage)
  const recentBlogList = postList.filter(e => e.id <= 2)

  return (
    <main>
      
      <IntroBox />

      <section id="about-us" className="py-20">

        <div className="container">

        <div className="flex items-center lg:space-x-[5.5%]">

          <div className="flex-1 flex flex-col max-md:items-center max-md:text-center">
            <h2 className="text-primary-dark mb-6">A Propos de Nous</h2>
            <p className="leading-relaxed tracking-wider">
              Au <b>CALISA</b> <i>(Centre d&apos;alphabetisation et d&apos;insertion sociale des aveugles)</i> nous travaillons
              pour améliorer la qualité de vie des personnes aveugles. Avec notre équipe de professionnels passionnés et dévoués, nous
              croyons en un monde où chaque personne aveugle peut vivre pleinement et independamment.
            </p>
            <div className="flex flex-wrap mb-8 mt-4 max-md:justify-center">
              <Chip startContent={<FontAwesomeIcon icon={faCheck} className="mr-2"/>} 
                variant="flat" color="success" className="px-3 py-4 text-[16px] mr-4 mb-2">
                Formation Professionnelle des aveugles
              </Chip>
              <Chip startContent={<FontAwesomeIcon icon={faCheck} className="mr-2"/>} 
                variant="flat" color="primary" className="px-3 py-4 text-[16px] mr-4 mb-2">
                Leurs fournir une education sportive
              </Chip>
              <Chip startContent={<FontAwesomeIcon icon={faCheck} className="mr-2"/>} 
                variant="flat" color="warning" className="px-3 py-4 text-[16px] mr-4 mb-2">
                Favoriser l&apos;insertion sociale des aveugles
              </Chip>
            </div>
            <div>
              <Btn title="Lire Plus" url='/blog/0' isDark/>
            </div>
          </div>

          <figure className="relative flex-1 max-md:hidden min-h-[440px]">
            <Image src='/president-cut.png' fill alt="About Section Image" className='object-contain'/>
          </figure>

          </div>

        </div>

      </section>

      <HomeSection title='Nos Activites' isWhite={false}
        description='Nous faisons tout pour le bohneur et l epanouissement des aveugles au cameroun'>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full sm:gap-8 max-sm:px-8 ">

            <ActivityBox title='Formation Professionnelle' icon={faComputer} thumbnail='/computer-1.jpg'
              activities={['La filature', 'Informatique', 'Ecriture braille', 'Massage corporel']}/>
            <ActivityBox title='Sports' icon={faRunning} thumbnail='/sport-1.jpg'
              activities={['Le Tor ball', 'Le Goal ball', 'Le ceci foot',]}/>
            <ActivityBox title='Travail Manuel' icon={faBroom} thumbnail='/work-1.jpg'
              activities={['Vannerie', 'Tissage des perles', 'etc']}/>

          </div>

      </HomeSection>

      <HomeSection title='Explorez nos Moments Capturés'
        description='Plongez dans notre quotidien à travers ces images.'>

        <GallerySlider pictures={pictures}/>

        <div className="flex justify-center mt-8 md:hidden">
          <Btn title="Regarder la Gallery" url="/gallery?folder=0" isDark/>
        </div>

      </HomeSection>

      <HomeSection title='Questions Fréquentes' id="faq"
        description='On nous pose generalement ces questions'>

        <FaqAccordion />

      </HomeSection>

      <HomeSection title='Posts Recents' isWhite={false}
        description='Decouvrez les témoignages de nos bénéficiaires et apprenez comment notre centre transforme des vies'>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-[5.5%] md:px-0 xl:px-[5.5%]">
          {
            recentBlogList.map(post => <RecentBlogItem key={post.id} blogPost={post}/>)
          }
        </div>

      </HomeSection>

      <section>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d980.6423840862814!2d9.803358158111497!3d4.096588524304866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10610f015645f883%3A0x1b6dc40452c1baff!2sR%C3%A9sidence%20Universitaire%20de%20PK17!5e0!3m2!1sfr!2scm!4v1718455337326!5m2!1sfr!2scm" 
          style={{border: '0'}} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-[300px] md:h-[450px]">
        </iframe>
      </section>

    </main>
  )
}