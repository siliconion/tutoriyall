var m = require("mithril")
var Navbar = require("./Navbar")


module.exports = {
    view: function (vnode) {
        return m(".container", [
            m(Navbar),
            m('.main', [
                m("section", vnode.children)
            ])
        ])
    }
}
