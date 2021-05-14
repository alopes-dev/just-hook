import { useCallback, useState } from 'react'
type UseApiType = {
  asyncFunc(...params: any[]): Promise<Object>
}

const useApi = ({ asyncFunc }: UseApiType) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [result, setResult] = useState<Object | null>(null)

  const execute = useCallback(
    async (...params) => {
      try {
        setLoading(true)
        const response = await asyncFunc(...params)
        setResult(response)
      } catch (e) {
        setError(e)
      }
      setLoading(false)
    },
    [asyncFunc]
  )

  return { error, result, loading, execute }
}

export default useApi
