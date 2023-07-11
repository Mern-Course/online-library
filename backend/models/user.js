const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
const crypto = require("crypto");

const schema = new mongoose.Schema({
  name: {
    type: "String",
    maxLength: 20,
    minLength: 4,
    required: [true, "User must have a name"],
  },
  email: {
    type: "String",
    validate: {
      validator: validator.isEmail,
      message: "Incorrect email format",
    },
    required: [true, "User must have an email"],
    unique: true,
  },
  password: {
    type: "String",
    minLength: 12,
    required: [true, "User must provide a password"],
    select: false,
  },
  confirmPassword: {
    type: "String",
    minLength: 12,
    required: [true, "User must provide password confirmation"],
    validate: {
      validator: function () {
        return this.password === this.confirmPassword;
      },
      message: "Both passwords do not match",
    },
  },
  role: {
    type: "String",
    enum: ["user", "admin", "employee"],
    default: "user",
  },
  phone: {
    type: "String",
    minLength: 10,
    maxLength: 10,
    required: [true, "User must have a phone number"],
  },
  active: {
    type: Boolean,
    default: true,
    select: false,
  },
  photo: {
    type: "String",
    default: "default.png",
  },
  booksIssued: [{
    type: mongoose.Schema.ObjectId,
    ref: "book",
  }],
  fine: {
    type: Number,
    min: 0,
    default: 0,
  },
  passwordChangedAt: Date,
  passwordResetToken: String,
  resetTokenExpiresIn: Date,
});

schema.methods.correctPassword = async (pass, userPass) =>
  await bcrypt.compare(pass, userPass);

schema.methods.changedPasswordAfter = function (jwtTime) {
  if (this.passwordChangedAt === undefined) return false;

  const pwdTime = parseInt(this.passwordChangedAt.getTime() / 1000, 10);
  return pwdTime > jwtTime;
};

schema.methods.createResetToken = function () {
  const resetToken = crypto.randomBytes(32).toString("hex");
  this.passwordResetToken = crypto
    .createHash("sha512")
    .digest(resetToken)
    .toString("hex");
  this.resetTokenExpiresIn = Date.now() + 10 * 60 * 1000;
  return resetToken;
};

schema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  this.confirmPassword = undefined;
  next();
});

schema.pre("save", async function (next) {
  if (!this.isModified("password") || this.isNew) return next();
  this.passwordChangedAt = Date.now() - 1000;
  next();
});

schema.pre(/^find/, function (next) {
  this.find({ active: { $ne: false } });
  next();
});

schema.post("save", (doc, next) => {
  // console.log(doc);
  next();
});

const User = mongoose.model("User", schema);
module.exports = User;
