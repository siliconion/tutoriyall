var m = require("mithril")

module.exports = {
    view: function () {
        return m("nav.navbar.navbar-default.navbar-toggleable-sm.navbar-fixed-top", [
            m(".container-fluid", [
                m(".navbar-header",[
                    m("a[href='/'] .navbar-brand", {oncreate: m.route.link}, "Tutoriy'all"),
                ]),
                m(".collapse.navbar-collapse", [
                    m("ul.nav.navbar-nav.navbar-right", [
                        m("li", [
                            m("form.navbar-form", [
                                m(".form-group", [
                                    m("input.form-control.input[type=text][placeholder=Search]"),
                                ]),
                                m("button.btn.btn-default", "Submit")
                            ]),
                        ]),
                        m("li", m("a", "Link")),
                        m("li", [
                            m("a[href='#'].dropdown-toggle", "Dropdown"),
                            m("ul.dropdown-menu", [
                                m("li", m("a[href='#']","1")),
                                m("li", m("a[href='#']","2")),
                                m("li", m("a[href='#']","3")),
                            ])
                        ])
                    ])
                ])
            ]),
        ])
    }
}
