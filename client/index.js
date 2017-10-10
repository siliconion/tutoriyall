// src/index.js
const m = require("mithril")

const Login = require("./views/Login")
const User = require("./views/User")
const Dashboard = require("./views/Dashboard")
const TutorialForm = require("./views/TutorialForm")
// const TutorialList = require("./views/TutorialList")
const Layout = require("./views/Layout")
const Me = require("./models/Me")

m.route(document.body, "/", {
    "/": {
        onmatch: function () {
            console.log('/ fe view')
            cookie = document.cookie.split(';').map(s => {
                var o = {}
                o[s.split('=')[0]] = s.split('=')[1]
                return o
            })
            if ('is_authenticated' in cookie && cookie['is_authenticated']) {
                m.route.set('/dashboard')
            }
            else {
                m.route.set("/login")
            }
        }
    },
    "/login": {
        render: function () {
            console.log("login fe view")
            return m(Layout, m(Login))
        }
    },
    "/dashboard": {
        render: function () {
            console.log("dash boars fe view")
            return m(Layout, m(Dashboard))
        }
    },
    "/user/:id": {
        render: function () {
            console.log("user fe view")
            return m(Layout, m(User))
        }
    },
    "/tutorial/:id": {
        render: function (vnode) {
            return m(Layout, m(TutorialForm, vnode.attrs))
        }
    }
})

