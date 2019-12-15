import m, { Vnode } from "mithril";
import { User } from "../models/User";

var attachto: any = document.getElementById('container');

export var getUserView: any = {
    view: function () {
        // New feed, timeline ici en utilisant User.userId
    }
}
m.mount(document.body, getUserView);

//navbar partout osef, on fait des component pour chaque truc et on le mount partout

export var getFollowersView = {
    oninit: User.getFollowers,
    view: function () {
        return m(".followers-list", User.followers.map(function (follower: any) {
            return m(".followers-list-item", "@" + follower)
        }));
    }
}

export var registerView = {
    oninit: User.getToolURL,
    view: function () {
        return m("form", { action: User.userTool, method: "post", enctype: "multipart/form-data" }, [
            m("input", { type: "hidden", id: "user-util-form-action", name: "actionType", value: "create" }),
            m("input", { type: "hidden", id: "post-util-form-userId", name: "userId", value: "" }),,
            m("ul", [
                m("li", ["Username: ", m("input", {type: "text", name:"username"})]),
                m("li", ["Name: ", m("input", {type: "text", name:"name"})]),
                m("li", ["Profile picture: ", m("input", {type: "file", name:"avatar"})]),
                m("li", m("input", {type: "submit", value:"Submit"}))
            ])
        ])
    }
}