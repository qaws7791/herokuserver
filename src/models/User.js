import mongoose,{ Schema } from "mongoose"; 
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const UserSchema = new Schema({
    username: String,
    hashedPassword: String,
});

//인스턴스 함수
UserSchema.methods.setPassword = async function(password) {
    const hash = await bcrypt.hash(password, 10);
    this.hashedPassword = hash;
};

UserSchema.methods.checkPassword = async function(password) {
    const result = await bcrypt.compare(password, this.hashedPassword);
    return result;
};

UserSchema.methods.generateToken = function() {
    const token = jwt.sign(
        {
            _id: this.id,
            username: this.username,
        },
        "33e86a4534354864399343",
        {
            expiresIn: '7d',
        },
    );
    return token;
};

//스태틱 함수 모델에 사용
UserSchema.statics.findByUsername = function(username) {
    return this.findOne({ username });
};

export const User = mongoose.model('User', UserSchema);