export default class CenterEvent {
    static tableName = 'CenterEvent'

    constructor(id = '', title, description = '', startDate, endDate, location = '', linkedFolder) {
        this.id = id
        this.title = title
        this.location = location
        this.description = description
        this.startDate = startDate
        this.endDate = endDate
        this.linkedFolder = linkedFolder
        this.plainObject = {id, title, description, startDate, endDate, location, linkedFolder}

        //Object.defineProperties(this, )
    }

    static fromJSON({ id, title, location, description, startDate, endDate, linkedFolder}) {
        const { folderItem } = linkedFolder.attributes
        return new CenterEvent(id, title, description, startDate, endDate, location, folderItem)
    }
}