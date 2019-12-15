import m from "mithril";
import { getUserView, getFollowersView, registerView, getUserProfil } from "./views/UserView";
import { udpatePostView, createPostView , getFollowersPostsView} from "./views/PostView";
import { navBar, login } from "./views/LayoutView";

/**
 * Routing
 */
m.route(document.body, "/login", {

  /**
   * ======================
   * USER
   * ======================
   */
  "/login": login,
  "/register": registerView,

  "/user/find/": {
    render: function () {
      return m(navBar, m(registerView))
    }
  },

  // onclick(), m.route.set("/user/:userId", {userId: targetId | userId})
  "/user/:userId": {
    render: function () {
      return m(navBar, m(getUserProfil))
    }
  },
  "/user/followers":{
    render:function(){
        return m(navBar, m(getFollowersView))
    }
  },
  "/": {
    render: function () {
      return m(navBar, m(getFollowersPostsView))
    }
  },

  /**
   * ============================
   * POSTS
   * ============================
   */
  
  "/post/create": {
    render: function () {
      return m(navBar, m(createPostView));
    }
  },

  // Boutton modify onclick(), récup le id du post concerné selectElementById et mets dans Post.currentPost
  "/post/modify": {
    render: function () {
      return m(navBar, m(udpatePostView));
    }
  }
});

//m.route.mode = "hash";