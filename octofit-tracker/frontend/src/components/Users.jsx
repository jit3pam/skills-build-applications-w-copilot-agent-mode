import CollectionView from './CollectionView.jsx'

const columns = [
  { key: 'name', label: 'Name' },
  { key: 'email', label: 'Email' },
  { key: 'fitnessGoal', label: 'Fitness goal' },
  { key: 'team', label: 'Team' },
]

export default function Users() {
  return <CollectionView title="Users" resource="users" columns={columns} />
}