import m, { Vnode } from "mithril";
import { User } from "../models/User";

export var getUserView: any = {
    oninit: User.getUsers,
    view: function() {
        return m(".user-list", User.users.map(function(user: any) {
            return m(".user-list-item", "@" + user.username + ": " + user.name)
        }))
    }
}

export var getFollowersView = {
    oninit: User.getFollowers,
    view: function() {
        return m(".followers-list", User.followers.map(function(follower: any) {
            return m(".followers-list-item", "@" + follower)
        }))
    }
}