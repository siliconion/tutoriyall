var m = require("mithril")
var TurotialForm = require("./TutorialForm")
var TurotialList = require("./TutorialList")
var Me = require("../models/Me")

module.exports = {
    oninit: Me.get,
    view: function () {
        console.log('in dash board view', Me)
        return m(".user", [
                m(TurotialForm),
                m('h1', 'username'),
                m('h1', Me.username),
                m('h1', 'end'),
                // m('.tutorial-form', User.tutorials.map((tutorial) => {
                //         m('.turorial-entry', [
                //             m('h3', tutorial.url),
                //             m('h5', tutorial.tags.map(tag => m('span', tag)))
                //         ])
                //     })
                // )
            ]
        )
    }
}