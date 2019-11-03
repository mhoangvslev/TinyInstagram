import * as m from "mithril";
import { Post } from "./post";

export class User{
    username: string;
    followers: User[];
    posts: Post[];

    constructor(username: string){
        this.username = username;
        this.followers = [];
        this.posts = [];
    }

    getFollowers() {
        const user = this;
        m.request<any>({
            method: "GET",
            url: "",
            withCredentials: true
        }).then(function(result){
            console.log(result)
            user.followers = result.data;
        });
    }

    addFollower(follower: User){

    }

    makePost(){
        
    }

    followUser(u: User){
        u.addFollower(this);
    }

    likePost(p: Post){
        p.likePost()
    }

    sharePost(p: Post){
        p.sharePost()
    }
}