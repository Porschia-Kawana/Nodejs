module.exports = (sequelize, DataTypes) => {
    let Event = sequelize.define('Event', {
        title: { type: DataTypes.STRING, allowNull: false },
        decription: DataTypes.STRING,
        address: DataTypes.STRING,
        city: DataTypes.STRING,
        image: DataTypes.STRING,
        url: DataTypes.STRING,
        facebook_url: DataTypes.STRING,
        instagram_url: DataTypes.STRING,
        price: DataTypes.INTEGER,
        date: DataTypes.DATE,
        time: DataTypes.DATE,
    });

    Event.associate = ({ Performer, User, PerformerEvents }) => {
        Event.belongsToMany(Performer, {
            as: "performers",
            through: PerformerEvents,
            foreignKey: "event_id",
        });
        Event.belongsTo(User, {
            foreignKey: "created_by",
        });
    }

    return Event;
}
