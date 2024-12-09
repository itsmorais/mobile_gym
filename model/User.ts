import mongoose, { Document, Schema, model, Types } from "mongoose";

export interface UserDocument extends Document {
  _id: string;
  email: string;
  password: string;
  name: string;
  treinos: Types.ObjectId[];
  phone?: string;
  image?: string;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<UserDocument>({
  email: {
    type: String,
    unique: true,
    required: [true, "Email is required"],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Email is invalid",
    ],
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: [true, "Name is required"]
  },
  treinos: [{ type: Types.ObjectId, ref: "Treino" }],

},
  {
    timestamps: true,
  }
);

const User = mongoose.models?.User || model<UserDocument>('User', UserSchema);
export default User;