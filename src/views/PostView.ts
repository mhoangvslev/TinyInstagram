import m, { Vnode } from "mithril";
import { Post } from "../models/Post";

var attachto:any = document.getElementById('container');

export var getPostView: any = {
    oninit: Post.getPosts,
    view: function(){
        return m(".post-list", Post.posts.map(function(post: any) {
            return m(".post-list-item",  post.postedBy + ": " + post.caption)
        }))
    }
}
