var m = require("mithril")

module.exports = {
    view: function() {
        return m("div", [
            m("h4", "Login"),
            m("a[href='/auth']", "Log in with GitHub"),
            m("p", "Don't have a GitHub account?"),
            m("a[href='http://github.com']", "Get one here!")
        ])
    }
}
