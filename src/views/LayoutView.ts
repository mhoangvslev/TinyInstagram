import m, { Vnode } from "mithril";
import { User } from "../models/User";

declare const userId: String;

export var navBar = {
    view: function (vnode: any) {
        return m('nav[class=grey lighten-5]', [
            m('div[class=nav-wrapper]', [
                m('a[href=#][class=brand-logo]', [
                    m('img[src=https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png]')
                ]),
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
export var login = {
    controller: function () {
        var ctrl: any = this;
        ctrl.username = "";
        ctrl.login = function () {
            User.doLogin(ctrl.username);
        };
    },
    view: function (ctrl: any) {
        return m('div[class=row valign-wrapper]', [
            m('div[class=col s6 offset-s3 valign]', [
                m('div[class=card grey lighten-5]', [
                    m('div[class=card-content black-text]', [
                        m('span[class=card-title]', 'Login'),
                        m('form', { class: "col s12", onsubmit: ctrl.login }, [
                            m('div[class=row]', [
                                m('div[class=input-field col s12]', [
                                    m('input', { class: "validate", type: "text", id: "name", name: "username", placeholder: "Username" }),
                                    m('label[for=name]', ' Your username'),
                                    m("input", { type: "submit", value: "Connexion" })
                                ])
                            ])
                        ]),

                        // Sign up button
                        m('div[class=card-action]', [
                            m('a', { href: './#!/register' }, 'Créer un compte')
                        ]),
                    ])
                ])
            ])
        ])
    }
}
