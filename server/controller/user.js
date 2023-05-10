const User = require('../models').User;

module.exports = {

    async getUser(req, res) {
        try {
            const user = await User.findByPk(req.params.userId);
            if (user) {
                res.status(201).send(user);
            } else {
                res.status(404).send({});
            }
        }
        catch (e) {
            res.status(500).send(e);
        }
    },

    async createUser(req, res) {
        try {
            const userCollection = await User.create({
                id: req.body.id,
                email: req.body.email,
                username: req.body.username,
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                phone: req.body.phone,
            })
            res.status(201).send(userCollection)
        } catch (e) {
            res.status(400).send(e)
        }
    },

    async updateUser(req, res) {
        try {
            const userCollection = await User.update({
                email: req.body.email,
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                phone: req.body.phone,
            }, {
                where: {
                    id: req.params.userId
                }
            })
            res.status(201).send(userCollection)
        } catch (e) {
            res.status(400).send(e)
        }
    },
}
