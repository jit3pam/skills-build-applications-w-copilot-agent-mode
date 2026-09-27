import mongoose, { Schema, type InferSchemaType } from 'mongoose';

const leaderboardEntrySchema = new Schema(
  {
    rank: { type: Number, required: true, min: 1 },
    name: { type: String, required: true, trim: true },
    points: { type: Number, required: true, min: 0 },
    streak: { type: Number, required: true, min: 0 },
  },
  { timestamps: true },
);

export type LeaderboardEntryDocument = InferSchemaType<typeof leaderboardEntrySchema>;

export const LeaderboardEntry = mongoose.model('LeaderboardEntry', leaderboardEntrySchema);
