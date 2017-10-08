var m = require("mithril")

module.exports = {
    view: function() {
        return m("div", [
            m("h4", "Login"),
            // m("a[href='https://github.com/login/oauth/authorize?client_id=522861ba346b703e522c']", "Log in with GitHub"),
            m("a[href='/auth/provider']", "Log in with GitHub"),
            m("p", "Don't have a GitHub account?"),
            m("a[href='http://github.com']", "Get one here!")
        ])
    }
}
