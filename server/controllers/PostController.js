const { posts } = require('../mockData/posts');

module.exports = {
    read: (req, res) => {
        try {
            res.status(200).send(posts);
        } catch (err) {
            console.log('An error occurred in GET posts', err)
            res.status(500).send(err)
        }
    },
    create: (req, res) => {
        try {
            console.log('Add resource', req.body)
            res.status(200);

        } catch {
            console.log('An error occurred in GET posts', err)
            res.status(500).send(err)
        }
    },
    update: (req, res) => {
        try {
            console.log('Update resource', req.body)
            res.status(200);

        } catch {
            console.log('An error occurred in GET posts', err)
            res.status(500).send(err)
        }
    },
    delete: (req, res) => {
        try {
            console.log('Delete resource', req.body)
            res.status(200);
        } catch {
            console.log('An error occurred in GET posts', err)
            res.status(500).send(err)
        }
    }
}