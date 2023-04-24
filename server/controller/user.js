const User = require('../models').User;

module.exports = {

    async getAllUsers(req, res) {
        try {
            const userCollection = await User.findAll({});

            res.status(201).send(userCollection);
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
                email: req.body.email,
                username: req.body.username,
                hash: req.body.hash,
                name: req.body.name,
                updated_at: new Date(),
                created_at: new Date(),
            })
            res.status(201).send(userCollection)
        } catch (e) {
            console.log(e)
            res.status(400).send(e)
        }
    },
}
