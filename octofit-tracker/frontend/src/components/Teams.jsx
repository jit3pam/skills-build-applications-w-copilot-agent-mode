import CollectionView from './CollectionView.jsx'

const codespaceName = import.meta.env.VITE_CODESPACE_NAME?.trim()
const endpoint = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev/api/teams/`
  : 'http://localhost:8000/api/teams/'

const columns = [
  { key: 'name', label: 'Team' },
  { key: 'sport', label: 'Sport' },
  { key: 'members', label: 'Members' },
  { key: 'captain', label: 'Captain' },
]

export default function Teams() {
  return <CollectionView title="Teams" resource="teams" endpoint={endpoint} columns={columns} />
}