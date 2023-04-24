const Event = require('../models').Event;

module.exports = {

    async getAllEvents(req, res) {
        try {
            const eventsCollection = await Event.findAll({});

            res.status(201).send(eventsCollection);
        }
        catch (e) {
            console.log(e);

            res.status(500).send(e);
        }
    },
}
