import mongoose, { Schema, type InferSchemaType } from 'mongoose';

const teamSchema = new Schema(
  {
    name: { type: String, required: true, unique: true, trim: true },
    sport: { type: String, required: true, trim: true },
    members: { type: Number, required: true, min: 0 },
    captain: { type: String, required: true, trim: true },
  },
  { timestamps: true },
);

export type TeamDocument = InferSchemaType<typeof teamSchema>;

export const Team = mongoose.model('Team', teamSchema);
