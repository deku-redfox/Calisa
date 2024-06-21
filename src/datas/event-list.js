import CenterEvent from "@/model/event";
import { descriptions } from "./descriptions-list";
import { folderList } from "./folder-list";

export const eventList = [

    new CenterEvent('0', 'Journee Internationale des Aveugles 2024', descriptions[1], '', '', 'Hotel la Falaise'),
    new CenterEvent('1', 'Celebration de noel 2024', descriptions[0], '', '', 'Calisa', folderList[2]),
    new CenterEvent('2', 'Celebration du nouvel an 2024', descriptions[5], '', '', 'Calisa', folderList[2]),
    new CenterEvent('3', 'Evenement Simple ', descriptions[5], '', '', 'Centre Culturel'),

].map(e => e.plainObject)