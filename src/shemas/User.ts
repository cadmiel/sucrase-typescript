import { Schema, model, Document } from 'mongoose'
import { UserInterface } from './../interfaces/UserInterface'

interface UserModel extends Document, UserInterface {

}

const UserSchema = new Schema({
    name: String,
    lastname: String,
    email: String,
}, { timestamps: true })

export default model<UserModel>('User', UserSchema)