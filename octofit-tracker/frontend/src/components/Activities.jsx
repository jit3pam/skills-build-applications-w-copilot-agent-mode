import CollectionView from './CollectionView.jsx'

const columns = [
  { key: 'userId', label: 'User' },
  { key: 'type', label: 'Activity' },
  { key: 'durationMinutes', label: 'Duration (min)' },
  { key: 'calories', label: 'Calories' },
  { key: 'date', label: 'Date' },
]

export default function Activities() {
  return <CollectionView title="Activities" resource="activities" columns={columns} />
}