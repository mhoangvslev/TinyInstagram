import m, { Vnode } from "mithril";
import { User } from "../models/User";
import { ToolOperation, UserResult, UserResultItem, getImageFromBlob } from "../utils";

var attachto: any = document.getElementById('container');

export var getUserView: any = {
    view: function (vnode: any) {
        return m("h2", "Homepage");
        User.find(vnode.attrs.userId)
            .then((result: any) => {
                var user: UserResultItem = (result as UserResult).items[0];
                // New feed, timeline ici en utilisant User.userId
                return m("h2", [
                    "My Homepage",
                    m("ul", [
                        // m("li", user.id), // On ne montre pas, par ex
                        m("li", user.username),
                        m("li", user.name),
                        m("li", m("img", { src: getImageFromBlob(user.avatarURL) }))
                    ])
                ])
            })

    }
}
m.mount(document.body, getUserView);

//navbar partout osef, on fait des component pour chaque truc et on le mount partout

export var getFollowersView = {
    oninit: User.getFollowers,
    view: function () {
        return m("h3", [
            "My Followers", m(".followers-list", User.followers.map(function (follower: any) {
                return m(".followers-list-item", "@" + follower)
            }))
        ]);
    }
}

export var registerView = {
    oninit: User.getToolURL,
    view: function () {
        return getUserUtilsForm("create");
    }
}

export var udpateUserView = {
    oninit: User.getToolURL,
    view: function () {
        return getUserUtilsForm("update");
    }
}

/**
 * Return Mithril component for the form
 * @param operation update or create
 */
function getUserUtilsForm(operation: ToolOperation): Vnode<any, any> {
    return m("form", { action: User.userTool, method: "post", enctype: "multipart/form-data" }, [
        // Hidden fields: the servlet will use these to perform update/create on userId
        m("input", { type: "hidden", id: "user-util-form-action", name: "actionType", value: operation }),
        m("input", { type: "hidden", id: "user-util-form-userId", name: "userId", value: User.userId }),
        m("ul", [
            m("li", ["Username: ", m("input[required]", { type: "text", name: "username" })]),
            m("li", ["Name: ", m("input[required]", { type: "text", name: "name" })]),
            m("li", ["Profile picture: ", m("input[required]", { type: "file", name: "avatar" })]),
            m("li", m("input", { type: "submit", value: "Submit" }))
        ])
    ]);
}