import { useCallback, useState } from 'react'
interface Iexecute {
  uri?: string
  gql: string
  key?: string
}

const fetcher = async (url: string, gql: string) => {
  const response = await fetch(url, {
    method: 'post',
    body: JSON.stringify(gql),
    headers: { 'Content-Type': 'application/json' }
  })

  return await response.json()
}

const useGraphqlApi = (baseUri?: string, isMulti?: false) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [result, setResult] = useState<Object | null>(null)

  const execute = useCallback(async ({ uri, gql, key }: Iexecute) => {
    try {
      setLoading(true)
      const url = baseUri || uri || ''
      const data = await fetcher(url, gql)
      if (!isMulti) setResult(data)

      setResult((prevState) => ({ ...prevState, [key as string]: data }))
    } catch (e) {
      setError(e)
    }
    setLoading(false)
  }, [])

  return { error, result, loading, execute }
}

export default useGraphqlApi
