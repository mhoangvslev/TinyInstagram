import m, { Vnode } from "mithril";
import { Post } from "../models/Post";
import { ToolOperation } from "../utils";
import { User } from "../models/User";

var attachto:any = document.getElementById('container');

export var createPostView = {
    oninit: Post.getToolURL,
    view: function () {
        return getPostUtilsForm("create");
    }
}

export var udpatePostView = {
    oninit: Post.getToolURL,
    view: function () {
        return getPostUtilsForm("update");
    }
}

/**
 * Return Mithril component for the form
 * @param operation update or create
 */
function getPostUtilsForm(operation: ToolOperation): Vnode<any, any> {
    return m("form", { action: Post.postTool, method: "post", enctype: "multipart/form-data" }, [
        // Hidden fields: the servlet will use these to perform update/create on userId
        m("input", { type: "hidden", id: "post-util-form-action", name: "actionType", value: operation }),
        m("input", { type: "hidden", id: "post-util-form-ownerId", name: "userId", value: User.userId }),
        m("input", { type: "hidden", id: "post-util-form-postId", name: "userId", value: Post.targetPost }),

        m("ul", [
            m("li", ["Image: ", m("input[required]", { type: "file", name: "imageURL" })]),
            m("li", ["Caption: ", m("input[required]", { type: "text", name: "caption" })]),
            m("li", m("input", { type: "submit", value: "Submit" }))
        ])
    ]);
}
