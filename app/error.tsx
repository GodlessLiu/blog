'use client' // Error boundaries must be Client Components
import Link from 'next/link'
import { useEffect } from 'react'

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <div className="w-full px-16 md:px-0 h-screen flex items-center justify-center">
            <div className="bg-background border flex flex-col items-center justify-center px-4 md:px-8 lg:px-24 py-8 rounded-lg shadow-2xl">
                <p className="text-6xl md:text-7xl lg:text-9xl font-bold tracking-wider">500</p>
                <p className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-wider mt-4">Server Error</p>
                <p className="mt-8 py-2 border-y-2 text-center">Whoops, something went wrong on our servers.</p>
                <p className='flex gap-8 mt-8 justify-end text-xl'>
                    <button className='btn flex gap-2 items-center' onClick={() => reset()}>
                        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="M18 28A12 12 0 1 0 6 16v6.2l-3.6-3.6L1 20l6 6l6-6l-1.4-1.4L8 22.2V16a10 10 0 1 1 10 10Z" /></svg>
                        Reset
                    </button>
                    <Link className='btn flex gap-2 items-center' href={`/`}>
                        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd"></path>
                        </svg>
                        Return
                    </Link>
                </p>
            </div>
        </div>
    )
}