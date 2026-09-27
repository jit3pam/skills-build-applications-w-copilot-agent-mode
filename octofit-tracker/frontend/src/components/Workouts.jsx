import CollectionView from './CollectionView.jsx'

const columns = [
  { key: 'title', label: 'Workout' },
  { key: 'difficulty', label: 'Difficulty' },
  { key: 'focus', label: 'Focus' },
  { key: 'durationMinutes', label: 'Duration (min)' },
]

export default function Workouts() {
  return <CollectionView title="Workouts" resource="workouts" columns={columns} />
}