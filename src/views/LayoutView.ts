import m, { Vnode } from "mithril";
import { User } from "../models/User";
import { UserResult } from "../utils";

export var navBar = {
    view: function (vnode: any) {
        return m('nav[class=grey lighten-5]', [
            m('div[class=nav-wrapper]', [
                m('a[href=#][class=brand-logo]', [
                    m('img[src=https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png]')
                ]),
                m("h1", "Navigation"),
                m('ul[id=nav-mobile][class=right hide-on-med-and-down]', [
                    m('li', [
                        m('a[href=#][class=black-text]', 'Profil')
                    ])
                ])
            ])
        ], m(".container", vnode.children))
    }
}


/**
 * Login windows
 * https://medium.com/@greenraccoon23/mithril-proper-form-handling-4056a49b69ef
 */

var err: any = null;
var success: any = null

export var login = {
    controller: {
        login: (e: any) => {
            e.preventDefault();
            const data = new FormData(e.target);
            User.doLogin(data.get("username") as string)
                .then(() => {
                    m.route.set(`/user/${User.userId}`);
                })
        },
        register: () => {
            m.route.set("/register");
        }
    },
    view: function () {
        return m('div[class=row valign-wrapper]', [
            m('div[class=col s6 offset-s3 valign]', [
                m('div[class=card grey lighten-5]', [
                    m('div[class=card-content black-text]', [
                        m('h1[class=card-title]', 'Login'),
                        m('form', { class: "col s12", onsubmit: this.controller.login, method: "GET", id: "user-signin-form" }, [
                            m('div[class=row]', [
                                m('div[class=input-field col s12]', [
                                    m('label[for=name]', ' Your username: '),
                                    m('input[required]', { class: "validate", type: "text", id: "name", name: "username", placeholder: "Username" })
                                ]),
                            ]),
                            m('.success', "UserID" + User.userId),
                            m('.error', err),
                            // Sign in button
                            m('div[class=row]', [m("input", {class: "card-action", type: "submit", value: "Connexion" })]),
                            // Sign up button
                            m('div[class=row]', [m("input", {class: "card-action", type: "button", value: "Créer un compte", onclick: this.controller.register })]),
                        ])
                    ])
                ])
            ])
        ])
    }
}
