var m = require("mithril")

module.exports = {
    view: function () {
        return m("nav.navbar", m("ul.navbar-container", [
                m("li.navbar-item", [
                    m("a[href='/'] .navbar-brand", {oncreate: m.route.link}, "Tutoriy'all"),
                ]),
                m("li.navbar-item", [
                    m("form.navbar-form", [
                        m("input.form-control.input[type=text][placeholder=Search]"),
                        m("button.btn.btn-default", "Submit")
                    ])
                ]),
                m("li.navbar-item", m(".dropdown", [
                    m("a[href='#']", "Dropdown"),
                    m("ul.dropdown-content", [
                        m("li", m("a[href='#']", "1")),
                        m("li", m("a[href='#']", "2")),
                        m("li", m("a[href='#']", "3")),
                    ])
                ]))
            ])
        )
    }
}
