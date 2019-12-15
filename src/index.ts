import m from "mithril";
import { getUserView, getFollowersView, registerView } from "./views/UserView";
import { getPostView } from "./views/PostView";
import { navBar, login } from "./views/LayoutView";


/**
 * Routing
 */
m.route(document.body, "/login", {
  "/login": login,
  "/register": {
    render: function () {
      return m(navBar, m(registerView))
    }
  },
  "/user": {
    render: function () {
      return m(navBar, m(getUserView))
    }
  },
  "/user/followers": {
    render: function () {
      return m(navBar, m(getFollowersView))
    }
  },
  "/post/all": {
    render: function () {
      return m(navBar, m(getPostView))
    }
  }
});

//m.route.mode = "hash";