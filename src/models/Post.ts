import * as m from "mithril";

export var Post = {
    likes: 0,
    shares: 0,
    posts:[],

    getPosts: function (){
        return m.request({
            method: "GET",
            url: "https://tinyinstagram.appspot.com/_ah/api/tinyinsta/v1/post/all",
            withCredentials: false
        }).then(function (result: any) {
            console.log(typeof (result))
            Post.posts = result.items;
        }).catch((reason: any) => {
            console.log(reason);
        })
    }
}