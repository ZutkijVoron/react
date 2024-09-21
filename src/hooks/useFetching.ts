import { useState } from 'react'

export const useFetching = (foo: { (...args: any[]): any }) => {
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState('')
	const fetching = async (...args: any[]) => {
		try {
			setIsLoading(true)
			await foo(...args)
		} catch (e: unknown) {
			setError((e as Error).message)
		} finally {
			setIsLoading(false)
		}
	}
	return [fetching, isLoading, error] as const
}
