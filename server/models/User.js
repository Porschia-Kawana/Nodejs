module.exports = (sequelize, DataTypes) => {
    let User = sequelize.define('User', {
        username: { type: DataTypes.STRING, allowNull: false },
        hash: { type: DataTypes.STRING, allowNull: false },
        name: { type: DataTypes.STRING, allowNull: false },
        email: {
            type: DataTypes.STRING,
            validate: {
                isEmail: true,
            },
            allowNull: false,
        },
        created_at: { type: DataTypes.DATE },
        updated_at: { type: DataTypes.DATE },
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
