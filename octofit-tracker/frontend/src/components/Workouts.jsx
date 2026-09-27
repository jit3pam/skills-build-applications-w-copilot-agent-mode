import CollectionView from './CollectionView.jsx'

const codespaceName = import.meta.env.VITE_CODESPACE_NAME?.trim()
const endpoint = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev/api/workouts/`
  : 'http://localhost:8000/api/workouts/'

const columns = [
  { key: 'title', label: 'Workout' },
  { key: 'difficulty', label: 'Difficulty' },
  { key: 'focus', label: 'Focus' },
  { key: 'durationMinutes', label: 'Duration (min)' },
]

export default function Workouts() {
  return <CollectionView title="Workouts" resource="workouts" endpoint={endpoint} columns={columns} />
}