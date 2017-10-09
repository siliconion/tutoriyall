var m = require("mithril")
var TurotialForm = require("./TutorialForm")
var TurotialList = require("./TutorialList")
var User = require("../models/User")

module.exports = {
    view: function () {
        return m(".user", [
            m(TurotialForm),
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