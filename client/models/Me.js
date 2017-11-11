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
    tutorialList: [
        {
            link: 'https://docs.python.org/3/library/asyncio-eventloop.html',
            tags: ['python', 'threading']
        },
        {
            link: 'http://www.giantflyingsaucer.com/blog/?p=5557',
            tags: ['python', 'threading']
        },
        {
            link: 'https://www.fullstackpython.com/wsgi-servers.html',
            tags: ['python', 'web']
        },
        {
            link: 'https://en.wikipedia.org/wiki/Concurrency_control',
            tags: ['database']
        },
        {
            links: 'https://en.wikipedia.org/wiki/Isolation_(database_systems)',
            tags: ['database']
        },
        {
            link: 'https://msdn.microsoft.com/en-us/library/jj835093(v=sql.120).aspx#WAL',
            tags: ['database']
        }
    ],
    tagList: ['python', 'threading', 'web', 'cloud', 'distributed system', 'database', 'postgres'],
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