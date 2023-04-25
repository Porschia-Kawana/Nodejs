module.exports = (sequelize, DataTypes) => {
    let User = sequelize.define('User', {
        id: { type: DataTypes.STRING, primaryKey: true },
        username: { type: DataTypes.STRING },
        first_name: { type: DataTypes.STRING },
        last_name: { type: DataTypes.STRING },
        email: {
            type: DataTypes.STRING,
            validate: {
                isEmail: true,
            },
            allowNull: false,
        }
    }, {
        timestamps: false
    });

    User.associate = ({ Event, Performer }) => {
        User.hasMany(Event, {
            foreignKey: "created_by",
        });
        User.hasMany(Performer, {
            foreignKey: "user_id",
        });
    }
    return User;
}
