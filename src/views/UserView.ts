import m, { Vnode } from "mithril";
import { User } from "../models/User";

const container:any = document.getElementById("container");

export var getUserView: any = {
    oninit: User.getUsers,
    view: function () {
        return m(".user-list", User.users.map(function (user: any) {
            return m(".user-list-item", user.id + "@" + user.username + ": " + user.name)
        }));
    }
}

export var getFollowersView: any = {
    controller: function () {
        return { userId: m.route.param("userId") }
    },
    view: function (controller: any) {
        console.log(controller.userId);
        User.getFollowers(controller.userId);

        return m(".followers-list", User.followers.map(function (follower: any) {
            return m(".followers-list-item", "@" + follower)
        }));
    }
}