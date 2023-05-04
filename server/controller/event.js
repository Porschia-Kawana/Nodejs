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

    async create(req, res) {
        try {
            const eventCollection = await Event.create({
                title: req.body.title,
                decription: req.body.decription,
                address: req.body.address,
                city: req.body.city,
                image: req.body.image,
                url: req.body.url,
                facebook_url: req.body.facebook_url,
                instagram_url: req.body.instagram_url,
                price: req.body.price,
                date: req.body.date,
                time: req.body.time,
            })
            res.status(201).send(eventCollection)
        } catch (e) {
            res.status(400).send(e)
        }
    },
}
