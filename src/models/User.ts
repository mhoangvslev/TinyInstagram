import m from "mithril";
import { String } from "typescript-string-operations";

export var User = {
    users: [],
    followers: [],
    following: [],

    /**
     * Create user
     */

    /**
     * Retrieve all users
     */
    getUsers: function () {
        return m.request({
            method: "GET",
            url: "https://tinyinstagram.appspot.com/_ah/api/tinyinsta/v1/user/all",
            //data: jsonData,
            withCredentials: false // use cookies?,
        }).then(function (result: any) {
            console.log(typeof (result))
            User.users = result.items;
        }).catch((reason: any) => {
            console.log(reason);
        })
    },

    /**
     * Retrieve all users
     */
    getFollowers: function (userId: any) {
        const apiURL: string = "https://tinyinstagram.appspot.com/_ah/api/tinyinsta/v1/user/{userId}/followers";
        return m.request({
            method: "GET",
            url: String.Format(apiURL, userId),
            //data: jsonData,
            withCredentials: false // use cookies?,
        }).then(function (result: any) {
            console.log(typeof (result))
            User.followers = result.items;
        }).catch((reason: any) => {
            console.log(reason);
        })
    }
}