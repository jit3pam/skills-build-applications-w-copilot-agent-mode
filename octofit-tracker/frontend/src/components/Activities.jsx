import CollectionView from './CollectionView.jsx'

const codespaceName = import.meta.env.VITE_CODESPACE_NAME?.trim()
const endpoint = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev/api/activities/`
  : 'http://localhost:8000/api/activities/'

const columns = [
  { key: 'userId', label: 'User' },
  { key: 'type', label: 'Activity' },
  { key: 'durationMinutes', label: 'Duration (min)' },
  { key: 'calories', label: 'Calories' },
  { key: 'date', label: 'Date' },
]

export default function Activities() {
  return <CollectionView title="Activities" resource="activities" endpoint={endpoint} columns={columns} />
}