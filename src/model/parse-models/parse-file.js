export default class ParseFile {
    
    static keyUrl = '_url'
    static keyName = 'name'
    static keyFile = 'file'

    constructor(file, url, name) {
        this.file = file
        this.url = url
        this.name = name
    }

    static fromJSON({file, name, _url}) {
        return new ParseFile(file, name, _url)
    }
}