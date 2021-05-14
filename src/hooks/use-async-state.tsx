import { useState } from 'react'

function useAsyncState<T>() {
  const [data, setData] = useState<null | T>(null)
  const [error, setError] = useState<null | Error>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [success, setSuccess] = useState<boolean>(false)

  return {
    error,
    data,
    loading,
    success,
    setData,
    setError,
    setLoading,
    setSuccess
  }
}

export default useAsyncState
