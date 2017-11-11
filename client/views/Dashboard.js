var m = require("mithril")
var TurotialForm = require("./TutorialForm")
var TurotialList = require("./TutorialList")
var Tags = require("./Tags")
var Me = require("../models/Me")

module.exports = {
    oninit: Me.get,
    view: function () {
        console.log('in dash board view', Me)
        return m(".dashboard", [
            m('.dashboard-left', [
                m('h3', Me.username),
                m(Tags, {tagList: Me.tagList}),
                m('h3', 'end'),
            ]),
            m('.dashboard-right', [
                m(TurotialForm),
                m('h3', 'tutorial list'),
                m(TurotialList, {tutorialList: Me.tutorialList}),
                m('h3', 'end')

            ])
        ])
    }
}