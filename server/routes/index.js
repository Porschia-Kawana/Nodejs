const userController = require('../controller').user;
const eventController = require('../controller').event;
const { parser } = require('../storage')

module.exports = (app) => {

    app.get('/api', (req, res) => {
        res.status(200).send({
            data: "Welcome Node Sequlize API v1"
        })
    })

    app.get(`/api/user/:userId`, userController.getUser);
    app.post("/api/user/create", userController.createUser);
    app.put(`/api/user/:userId`, userController.updateUser);

    app.get('/api/event', eventController.getAllEvents);
    app.get(`/api/event/:userId`, eventController.getAllUserEvents);
    app.post('/api/event/create', parser.single("image"), eventController.createEvent);
}
