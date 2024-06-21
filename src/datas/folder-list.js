import Folder from "@/model/folder";

export const folderList = [

    new Folder('0', 'Principal'),
    new Folder('1', 'Nouvel an 2024'),
    new Folder('2', 'Fete de paques 2023'),
    new Folder('3', 'Competitions de Cecifoot'),
    new Folder('4', 'Autres'),

].map(e => e.plainObject)