import { useState } from 'react'

export function App() {
  const [count, setCount] = useState<number>(1)

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <button
        className="rounded bg-blue-500 px-4 py-2 text-white outline-offset-4 transition-colors ease-in-out focus-within:outline-blue-500 hover:bg-blue-600 active:bg-blue-400"
        onClick={() => setCount(count + 1)}>
        {'Count: ' + count}
      </button>
    </div>
  )
}

export default App
