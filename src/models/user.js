const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
    },
    EmailId: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        min: 18,
        max: 35,
        required: true
    },
    gender: {
        type: String,
        required: true,
        validate(data) {
            if (!["Male", "Female", "Others"].includes(data)) {
                throw new Error("Gender is not correct");
            }
        }
    }
}, { timestamps: true });

const UserModel = mongoose.model("user", UserSchema);
// Here we are passing the collection name.

module.exports = UserModel;