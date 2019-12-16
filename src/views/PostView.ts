import m, { Vnode } from "mithril";
import { Post } from "../models/Post";
import { ToolOperation, getImageFromBlob, PostResult, PostResultItem } from "../utils";
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

export var getPostView: any = {
    oninit: Post.getPostsByUser(User.userId),
    view: function(){
        Post.getPostsByUser(User.userId).then((result: any) => {
            var post: PostResultItem = (result as PostResult).items[0];
            return m(".post-list", Post.posts.map(function(post: any) {
                return m('div',{class:"container post-list-item"}, [
                    m('div',{class:"black-test"},post.caption + " " + post.postedBy)
                    //m('img',{src:getImageFromBlob(post.imageURL)})
                ])
            }))
        })
    }
}

export var getFollowersPostsView = {
    oninit : Post.getPostsFromFollowers,
    view : function(){
        return m('div',{class:"followers-posts container"}, Post.posts.map(function(post:any){
            return m(".followers-posts-item",[
                m('div',{class:"card grey lighten-5"},[
                    m('img',{src:post.imageURL}),
                    m('span',{class:"black-text"}, post.postedBy),
                    m('span',{class:"black-text"}, post.caption)
                ])
            ])
        }));
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
        m("input", { type: "hidden", id: "post-util-form-postId", name: "postId", value: Post.targetPost }),

        m("ul", [
            m("li", ["Image: ", m("input[required]", { type: "file", name: "imageURL" })]),
            m("li", ["Caption: ", m("input[required]", { type: "text", name: "caption" })]),
            m("li", m("input", { type: "submit", value: "Submit" }))
        ])
    ]);
}
