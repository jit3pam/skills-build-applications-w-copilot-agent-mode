import useCollection from './useCollection.js'

function formatValue(value) {
  if (value == null || value === '') return '-'
  if (typeof value === 'object') return JSON.stringify(value)
  return value
}

export default function CollectionView({ title, resource, columns }) {
  const { items, loading, error, usingLocalApi } = useCollection(resource)

  return (
    <section aria-labelledby={`${resource}-heading`}>
      <div className="page-heading">
        <div>
          <p className="eyebrow">OCTOFIT TRACKER</p>
          <h1 id={`${resource}-heading`}>{title}</h1>
        </div>
        <span className="record-count" aria-live="polite">
          {loading ? 'Loading' : `${items.length} ${items.length === 1 ? 'record' : 'records'}`}
        </span>
      </div>

      {usingLocalApi && (
        <div className="alert alert-warning" role="status">
          VITE_CODESPACE_NAME is unset. Using the local API at http://localhost:8000.
        </div>
      )}
      {error && (
        <div className="alert alert-danger" role="alert">
          Could not load {title.toLowerCase()}: {error}
        </div>
      )}

      <div className="table-responsive collection-table-wrap">
        <table className="table collection-table align-middle mb-0">
          <thead>
            <tr>
              {columns.map(({ key, label }) => <th key={key} scope="col">{label}</th>)}
            </tr>
          </thead>
          <tbody>
            {loading && (
              <tr><td className="table-message" colSpan={columns.length}>Loading {title.toLowerCase()}...</td></tr>
            )}
            {!loading && !error && items.length === 0 && (
              <tr><td className="table-message" colSpan={columns.length}>No {title.toLowerCase()} found.</td></tr>
            )}
            {!loading && items.map((item, index) => (
              <tr key={item._id ?? item.id ?? item.rank ?? index}>
                {columns.map(({ key }) => <td key={key}>{formatValue(item[key])}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}