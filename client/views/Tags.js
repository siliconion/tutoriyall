var m = require("mithril")

module.exports = {
    view: function (vnode) {
        return m('.tags', [
            m('h2', 'tags'),
            m('.tags-container', vnode.attrs.tagList.map(tag => {
                return m('span', m('span.label.label-primary', tag))
            }))
        ])
    }
}