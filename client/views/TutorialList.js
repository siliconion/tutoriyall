var TutorialCard = require("./TutorialCard")

module.exports = {
  view: function(vnode) {
      return m('div', [
          m('h2', 'tags'),
          m('div', vnode.attrs.tutorialList.map(tutorial => {
              return m(TutorialCard, {tutorial:tutorial})
          }))
      ])
  }
}