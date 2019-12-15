import m from "mithril";
import { getEndpoint, UserResult, UserResultItem } from "../utils";

export var User = {
    userId: "", // mon Id
    userTool: "",
    followers: [] as UserResultItem[],
    following: [] as UserResultItem[],

    /**
     * Retrieve all users
     */
    getFollowers: function () {
        const apiURL: string = getEndpoint() + `_ah/api/tinyinsta/v1/user/${User.userId}/followers`;
        return m.request({
            method: "GET",
            url: apiURL,
            //data: jsonData,
            withCredentials: false // use cookies?,
        }).then(function (result: any) {
            User.followers = (result as UserResult).items;
        }).catch((reason: any) => {
            console.error(reason);
        })
    },

    /**
     * Retrieve all users
     */
    getFollowing: function () {
        const apiURL: string = getEndpoint() + `_ah/api/tinyinsta/v1/user/${User.userId}/following`;
        return m.request({
            method: "GET",
            url: apiURL,
            //data: jsonData,
            withCredentials: false // use cookies?,
        }).then(function (result: any) {
            User.following = (result as UserResult).items;
        }).catch((reason: any) => {
            console.error(reason);
        })
    },

    /**
     * User likes a post
     * @param postId post ID
     */
    like: function (postId: number) {
        return m.request({
            method: "PUT",
            url: getEndpoint() + `_ah/api/tinyinsta/v1/user/${User.userId}/like/${postId}`,
            //data: jsonData,
            withCredentials: false // use cookies?,
        }).then(function (result: any) {

        }).catch((reason: any) => {
            console.error(reason);
        })
    },

    /**
     * User likes a post
     * @param postId post ID
     */
    unlike: function (postId: number) {
        return m.request({
            method: "PUT",
            url: getEndpoint() + `_ah/api/tinyinsta/v1/user/${User.userId}/unlike/${postId}`,
            withCredentials: false // use cookies?,
        }).then(function (result: any) {

        }).catch((reason: any) => {
            console.error(reason);
        })
    },

    /**
     * User follows another User
     * @param userId target ID
     */
    follow: function (userId: number) {
        return m.request({
            method: "PUT",
            url: getEndpoint() + `_ah/api/tinyinsta/v1/user/${User.userId}/follow/${userId}`,
            //data: jsonData,
            withCredentials: false // use cookies?,
        }).then(function (result: any) {

        }).catch((reason: any) => {
            console.error(reason);
        })
    },

    /**
     * User follows another User
     * @param userId target ID
     */
    unfollow: function (userId: number) {
        return m.request({
            method: "PUT",
            url: getEndpoint() + `_ah/api/tinyinsta/v1/user/${User.userId}/unfollow/${userId}`,
            //data: jsonData,
            withCredentials: false // use cookies?,
        }).then(function (result: any) {

        }).catch((reason: any) => {
            console.error(reason);
        })
    },

    /**
     * Get the URL for use in servlet
     */
    getToolURL: function () {
        const servletURL = getEndpoint() + "_servlet/user-util?action=get-upload-url";
        // console.log(servletURL);
        return m.request({
            method: "GET",
            url: servletURL
        }).then((result: any) => {
            User.userTool = result as string
        }).catch((reason: any) => {
            console.error(reason);
        })
    },

    /**
     * Find an user by either name, username or both. If empty, return all users
     * @param username 
     * @param name 
     * @param limit 
     */
    find: function (userId?: string, username?: string, name?: string, limit?: number) {

        var params ="";
        if (userId) {
            params = `?userId=${userId}`;
        } else {
            params = (limit) ? `?limit=${limit}` : "?";
            if (username && name) {
                params += `username=${username}&name=${name}`;
            } else if (username) {
                params += `username=${username}`;
            } else if (name) {
                params += `name=${name}`;
            } else if (limit == undefined) {
                params = "";
            }
        }

        console.log(params);

        return m.request({
            method: "GET",
            url: getEndpoint() + "_ah/api/tinyinsta/v1/user/find" + params
        }).catch((reason: any) => {
            console.error(reason);
        })
    },

    /**
     * Login an user by gettng his userId. userId will be stored in User.userId
     */
    doLogin: function (userName: string) {
        const servletURL = getEndpoint() + "_ah/api/tinyinsta/v1/user/find?username=" + userName;
        console.log(servletURL);
        return m.request({
            method: "GET",
            url: servletURL
        }).then((result: any) => {
            User.userId = (result as UserResult).items[0].id;
        }).catch((reason: any) => {
            console.error(reason);
        })
    }
}