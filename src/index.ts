import m from "mithril";
import { getUserView, getFollowersView, registerView } from "./views/UserView";
import { udpatePostView, createPostView } from "./views/PostView";
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
  "/register": {
    render: function () {
      return m(navBar, m(registerView))
    }
  },

  "/user/find/": {
    render: function () {
      return m(navBar, m(registerView))
    }
  },

  // onclick(), m.route.set("/user/:userId", {userId: targetId | userId})
  "/user/:userId": {
    render: function () {
      return m(navBar, [
        m(getUserView),
        m(getFollowersView)
      ])
    }
  },
  "/user/followers": {
    render: function () {
      return m(navBar, m(getFollowersView))
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