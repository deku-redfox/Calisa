import ParseFile from "./parse-models/parse-file"

export default class BlogPost {
    static tableName = 'BlogPost'

    static keyCreatedAt = 'updatedAt'
    static keyTitle = 'title'
    static keyContent = 'content'

    constructor(id = '', title, createdAt, thumbnail, description = '', posterName, content) {
        this.id = id
        this.title = title
        this.createdAt = createdAt
        this.thumbnail = thumbnail
        this.description = description
        this.posterName = posterName
        this.content = content
        this.plainObject = { id, title, createdAt, thumbnail, description, posterName, content }

        //Object.defineProperties(this, )
    }

    static fromJSON({ id, title, updatedAt, thumbnail, description, posterName, content }) 
    {
        const thumbUrl = ParseFile.fromJSON(thumbnail)
        return new BlogPost(id, title, updatedAt, thumbUrl, description, posterName, content)
    }
}