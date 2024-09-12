const { Schema, model } = require('mongoose');

const usersSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true, versionKey: true },
);

export const UsersCollection = model('users', usersSchema);
