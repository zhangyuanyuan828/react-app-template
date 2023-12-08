import { Button, Center } from '@mantine/core'
import { useState } from 'react'

export function App() {
  const [count, setCount] = useState<number>(1)

  return (
    <Center w="100vw" h="100vh">
      <Button onClick={() => setCount(count + 1)}>{'Count: ' + count}</Button>
    </Center>
  )
}

export default App
