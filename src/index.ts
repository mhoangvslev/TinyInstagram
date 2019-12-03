import m from "mithril";
import { getUserView, getFollowersView } from "./views/UserView";


/**
 * Routing
 */
m.route(document.body, "/users", {
    "/users": getUserView,
    "/users/followers": getFollowersView
});