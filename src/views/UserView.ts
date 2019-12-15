import m, { Vnode } from "mithril";
import { User } from "../models/User";
import { ToolOperation, UserResult, UserResultItem, getImageFromBlob } from "../utils";
import { getPostView } from "./PostView";

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

export var getUsers = {
    oninit : User.find,
    view : function(){}
}


export var getUserProfil = {
    view:function(){
        return m(getUserView,m(getPostView));
    }
}


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

/* au cazou, style
 function getUserUtilsForm(operation: ToolOperation): Vnode<any, any> {
    return m('div',{class:"row valign-wrapper"},[
        m('div',{class:"col s6"}),
        m('div',{class:"col s6 offset-3 valign"},[
            m('div',{class:"card grey lighten-5"},[
                m('div',{class:"card-content black-text"},[
                    m('span',{class:"card title"},"Register"),
                    m("form", { action: User.userTool, method: "post", enctype: "multipart/form-data" }, [
                        // Hidden fields: the servlet will use these to perform update/create on userId
                        m("input", { type: "hidden", id: "user-util-form-action", name: "actionType", value: operation }),
                        m("input", { type: "hidden", id: "user-util-form-userId", name: "userId", value: User.userId }), ,
                        m("ul", [
                            m("li", ["Username: ", m("input[required]", { type: "text", name: "username", class:"black-text"})]),
                            m("li", ["Name: ", m("input[required]", { type: "text", name: "name",  class:"black-text" })]),
                            m("li", ["Profile picture: ", m("input[required]", { type: "file", name: "avatar", class:"black-text" })]),
                            m("li", m("input", { type: "submit", value: "Submit", class:"black-text"}))
                        ])
                    ])
                ])
            ])
        ]),
        m('div',{class:"col s6"})
    ]);
}
*/