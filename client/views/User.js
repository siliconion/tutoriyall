// src/views/UserList.js
var m = require("mithril")
var User = require("../models/User")

module.exports = {
    view: function () {
        return m(".user", [
            m('.tutorial-form', 'create new link'),
            m('.tutorial-form', 'Tutorial list'),
            ]
        )
    }
}
// oninit: User.loadList,

// m('.tutorial-list', User.list.map(function (user) {
//     return m("a.user-list-item",
//         {href: "/tutorial/" + user.id, oncreate: m.route.link},
//         user.firstName + "?" + user.lastName)
// }))