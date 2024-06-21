import Link from "next/link";
import AppLogo from "./AppLogo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocation, faLocationDot, faLocationPin, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
        <footer className="bg-primary-darker pt-20 pb-14 px-12">
            <div className='container'>
        
                <div className="flex w-full text-white justify-between max-md:flex-wrap max-md:space-y-6">

                    <div className="flex flex-col items-start -translate-y-6 w-full md:w-[35%] lg:w-[40%]">
                        <AppLogo isWhite />
                        <p className="tracking-wide leading-relaxed mt-2 mb-3">
                            Decouvrez un espace dedié à l'autonomie et l'épanouissement des personnes aveugles au Cameroun. Rejoignez-nous dans
                            notre mission de transformation de vies
                        </p>
                        <p>
                            <FontAwesomeIcon icon={faLocationDot} size="lg" className="text-secondary-light"/>
                            <i className="ml-4">
                                Douala, Cameroon - <b>PK17</b> vers la residence universitaire
                            </i>
                        </p>
                    </div>

                    <div className="flex flex-col max-sm:w-full">
                        <div>
                            <h4>Liens Rapides</h4>
                            <div className="h-1 w-8 bg-secondary rounded-lg mt-1"></div>
                        </div>
                        <ul className="space-y-3 mt-4">
                            <li><a href="/" className="hover:text-secondary duration-300">Accueil</a></li>
                            <li><a href="/gallery" className="hover:text-secondary duration-300">Galerie</a></li>
                            <li><a href="/events" className="hover:text-secondary duration-300">Evenements</a></li>
                            <li><a href="/blog" className="hover:text-secondary duration-300">Blog</a></li>
                        </ul>
                    </div>

                    <div className="flex flex-col">
                        <div>
                            <h4>Contacts</h4>
                            <div className="h-1 w-8 bg-secondary rounded-lg mt-1"></div>
                        </div>
                        <ul className="space-y-3 mt-4">
                            <li>
                                <a href='https://wa.link/6vk36p' className="hover:text-green-500 duration-300">
                                    <FontAwesomeIcon icon={faWhatsapp} className="text-green-500"/>
                                    <span className="ml-3">WhatsApp: 670216563</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-blue-500 duration-300">
                                    <FontAwesomeIcon icon={faPhone} className="text-blue-500"/>
                                    <span className="ml-3">Tel: +237 654789745</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-red-500 duration-300">
                                    <FontAwesomeIcon icon={faEnvelope} className="text-secondary-light"/>
                                    <span className="ml-3">Email: calisa@gmail.com</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>

            </div>
        </footer>
    )
}