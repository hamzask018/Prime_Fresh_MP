import mongoose from "mongoose";

const AddressSchema = new mongoose.Schema({
    street: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    zipCode: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    }
}, { _id: false });

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,  
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    address: {
        type: [AddressSchema], 
    },
    lastLoginDate: {
        type: Date,
    },
    userRole: {
        type: String,
        enum: ['customer', 'admin'],  
        default: 'customer',
    },
    profile:{
        profilePhoto:{
            type:String,
            default:""
        }
    }
}, { timestamps: true });

const User = mongoose.model('User', UserSchema);
export default User;
