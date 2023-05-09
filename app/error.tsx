"use client"

export default function error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  return (
    <div>
      <h1>{error.message}</h1>
      <button onClick={reset}>Retry</button>
    </div>
  )
}
