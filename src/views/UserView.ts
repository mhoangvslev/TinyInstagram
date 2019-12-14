import m, { Vnode } from "mithril";
import { User } from "../models/User";

var attachto: any = document.getElementById('container');

export var getUserView: any = {
    oninit: User.getUsers,
    view: function() {
        return m(".user-list .black-text", User.users.map(function(user: any) {
            return m(".user-list-item","@" + user.username + ": " + user.name)
        }))
    }
}
m.mount(document.body, getUserView);

//navbar partout osef, on fait des component pour chaque truc et on le mount partout

export var getFollowersView = {
    oninit: User.getFollowers,
    view: function() {
        return m(".followers-list", User.followers.map(function(follower: any) {
            return m(".followers-list-item", "@" + follower)
        }))
    }
}