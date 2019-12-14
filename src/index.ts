import m from "mithril";
import { getUserView, getFollowersView } from "./views/UserView";
import {getPostView} from "./views/PostView";
import { navBar,login } from "./views/LayoutView";


/**
 * Routing
 */
m.route(document.body, "/login", {
    "/login": login,
    "/users": { render : function(){
            return m(navBar, m(getUserView))
    }},
    "/users/followers": { render : function(){
      return m(navBar, m(getFollowersView))
    }},
    "/post/all": { render : function(){
      return m(navBar, m(getPostView))
    }}
});