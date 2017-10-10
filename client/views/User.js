var m = require("mithril")
var TurotialForm = require("./TutorialForm")
var TurotialList = require("./TutorialList")
var User = require("../models/User")

module.exports = {
    oninit: function (vnode) {
        console.log('user view init')
        User.getById(vnode.attrs.id)
    },
    view: function () {
        return m(".user", [
                m(TurotialForm),
                m('.tutorial-form', User.tutorials.map((tutorial) => {
                    m('.turorial-entry', [
                        m('h3', tutorial.url),
                        m('h5', tutorial.tags.map(tag=>m('span', tag)))
                    ])
                    })
                )
            ]
        )
    }
}