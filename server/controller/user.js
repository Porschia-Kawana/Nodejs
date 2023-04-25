const User = require('../models').User;

module.exports = {

    async getUser(req, res) {
        try {
            const user = await User.findByPk(req.params.userId);

            console.log('UUID:::', user)

            if (user) {
                res.status(201).send(user);
            } else {
                res.status(404).send({});
            }
        }
        catch (e) {
            console.log(e);

            res.status(500).send(e);
        }
    },

    async create(req, res) {
        console.log(req)
        try {
            const userCollection = await User.create({
                id: req.body.id,
                email: req.body.email,
                username: req.body.username,
                first_name: req.body.first_name,
                last_name: req.body.last_name,
            })
            res.status(201).send(userCollection)
        } catch (e) {
            console.log(e)
            res.status(400).send(e)
        }
    },
}
