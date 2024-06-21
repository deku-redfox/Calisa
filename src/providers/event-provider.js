import CenterEvent from "@/model/event";
import ParseApp from "./server/init";

export default class EventProvider {

    async getAllEvents() {
        const Parse = await ParseApp.initialise()
        const parseObject = Parse.Object.extend(CenterEvent.tableName)
        const query = new Parse.Query(parseObject)

        const results = await query.find();
        
        const eventList = results.map(e => CenterEvent.fromJSON(e))
        return eventList
    }

}