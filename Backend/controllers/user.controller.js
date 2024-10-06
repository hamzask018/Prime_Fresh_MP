/* eslint-disable no-undef */
import User from "../models/user.model.js"; 
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    const {
      username,
      password,
      email,
      firstName,
      lastName,
      phoneNumber,
      address,
      userRole,
    } = req.body;

    if (
      !username ||
      !password ||
      !email ||
      !firstName ||
      !lastName ||
      !phoneNumber ||
      !address || 
      !address.street || 
      !address.city || 
      !address.state || 
      !address.zipCode || 
      !address.country ||
      !userRole
    ) {
      return res.status(400).json({
        message: "Something is missing",
        success: false,
      });
    }

    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        message: "User already exists with this email",
        success: false,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
      username,
      email,
      password: hashedPassword,
      firstName,
      lastName,
      phoneNumber,
      address: {
        street: address.street,
        city: address.city,
        state: address.state,
        zipCode: address.zipCode,
        country: address.country,
      },
      userRole,
    });

    return res.status(201).json({
      message: "Account Created successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Server error",
      success: false,
    });
  }
};


export const login = async (req, res) => {
  try {
    const { email, password, userRole } = req.body;
    if (!email || !password || !userRole) {
      return res.status(400).json({
        message: "Something is missing",
        success: false,
      });
    }

    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "Incorrect email or password",
        success: false,
      });
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      return res.status(400).json({
        message: "Incorrect Email or Password",
        success: false,
      });
    }

    if (userRole !== user.userRole) {  
      return res.status(400).json({
        message: "Account doesn't exist with current role",
        success: false,
      });
    }

    const tokenData = {
      userId: user._id,
    };

    const token = await jwt.sign(tokenData, process.env.SECRET_KEY, {
      expiresIn: "1d",
    });

    user = {
      _id: user._id,
      username: user.username,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      phoneNumber: user.phoneNumber,
      address: user.address,
      userRole: user.userRole,
      profile: user.profile,
    };

    return res.status(200)
      .cookie("token", token, {
        maxAge: 1 * 24 * 60 * 60 * 1000,
        httpOnly: true,  
        sameSite: "strict",
      })
      .json({
        message: `Welcome back ${user.firstName}`,
        user,
        success: true,
      });
  } catch (error) {
    console.log(error);
  }
};

export const logout = async (req, res) => {
  try {
    return res.status(200).cookie("token", "", { maxAge: 0 }).json({
      message: "Logged out successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateProfile = async (req, res) => {
    try {
      const { email, firstName, lastName, phoneNumber, address, profilePhoto } = req.body;
      const userId = req.id;
  
      let user = await User.findById(userId);
  
      if (!user) {
        return res.status(400).json({
          message: "User not found",
          success: false,
        });
      }
  
      if (firstName) user.firstName = firstName;
      if (email) user.email = email;
      if (phoneNumber) user.phoneNumber = phoneNumber;
      if (lastName) user.lastName = lastName;
  
     
      if (address) {
        user.address = {
          street: address.street || user.address.street,
          city: address.city || user.address.city,
          state: address.state || user.address.state,
          zipCode: address.zipCode || user.address.zipCode,
          country: address.country || user.address.country
        };
      }
  
      if (profilePhoto) user.profile.profilePhoto = profilePhoto;
  
      await user.save();
  
      user = {
        _id: user._id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        phoneNumber: user.phoneNumber,
        address: user.address,
        userRole: user.userRole,
        profile: user.profile,
      };
  
      return res.status(200).json({
        message: "Profile updated successfully",
        user,
        success: true,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: "Server error",
        success: false,
      });
    }
  };
  