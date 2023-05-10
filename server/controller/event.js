const Event = require('../models').Event;

module.exports = {

    async getAllEvents(req, res) {
        try {
            const eventsCollection = await Event.findAll({});
            res.status(201).send(eventsCollection);
        }
        catch (e) {
            res.status(500).send(e);
        }
    },

    async getAllUserEvents(req, res) {
        try {
            const eventsCollection = await Event.findAll({
                where: {
                    created_by: req.params.userId,
                }
            });
            res.status(201).send(eventsCollection);
        }
        catch (e) {
            res.status(500).send(e);
        }
    },

    async createEvent(req, res) {
        let price = Number(req.body.price) === NaN ? 0 : Number(req.body.price)
        try {
            const eventCollection = await Event.create({
                title: req.body.title,
                description: req.body.description,
                venue: req.body.venue,
                address: req.body.address,
                city: req.body.city,
                url: req.body.url,
                facebook_url: req.body.facebook_url,
                instagram_url: req.body.instagram_url,
                price: price,
                datetime: req.body.datetime,
                created_by: req.body.created_by,
                image: req.file.filename,
            })
            res.status(201).send(eventCollection)
        } catch (e) {
            res.status(400).send(e)
        }
    },
}
