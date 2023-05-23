import { Heading, useColorModeValue, VStack } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import TodoList from "./components/TaskList";

function App() {
  const color = useColorModeValue("linear(to-l, #7928CA, #FF0080)", "linear(to-r, red.500, yellow.500)");
  return (
    <>
      <NavBar />
      <VStack p={4} minH="100vh" pb={28}>
        <Heading
          p="5"
          fontWeight="extrabold"
          size="xl"
          bgGradient={color}
          bgClip="text"
        >
          Todo list
        </Heading>
        <TodoList />
      </VStack>
    </>
  );
}

export default App;
