module.exports = {
  view: function(vnode) {
      return m('div', [
          m('h2', 'tags'),
          m('div', vnode.attrs.tutorial.map(tag => {
              return m('span', m('span.label.label-primary', tag))
          }))
      ])
  }
}