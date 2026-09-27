import CollectionView from './CollectionView.jsx'

const columns = [
  { key: 'rank', label: 'Rank' },
  { key: 'name', label: 'Athlete' },
  { key: 'points', label: 'Points' },
  { key: 'streak', label: 'Streak' },
]

export default function Leaderboard() {
  return <CollectionView title="Leaderboard" resource="leaderboard" columns={columns} />
}