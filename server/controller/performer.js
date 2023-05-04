const Performer = require('../models').Performer;

module.exports = {

    async getAllPerformers(req, res) {
        try {
            const performerCollection = await Performer.findAll({});
            res.status(201).send(performerCollection);
        }
        catch (e) {
            res.status(500).send(e);
        }
    },
}
