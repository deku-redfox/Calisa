import BlogPost from "@/model/blog";
import ParseApp from "./server/init";

export default class PostProvider {

    async getSomePosts(pageParam, searchValue) {
        const Parse = await ParseApp.initialise()
        const parseObject = Parse.Object.extend(BlogPost.tableName)

        const queryLimit = 5;
        const query = new Parse.Query(parseObject).exclude(BlogPost.keyContent).limit(queryLimit)
            .descending(BlogPost.keyCreatedAt).skip(queryLimit * (pageParam ? Number(pageParam)-1 : 0))
        
        if (searchValue) {
            query.fullText(BlogPost.keyTitle, searchValue)
        }

        const results = await query.find();
        
        const postList = results.map(e => BlogPost.fromJSON(e))
        return postList
    }

    async getCurrentPost(postId) {
        const Parse = await ParseApp.initialise()
        const query = new Parse.Query(BlogPost.tableName)

        const result = await query.get(postId);
        
        const post = BlogPost.fromJSON(result)
        return post
    }

    async getTotalCount() {
        const Parse = await ParseApp.initialise()
        const query = new Parse.Query(BlogPost.tableName)

        return query.count()
    }

}