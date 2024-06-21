import Picture from "@/model/picture";
import ParseApp from "./server/init";
import SortType from "@/model/app-models/sort-type";
import Folder from "@/model/folder";

export default class GalleryProvider {

    async getPictures(folderId, sortype = SortType.dateAsc) {
        const Parse = await ParseApp.initialise()
        const parseObject = Parse.Object.extend(Picture.tableName)
        const query = new Parse.Query(parseObject)

        if (folderId) {
            const folder = Parse.Object.extend(Folder.tableName)
            folder.id = folderId
            query.equalTo(Picture.keyFolder, folder)

        } else {
            query.doesNotExist(Picture.keyFolder)
        }

        const sortedQuery = this.sort(query, sortype)
        const results = await sortedQuery.find();
        
        const picList = results.map(e => Picture.fromJSON(e))
        return picList
    }

    async getFolders(currentFolderName) {
        const Parse = await ParseApp.initialise()
        const query = new Parse.Query()
        query.ascending(Folder.keyFolderName)
        query.notEqualTo(Folder.keyFolderName, currentFolderName)

        const results = await query.find();
        
        const folderList = results.map(e => Folder.fromJSON(e))
        return folderList
    }

    sort(query, sortValue) {
        if (sortValue === SortType.dateAsc) {
            query.ascending(Picture.keyCreatedAt)

        } else {
            query.descending(Picture.keyCreatedAt)
        }
        return query;
    }

}