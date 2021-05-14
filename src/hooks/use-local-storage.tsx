import { useCallback, useEffect, useState } from 'react'

import { tryParse } from '../utils'

const writeToLocalStorage = (key: string, data: any) => {
  window.localStorage.setItem(key, JSON.stringify(data))
}

const clearLocalStorageByKey = (key: string) => {
  window.localStorage.removeItem(key)
}

const useLocalStorage = <T,>(
  key: string,
  defaultValue?: T
): [T | undefined | null, (val: T) => void, () => void] => {
  const [data, setData] = useState<T | undefined | null>(undefined)
  const set = useCallback(
    (localStorageData) => writeToLocalStorage(key, localStorageData),
    [key]
  )
  const remove = useCallback(() => clearLocalStorageByKey(key), [key])

  useEffect(() => {
    const currentData = window.localStorage.getItem(key)

    if (currentData == null && defaultValue) {
      set(defaultValue)
    }

    if (currentData != null) {
      const parsedData = tryParse(currentData)
      if (parsedData) {
        setData(parsedData)
      }
    }
  }, [defaultValue, key, set])

  const checkLocalStorage = useCallback(
    (e: StorageEvent) => {
      if (e.storageArea === window.localStorage) {
        if (key === e.key && e.newValue) {
          setData(tryParse(e.newValue))
        }
      }
    },
    [key]
  )

  useEffect(() => {
    window.addEventListener('storage', checkLocalStorage)
    return () => window.removeEventListener('storage', checkLocalStorage)
  }, [checkLocalStorage, key])

  return [data, set, remove]
}

export default useLocalStorage
