import CollectionView from './CollectionView.jsx'

const codespaceName = import.meta.env.VITE_CODESPACE_NAME?.trim()
const endpoint = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev/api/leaderboard/`
  : 'http://localhost:8000/api/leaderboard/'

const columns = [
  { key: 'rank', label: 'Rank' },
  { key: 'name', label: 'Athlete' },
  { key: 'points', label: 'Points' },
  { key: 'streak', label: 'Streak' },
]

export default function Leaderboard() {
  return <CollectionView title="Leaderboard" resource="leaderboard" endpoint={endpoint} columns={columns} />
}