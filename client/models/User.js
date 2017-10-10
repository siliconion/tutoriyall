var m = require("mithril")

var User = {
    username: null,
    tutorials: [],
    tags: [],
    getById: function (id) {
        console.log('get y id', id)
        return m.request({
            method: "GET",
            url: "/user/?user=" + id,
            withCredentials: true,
        }).then(function (result) {
            console.log('cgetting user info', result)
            // User.username = result.data.username
            // User.tutorials = result.data.tutorials
            // User.tags = result.data.tags
        })
    }
}

module.exports = User