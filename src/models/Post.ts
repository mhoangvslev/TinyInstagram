import * as m from "mithril";
import { getEndpoint, PostResult, PostResultItem } from "../utils";
import { User } from "./User";

export var Post = {
    postTool: "",
    targetPost: "",
    posts: [] as PostResultItem[],

    /**
     * Get all posts of a specific user
     * @param userId 
     */
    getPostsByUser: function (userId: string, limit?: number) {
        const limitParam = limit ? `?limit=${limit}` : "";

        return m.request({
            method: "GET",
            url: getEndpoint() + `_ah/api/tinyinsta/v1/user/${userId}/posts` + limitParam
        }).then((result: any) => {
            Post.posts = (result as PostResult).items;
        }).catch((reason: any) => {
            console.error(reason);
        })
    },

    /**
     * Get all posts from followers of an user
     * @param userId 
     */
    getPostsFromFollowers: function () {
        return m.request({
            method: "GET",
            url: getEndpoint() + `_ah/api/tinyinsta/v1/post/followed/${User.userId}`
        }).then((result: any) => {
            Post.posts = (result as PostResult).items;
        }).catch((reason: any) => {
            console.error(reason);
        })
    },

    /**
     * Get the URL for use in servlet
     */
    getToolURL: function () {
        const servletURL = getEndpoint() + "_servlet/post-util?action=get-upload-url";
        // console.log(servletURL);
        return m.request({
            method: "GET",
            url: servletURL
        }).then((result: any) => {
            Post.postTool = result as string
        }).catch((reason: any) => {
            console.error(reason);
        })
    }
}