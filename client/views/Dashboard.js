var m = require("mithril")
var TurotialForm = require("./TutorialForm")
var TurotialList = require("./TutorialList")
var Tags = require("./Tags")
var Me = require("../models/Me")

module.exports = {
    oninit: Me.get,
    view: function () {
        console.log('in dash board view', Me)
        return m(".user", [
            m(TurotialForm),
            m('.row', [
                m('.col-sm-4', [
                    m(Tags, {tagList: Me.tagList}),
                    m('h3', Me.username),
                    m('h3', 'end'),
                ]),
                m('.col-sm-8', [
                    m('h3', 'tutorial list'),
                    m(TurotialList, {tutorialList: Me.tutorialList}),
                    m('h3', 'end')

                ])
                // m('col-md-8', [
                //     m('.tutorial-form', Me.tutorialList.map((tutorial) => {
                //         return m('div', [
                //             m('h3', tutorial.url),
                //             m('h5', tutorial.tags.map(tag => m('span', tag)))
                //         ])
                //     }))
                // ])
            ])
        ])
    }
}