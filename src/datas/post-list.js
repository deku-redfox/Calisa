import BlogPost from "@/model/blog";
import { descriptions } from "./descriptions-list";

export const postList = [
    
    new BlogPost('0', 'Histoire de la creation de CALISA', '20, Juin 2024', '/5.jpg', descriptions[0], 'Deku Redfox', ''),
    new BlogPost('1', 'Que disent-ils du CALISA', '20, Octobre 2024', '/carousel-2.jpg', descriptions[1], 'John Doe'),
    new BlogPost('2', 'Comment faire de la vanerie', '20, Fevrier 2023', '/3.jpg', descriptions[4], 'Maria Doe'),
    new BlogPost('3', 'Comment nous enseignons l\'informatique', '20, Octobre 2023', '/computer-1.jpg', descriptions[0], 'Deku Redfox'),
    new BlogPost('4', 'Le Sport au CALISA', '20, Octobre 2021', '/sport-2.jpg', descriptions[5], 'Deku Redfox'),
    new BlogPost('5', 'Nouveau post simple', '20, Octobre 2021', '/carousel-3.jpg', descriptions[0], 'Deku Redfox'),
    new BlogPost('6', 'Autre post simple', '20, Octobre 2021', '/carousel-1.jpg', descriptions[1], 'Deku Redfox'),

].map(e => e.plainObject)