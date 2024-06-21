import ParseFile from "./parse-models/parse-file"

export default class Picture {
    static tableName = 'Picture'

    static keyCreatedAt = 'updatedAt'
    static keyFolder = 'folder'

    constructor(id = '', createdAt, data, description = '', folder, topImage = false) {
        this.id = id
        this.createdAt = createdAt
        this.data = data
        this.description = description
        this.folder = folder
        this.topImage = topImage
        this.plainObject = { id, createdAt, data, description, folder: this.folder, topImage }
    }

    static fromJSON({ id, updatedAt, data, description, folder, topImage }) {
        const dataUrl = ParseFile.fromJSON(data)
        const folderItem = folder.attributes;
        return new Picture(id, updatedAt, dataUrl, description, folderItem, topImage)
    }
}