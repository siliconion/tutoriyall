// src/index.js
const m = require("mithril")

const Login = require("./views/Login")
const User = require("./views/User")
const TutorialForm = require("./views/TutorialForm")
// const TutorialList = require("./views/TutorialList")
const Layout = require("./views/Layout")
const Me = require("./models/Me")

m.route(document.body, "/", {
    "/": {
        onmatch: function () {
            console.log("root fe view")
            if (Me.isLoggedIn()) {
                m.route.set('/user/' + Me.id)
            }
            else {
                Me.getUserInfo().then(() => {
                    if (Me.isLoggedIn())
                        m.route.set('/user/' + Me.id)
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
            // if (!Me.isLoggedIn()) {
            if (false) {
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
    "/me":{
        render: function () {
            console.log("MEEEEE")
            Me.getUserInfo().then(()=>{
                console.log("MEEEEE")
                console.log(Me.username)
                return m('h1', Me.username)
            })
        }
    }
})

