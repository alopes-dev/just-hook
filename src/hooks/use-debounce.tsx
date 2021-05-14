import AwesomeDebouncePromise from 'awesome-debounce-promise'
import { useMemo } from 'react'

type DebounceFuncType = () => void

const debounceAction = (actionFunc: DebounceFuncType, delay: number) =>
  AwesomeDebouncePromise(actionFunc, delay)

function useDebounce(func: DebounceFuncType, delay: number) {
  const debouncedFunc = useMemo(
    () => debounceAction(func, delay),
    [delay, func]
  )

  return debouncedFunc
}

export default useDebounce
