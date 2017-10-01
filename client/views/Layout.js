var m = require("mithril")
var Navbar = require("./Navbar")


module.exports = {
    view: function (vnode) {
        return m(".container", [
            m(Navbar),
            m('div', {style: "padding-top:70px;"}, [
                m("section", vnode.children)
            ])
        ])
    }
}
