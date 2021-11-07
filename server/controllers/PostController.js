const {posts} = require('../mockData/posts');

module.exports = {
    read: (req, res) => {
        res.status(200).send(posts);
    },
    create: (req, res) => {
        console.log(req.body)
        res.status(200);
    },
    update: (req, res) => {
        res.status(200);
    },
    delete: (req, res) => {
        res.status(200);
    }
}