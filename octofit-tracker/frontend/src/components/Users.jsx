import CollectionView from './CollectionView.jsx'

const codespaceName = import.meta.env.VITE_CODESPACE_NAME?.trim()
const endpoint = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev/api/users/`
  : 'http://localhost:8000/api/users/'

const columns = [
  { key: 'name', label: 'Name' },
  { key: 'email', label: 'Email' },
  { key: 'fitnessGoal', label: 'Fitness goal' },
  { key: 'team', label: 'Team' },
]

export default function Users() {
  return <CollectionView title="Users" resource="users" endpoint={endpoint} columns={columns} />
}