import * as m from "mithril";
import { Post } from "./Post";

export var User = {
    followers: [],
    following: [],

    getFollowers: function () {
        return m.request({
            method: "GET",
            url: "",
            data: ,
            withCredentials: true // use cookies?,
        })
    }
}