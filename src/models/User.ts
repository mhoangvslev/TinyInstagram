import m from "mithril";

const endpointURL = "https://tinyinstagram.appspot.com/"
//const endpointURL = "http://localhost:8080/"

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
    getFollowers: function () {
        const apiURL: string = endpointURL + `_ah/api/tinyinsta/v1/user/${User.userId}/followers`;
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
        const apiURL: string = endpointURL + `_ah/api/tinyinsta/v1/user/${User.userId}/following`;
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
    like: function(postId: number) {
        return m.request({
            method: "PUT",
            url: endpointURL + `_ah/api/tinyinsta/v1/user/${User.userId}/like/${postId}`,
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
    unlike: function(postId: number) {
        return m.request({
            method: "PUT",
            url: endpointURL + `_ah/api/tinyinsta/v1/user/${User.userId}/unlike/${postId}`,
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
    follow: function(userId: number) {
        return m.request({
            method: "PUT",
            url: endpointURL + `_ah/api/tinyinsta/v1/user/${User.userId}/follow/${userId}`,
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
    unfollow: function(userId: number) {
        return m.request({
            method: "PUT",
            url: endpointURL + `_ah/api/tinyinsta/v1/user/${User.userId}/unfollow/${userId}`,
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
            User.userId = (result as UserResult).items[0].id;
        }).catch((reason: any) => {
            console.error(reason);
        })
    }
}