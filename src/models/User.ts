import m from "mithril";
import { String } from "typescript-string-operations";

//const endpointURL = "https://tinyinstagram.appspot.com/"
const endpointURL = "http://localhost:8080/"

interface UserResultItem {
    username: string;
    name: string;
    avatarURL: string;
    id: string;
}

interface UserResult {
    items: UserResultItem[];
}

export var User = {
    userId: "",
    userTool: "",
    followers: [] as UserResultItem[],
    following: [] as UserResultItem[],

    /**
     * Create user
     */

    /**
     * Retrieve all users
     */
    getFollowers: function (userId: any) {
        const apiURL: string = endpointURL + "_ah/api/tinyinsta/v1/user/{userId}/followers";
        return m.request({
            method: "GET",
            url: String.Format(apiURL, userId),
            //data: jsonData,
            withCredentials: false // use cookies?,
        }).then(function (result: any) {
            User.followers = (result as UserResult).items;
        }).catch((reason: any) => {
            console.error(reason);
        })
    },

    /**
     * Get the URL for use in servlet
     */
    getToolURL: function () {
        const servletURL = endpointURL + "_servlet/user-util?action=get-upload-url";
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
     * Login an user
     */
    doLogin: function (userName: string) {
        const servletURL = endpointURL + "_ah/api/tinyinsta/v1/user/find?username=" + userName;
        console.log(servletURL);
        return m.request({
            method: "GET",
            url: servletURL
        }).then((result: any) => {
            User.userId = (result as UserResult ).items[0].id
        }).catch((reason: any) => {
            console.error(reason);
        })
    }
}