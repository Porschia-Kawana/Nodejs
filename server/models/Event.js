module.exports = (sequelize, DataTypes) => {
    let Event = sequelize.define('Event', {
        id: {
            type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true
        },
        title: { type: DataTypes.STRING, allowNull: false },
        description: DataTypes.STRING,
        address: DataTypes.STRING,
        venue: DataTypes.STRING,
        city: DataTypes.STRING,
        url: DataTypes.STRING,
        facebook_url: DataTypes.STRING,
        instagram_url: DataTypes.STRING,
        price: DataTypes.INTEGER,
        datetime: DataTypes.DATE,
        created_by: DataTypes.STRING,
        image: DataTypes.STRING,
    }, {
        timestamps: false
    });

    Event.associate = ({ User }) => {
        Event.belongsTo(User, {
            foreignKey: "created_by",
        });
    }

    return Event;
}
