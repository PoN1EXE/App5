import { useState, useCallback } from 'react'

export const useFetching = <T extends (...args: any[]) => Promise<any>>(callback: T) => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const fetching = useCallback(
    async (...args: Parameters<T>) => {
      try {
        setIsLoading(true)
        await callback(...args)
      } catch (e: any) {
        setError(e.message)
      } finally {
        setIsLoading(false)
      }
    },
    [callback]
  )

  return [fetching, isLoading, error] as const
}
