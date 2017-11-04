// src/views/UserForm.js
var m = require("mithril")

var tutorial = {}
module.exports = {
    oninit: function(vnode) {
        // User.load(vnode.attrs.id)
        tutorial = {}
    },
    view: function () {
        return m("form", {
            onsubmit: function (e) {
                e.preventDefault()
                console.log(tutorial)
                // save tutorial
                // clear tutorial
                tutorial = {}
            }
        }, [
            m("label.label", "Link"),
            m("input.input[type=text][placeholder=Link URL]", {
                oninput: m.withAttr("value", function (value) {
                    tutorial.url = value
                }),
                value: tutorial.url
            }),
            m("label.label", "Tag"),
            m("input.input[placeholder=Tag]", {
                oninput: m.withAttr("value", function (value) {
                    tutorial.tag = value
                }),
                value: tutorial.tag
            }),
            m("button.button[type=submit].btn", "Save"),
        ])
    }
}