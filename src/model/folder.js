export default class Folder {

    static tableName = 'Folder'

    static keyCreatedAt = 'updatedAt'
    static keyFolderName = 'folderName'

    constructor(id = '', folderName = '') {
        this.id = id
        this.folderName = folderName
        this.plainObject = { id, folderName }
    }

    static fromJSON({ id, folderName }) {
        return new Folder(id, folderName)
    }
}