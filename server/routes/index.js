const userController = require('../controller').user;
const eventController = require('../controller').event;
const performerController = require('../controller').performer;

module.exports = (app) => {

    app.get('/api', (req, res) => {
        res.status(200).send({
            data: "Welcome Node Sequlize API v1"
        })
    })

    app.get(`/api/user/:userId`, userController.getUser);
    app.post("/api/user/create", userController.createUser);
    app.put(`/api/user/:userId`, userController.updateUser);

    app.get('/api/events', eventController.getAllEvents);
    app.post('/api/events', eventController.create);

    app.get('/api/performers', performerController.getAllPerformers);
}
