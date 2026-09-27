import mongoose from 'mongoose';
import { Activity } from '../models/Activity.js';
import { LeaderboardEntry } from '../models/LeaderboardEntry.js';
import { Team } from '../models/Team.js';
import { User } from '../models/User.js';
import { Workout } from '../models/Workout.js';

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await mongoose.connect(connectionString);

    console.log('Connected to octofit_db');

    await Promise.all([
      User.deleteMany({}),
      Team.deleteMany({}),
      Activity.deleteMany({}),
      LeaderboardEntry.deleteMany({}),
      Workout.deleteMany({}),
    ]);

    const users = await User.insertMany([
      {
        name: 'Ava Johnson',
        email: 'ava@example.com',
        fitnessGoal: 'Build endurance',
        team: 'Blue Sharks',
      },
      {
        name: 'Liam Chen',
        email: 'liam@example.com',
        fitnessGoal: 'Strength training',
        team: 'Sunset Runners',
      },
      {
        name: 'Mia Patel',
        email: 'mia@example.com',
        fitnessGoal: 'Improve mobility',
        team: 'Peak Crew',
      },
    ]);

    await Team.insertMany([
      { name: 'Blue Sharks', sport: 'Running', members: 12, captain: 'Ava Johnson' },
      { name: 'Sunset Runners', sport: 'Trail', members: 9, captain: 'Liam Chen' },
      { name: 'Peak Crew', sport: 'CrossFit', members: 15, captain: 'Mia Patel' },
    ]);

    await Activity.insertMany([
      { userId: users[0]._id, type: 'Run', durationMinutes: 45, calories: 420, date: '2026-09-20' },
      { userId: users[1]._id, type: 'Lift', durationMinutes: 60, calories: 500, date: '2026-09-21' },
      { userId: users[2]._id, type: 'Yoga', durationMinutes: 35, calories: 180, date: '2026-09-22' },
    ]);

    await LeaderboardEntry.insertMany([
      { rank: 1, name: 'Ava Johnson', points: 960, streak: 7 },
      { rank: 2, name: 'Liam Chen', points: 910, streak: 5 },
      { rank: 3, name: 'Mia Patel', points: 880, streak: 4 },
    ]);

    await Workout.insertMany([
      { title: 'Tempo Run', difficulty: 'Intermediate', focus: 'Cardio', durationMinutes: 40 },
      { title: 'Upper Body Blast', difficulty: 'Advanced', focus: 'Strength', durationMinutes: 50 },
      { title: 'Mobility Reset', difficulty: 'Beginner', focus: 'Recovery', durationMinutes: 25 },
    ]);

    console.log('Database seeding complete');
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
