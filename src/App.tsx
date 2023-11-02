import { Box, Button, Code, Flex, Text, Title } from '@mantine/core'
import { observer } from 'mobx-react-lite'

import reactLogo from './assets/react.svg'
import { useStores } from './stores'

export const App = observer(() => {
  const { appStore } = useStores()

  return (
    <Flex w="100vw" h="100vh" direction="column" gap="md" justify="center" align="center" p="md">
      <Flex gap="md">
        <Box component="a" href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <Box component="img" h="8em" p="md" src="/vite.svg" alt="Vite logo" />
        </Box>
        <Box component="a" href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <Box component="img" h="8em" p="md" src={reactLogo} alt="React logo" />
        </Box>
      </Flex>
      <Title order={1}>Vite + React</Title>
      <Button variant="outline" onClick={() => appStore.increase()}>
        count is {appStore.count}
      </Button>
      <Text>
        Edit <Code>src/App.tsx</Code> and save to test HMR
      </Text>
      <Text c="gray">Click on the Vite and React logos to learn more</Text>
    </Flex>
  )
})

export default App
