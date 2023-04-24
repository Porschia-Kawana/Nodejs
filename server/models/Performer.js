module.exports = (sequelize, DataTypes) => {
    let Performer = sequelize.define('Performer', {
        name: { type: DataTypes.STRING, allowNull: false },
        pronouns: DataTypes.STRING,
        summary: DataTypes.STRING,
        description: DataTypes.STRING,
        url: DataTypes.STRING,
        facebook_url: DataTypes.STRING,
        instagram_url: DataTypes.STRING,
        profile_image: DataTypes.STRING,
        image1: DataTypes.STRING,
        image2: DataTypes.STRING,
        image3: DataTypes.STRING,
        image4: DataTypes.STRING,
        image5: DataTypes.STRING,
        image6: DataTypes.STRING,
    });

    Performer.associate = ({ Event, User, PerformerEvents }) => {
        Performer.belongsToMany(Event, {
            as: "events",
            through: PerformerEvents,
            foreignKey: "performer_id",
        });
        Performer.belongsTo(User, {
            foreignKey: "performer_id",
        });
    }
    return Performer;
}
