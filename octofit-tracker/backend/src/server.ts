import express from 'express';
import './config/database.js';

const app = express();
const port = Number(process.env.PORT) || 8000;
const codespaceName = process.env.CODESPACE_NAME;
const apiBaseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : 'http://localhost:8000';

app.use(express.json());

const users = [
  {
    id: 1,
    name: 'Ava Johnson',
    email: 'ava@example.com',
    fitnessGoal: 'Build endurance',
    team: 'Blue Sharks',
  },
  {
    id: 2,
    name: 'Liam Chen',
    email: 'liam@example.com',
    fitnessGoal: 'Strength training',
    team: 'Sunset Runners',
  },
  {
    id: 3,
    name: 'Mia Patel',
    email: 'mia@example.com',
    fitnessGoal: 'Improve mobility',
    team: 'Peak Crew',
  },
];

const teams = [
  { id: 1, name: 'Blue Sharks', sport: 'Running', members: 12, captain: 'Ava Johnson' },
  { id: 2, name: 'Sunset Runners', sport: 'Trail', members: 9, captain: 'Liam Chen' },
  { id: 3, name: 'Peak Crew', sport: 'CrossFit', members: 15, captain: 'Mia Patel' },
];

const activities = [
  { id: 1, userId: 1, type: 'Run', durationMinutes: 45, calories: 420, date: '2026-09-20' },
  { id: 2, userId: 2, type: 'Lift', durationMinutes: 60, calories: 500, date: '2026-09-21' },
  { id: 3, userId: 3, type: 'Yoga', durationMinutes: 35, calories: 180, date: '2026-09-22' },
];

const leaderboard = [
  { rank: 1, name: 'Ava Johnson', points: 960, streak: 7 },
  { rank: 2, name: 'Liam Chen', points: 910, streak: 5 },
  { rank: 3, name: 'Mia Patel', points: 880, streak: 4 },
];

const workouts = [
  { id: 1, title: 'Tempo Run', difficulty: 'Intermediate', focus: 'Cardio', durationMinutes: 40 },
  { id: 2, title: 'Upper Body Blast', difficulty: 'Advanced', focus: 'Strength', durationMinutes: 50 },
  { id: 3, title: 'Mobility Reset', difficulty: 'Beginner', focus: 'Recovery', durationMinutes: 25 },
];

const respondWithCollection = (response: express.Response, collection: unknown[], name: string) => {
  response.json({
    count: collection.length,
    results: collection,
    apiBaseUrl,
    name,
  });
};

app.get('/api', (_request, response) => {
  response.json({
    message: 'Octofit Tracker API',
    endpoints: [
      '/api/health',
      '/api/users/',
      '/api/teams/',
      '/api/activities/',
      '/api/leaderboard/',
      '/api/workouts/',
    ],
    apiBaseUrl,
  });
});

app.get('/api/health', (_request, response) => {
  response.json({ status: 'ok', apiBaseUrl });
});

app.get('/api/users', (_request, response) => {
  respondWithCollection(response, users, 'users');
});

app.get('/api/users/', (_request, response) => {
  respondWithCollection(response, users, 'users');
});

app.get('/api/teams', (_request, response) => {
  respondWithCollection(response, teams, 'teams');
});

app.get('/api/teams/', (_request, response) => {
  respondWithCollection(response, teams, 'teams');
});

app.get('/api/activities', (_request, response) => {
  respondWithCollection(response, activities, 'activities');
});

app.get('/api/activities/', (_request, response) => {
  respondWithCollection(response, activities, 'activities');
});

app.get('/api/leaderboard', (_request, response) => {
  respondWithCollection(response, leaderboard, 'leaderboard');
});

app.get('/api/leaderboard/', (_request, response) => {
  respondWithCollection(response, leaderboard, 'leaderboard');
});

app.get('/api/workouts', (_request, response) => {
  respondWithCollection(response, workouts, 'workouts');
});

app.get('/api/workouts/', (_request, response) => {
  respondWithCollection(response, workouts, 'workouts');
});

app.listen(port, () => {
  console.log(`Octofit Tracker API listening on port ${port}`);
  console.log(`API base URL: ${apiBaseUrl}`);
});