var m = require("mithril")

// var Me = {
//     id: null,
//     isLoggedIn: function () {
//         return this.id && this.username
//     },
//     username: null,
//     avatar: null,
//     tutorialList: [],
//     tagList: ['python', 'distributed system', 'database', 'postgres'],
//     get: function () {
//         console.log("get user info", this)
//         return m.request({
//             method: "GET",
//             url: "/me",
//             withCredentials: true,
//         }).then((data) => {
//             console.log("got from get user info", data)
//             Me.id = data.id
//             Me.username = data.username
//             Me.avatar = data.avatar
//             Me.tutorialList = data.tutorialList
//             Me.tagList = data.tagList
//         }).catch((err) => {
//             console.log(err)
//         })
//     },
// }

var Me = {
    id: null,
    isLoggedIn: function () {
        return this.id && this.username
    },
    username: 'siliconion',
    avatar: null,
    tutorialList: [],
    tagList: ['python', 'distributed system', 'database', 'postgres'],
    get: function () {
        console.log("get user info", this)
        // return m.request({
        //     method: "GET",
        //     url: "/me",
        //     withCredentials: true,
        // }).then((data) => {
        //     console.log("got from get user info", data)
        //     Me.id = data.id
        //     Me.username = data.username
        //     Me.avatar = data.avatar
        //     Me.tutorialList = data.tutorialList
        //     Me.tagList = data.tagList
        // }).catch((err) => {
        //     console.log(err)
        // })
    },
}

module.exports = Me