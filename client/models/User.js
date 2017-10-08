var m = require("mithril")

var User = {
    id: null,
    isLoggedIn: function () {
        return this.id && this.username
    },
    username: null,
    avatar: null,
    tutorialList: [],
    tagList: [],
    getUserInfo: function () {
        console.log("get user info")
        return m.request({
            method: "GET",
            url: "/getUserInfo",
            withCredentials: true,
        }).then((data) => {
            console.log("got from get user info", data)
            this.id = data.id
            this.username = data.username
            this.avatar = data.avatar
            this.tutorialList = data.tutorialList
            this.tagList = data.tagList
            return true
        }).catch((err) => {
            console.log(err)
            return false
        })
    },
    getAllUsers: function () {

    },
}

module.exports = User