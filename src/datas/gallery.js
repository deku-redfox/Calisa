import Picture from "@/model/picture";
import { folderList } from "./folder-list";
import { descriptions } from "./descriptions-list";

export const galleryPictures = [
    
    new Picture('0', '20, octobre 2024', '/sport-1.jpg', descriptions[0], folderList[3]),
    new Picture('1', '20, octobre 2024', '/sport-2.jpg', descriptions[1], folderList[3], true),
    new Picture('2', '20, octobre 2024', '/sport-3.webp', descriptions[0], folderList[3], true),
    new Picture('3', '20, octobre 2024', '/work-1.jpg', descriptions[3], folderList[0]),
    new Picture('4', '20, octobre 2024', '/work-2.jpg', descriptions[0], folderList[0], true),
    new Picture('5', '20, octobre 2024', '/noel-1.webp', descriptions[2], folderList[4]),
    new Picture('6', '20, octobre 2024', '/noel-2.jpg', descriptions[0], folderList[4]),
    new Picture('7', '20, octobre 2024', '/noel-3.jpg', descriptions[3], folderList[4]),
    new Picture('8', '20, octobre 2024', '/noel-4.jpg', descriptions[0], folderList[4], true),
    new Picture('9', '20, octobre 2024', '/5.jpg', descriptions[0], folderList[0], true),
    new Picture('10', '20, octobre 2024', '/6.jpg', descriptions[2], folderList[0], true),
    new Picture('11', '20, octobre 2024', '/computer-1.jpg', descriptions[1], folderList[2]),
    new Picture('12', '20, octobre 2024', '/computer-2.jpeg', descriptions[3], folderList[2]),

].map(e => e.plainObject)