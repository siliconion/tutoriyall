// src/index.js
const m = require("mithril")

const Login = require("./views/Login")
const UserList = require("./views/UserList")
const TutorialForm = require("./views/TutorialForm")
// const TutorialList = require("./views/TutorialList")
const Layout = require("./views/Layout")

const getCookie = () => {
    var cookieString = document.cookie;

}
const isLoggedIn = ()=>{
    var ca = document.cookie.split(';');
}

m.route(document.body, "/", {
    "/": {
        onmatch: function () {
            if (!isLoggedIn) m.route.set("/login")
            return m(Layout, m('h1', "HOME"))
        }
    },
    "/login": {
        render: function () {
            return m(Layout, m(Login))
        }
    },
    "/list1": {
        render: function () {
            return m(Layout, m(UserList))
        }
    },
    "/list": {
        render: function () {
            return m('h1', "why why why?")
        }
    },
    "/tutorial/:id": {
        render: function (vnode) {
            return m(Layout, m(TutorialForm, vnode.attrs))
        }
    },
})

// var isLoggedIn = false
//
// var Login = {
//     view: function() {
//         return m("form", [
//             m("button[type=button]", {
//                 onclick: function() {
//                     isLoggedIn = true
//                     m.route.set("/secret")
//                 }
//             }, "Login")
//         ])
//     }
// }
//
// m.route(document.body, "/secret", {
//     "/secret": {
//         onmatch: function() {
//             if (!isLoggedIn) m.route.set("/login")
//             else return Home
//         }
//     },
//     "/login": Login
// })