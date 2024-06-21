'use client'

import AppDropdown from "@/components/AppDropdown";
import Btn from "@/components/Btn";
import PageHeader from "@/components/PageHeader";
import { eventList } from "@/datas/event-list";
import AppLink from "@/model/app-models/link";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, DropdownItem, DropdownTrigger, Modal, ModalBody, ModalContent, ModalFooter, useDisclosure } from "@nextui-org/react";
import { useState } from "react";

export default function EventPage() {

  const eventValues = [
    { value: 'upcoming', title: 'A venir' },
    { value: 'ongoing', title: 'En cours' },
    { value: 'happened', title: 'Deja passes' },
  ]

  const centerEventList = eventList

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [currentEvent, setCurrentEvent] = useState(centerEventList[0])

  const handleOnEvent = (event) => {
    setCurrentEvent(event)
    onOpen()
  }

  return (
    <main>

      <PageHeader title='Evenements' links={[new AppLink('/events', 'Evenements')]} />

      <section className="bg-gray-50 py-20">

        <div className="container">

          <div className="flex items-center text-2xl text-primary-dark">
            <p>Montrant 25 Evenements de : </p>
            <AppDropdown
              initialValue={eventValues[0].value}
              ariaLabel="Event type"
              triggerBuilder={(currentValue) => (
                <DropdownTrigger>
                  <p className="cursor-pointer ml-2 font-semibold">
                    <span>{eventValues.find(e => e.value === currentValue).title}</span>
                    <FontAwesomeIcon icon={faChevronDown} className=" text-sm align-middle ml-1" />
                  </p>
                </DropdownTrigger>
              )}
            >
              {eventValues.map(e => (
                <DropdownItem key={e.value}>
                  {e.title}
                </DropdownItem>))}
            </AppDropdown>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 md:gap-8">
            {
              centerEventList.map(event => (
                <EventItem key={event.id} centerEvent={event} handleOnEvent={()=> handleOnEvent(event)} />
              ))
            }
          </div>

        </div>

        <Modal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          scrollBehavior='outside'>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalBody>
                  <h3 className="text-primary-dark mt-3">{currentEvent.title}</h3>
                  <div className="mt-2">
                    <i className="block">
                      Jour de l&apos;evenement: <b>20, Octobre 2024</b>
                    </i>
                    <i className="mt-1 block">
                      Location: <b>{currentEvent.location}</b>
                    </i>
                  </div>
                  <p className="mt-3">{currentEvent.description}</p>
                  {
                    currentEvent.linkedFolder
                    && (
                      <div className="mt-5 flex justify-center w-full">
                        <Btn url={`/gallery/?folder=${currentEvent.linkedFolder.id}`} title="Voir les photos de l'evenement" isDark />
                      </div>
                    )
                  }
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

      </section>

    </main>
  )
}


function EventItem({
  centerEvent,
  handleOnEvent
}) {

  const { title, description } = centerEvent

  return (
    <div className="bg-white p-4 cursor-pointer max-md:mb-6 h-[240px] shadow-sm">

      <div className="grid grid-cols-[112px_auto] space-x-5 h-full">

        <div className="h-full">
          <div className="w-full h-[80px] bg-yellow-400 relative flex flex-col items-center justify-center
                        text-primary-darker space-y-1 pt-2">
            <p className="text-xl font-bold">21</p>
            <p className="text-sm">Oct</p>
            <div className="absolute flex justify-between w-full left-0 top-0 px-2">
              <div className="h-3 w-3 bg-primary-darker rounded-full"></div>
              <div className="h-3 w-3 bg-primary-darker rounded-full"></div>
            </div>
          </div>
          <div className="w-full h-[40px] bg-primary-darker flex items-center justify-center">
            <p className="text-white">2024</p>
          </div>
        </div>

        <div className="flex flex-col items-start">
          <h4 className="font-semibold text-primary-darker">{title}</h4>
          <p className="tracking-wide line-clamp-3 xl:line-clamp-4 mt-3">{description}</p>
          <div className="mt-auto">
            <Btn title="Lire Plus" onClick={handleOnEvent} isDark/>
          </div>
        </div>

      </div>

    </div>
  )

}