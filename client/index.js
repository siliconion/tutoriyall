// src/index.js
const m = require("mithril")

const Login = require("./views/Login")
const User = require("./views/User")
const TutorialForm = require("./views/TutorialForm")
// const TutorialList = require("./views/TutorialList")
const Layout = require("./views/Layout")
const UserModel = require("./models/User")

m.route(document.body, "/", {
    "/": {
        onmatch: function () {
            console.log("root fe view")
            if (UserModel.isLoggedIn()) {
                m.route.set('/user/' + UserModel.id)
            }
            else {
                UserModel.getUserInfo().then((data) => {
                    if (data)
                        m.route.set("/")
                    else
                        m.route.set("/login")
                })
            }
        }
    },
    "/login": {
        render: function () {
            console.log("login fe view")
            return m(Layout, m(Login))
        }
    },
    "/user/:id": {
        render: function () {
            console.log("user fe view")
            if (!UserModel.isLoggedIn()) {
                m.route.set("/")
            }
            else {
                return m(Layout, m(User))
            }
        }
    },
    "/tutorial/:id": {
        render: function (vnode) {
            return m(Layout, m(TutorialForm, vnode.attrs))
        }
    },
})

