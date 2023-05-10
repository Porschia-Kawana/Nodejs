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
        },
        phone: { type: DataTypes.STRING },
    }, {
        timestamps: false
    });

    User.associate = ({ Event }) => {
        User.hasMany(Event, {
            foreignKey: "created_by",
        });
    }
    return User;
}
