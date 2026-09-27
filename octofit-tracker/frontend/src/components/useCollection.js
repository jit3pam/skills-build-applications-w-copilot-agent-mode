import { useEffect, useState } from 'react'

function getCollection(payload) {
  if (Array.isArray(payload)) return payload
  if (Array.isArray(payload?.results)) return payload.results
  if (Array.isArray(payload?.data)) return payload.data
  if (Array.isArray(payload?.data?.results)) return payload.data.results
  return []
}

export default function useCollection(endpoint) {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const controller = new AbortController()

    async function loadCollection() {
      setLoading(true)
      setError('')

      try {
        const response = await fetch(endpoint, {
          signal: controller.signal,
        })
        if (!response.ok) throw new Error(`Request failed (${response.status})`)

        const payload = await response.json()
        setItems(getCollection(payload))
      } catch (fetchError) {
        if (fetchError.name !== 'AbortError') {
          setError(fetchError.message || 'Unable to load this collection.')
        }
      } finally {
        if (!controller.signal.aborted) setLoading(false)
      }
    }

    loadCollection()
    return () => controller.abort()
  }, [endpoint])

  return {
    items,
    loading,
    error,
    usingLocalApi: endpoint.startsWith('http://localhost:8000/'),
  }
}