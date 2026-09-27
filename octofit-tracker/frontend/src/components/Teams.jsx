import CollectionView from './CollectionView.jsx'

const columns = [
  { key: 'name', label: 'Team' },
  { key: 'sport', label: 'Sport' },
  { key: 'members', label: 'Members' },
  { key: 'captain', label: 'Captain' },
]

export default function Teams() {
  return <CollectionView title="Teams" resource="teams" columns={columns} />
}