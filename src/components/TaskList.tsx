import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import {
  Button,
  HStack,
  Input,
  StackDivider,
  VStack,
  Text,
} from "@chakra-ui/react";

interface Todo {
  id: string;
  text: string;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputText, setInputText] = useState("");
  const [editingTodoId, setEditingTodoId] = useState<string | null>(null);
  const [editingTodoText, setEditingTodoText] = useState("");

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (inputText.trim() !== "") {
      const newTodo: Todo = {
        id: nanoid(),
        text: inputText,
      };
      setTodos((prevTodos) => [...prevTodos, newTodo]);
      setInputText("");
    }
  };

  const deleteTodo = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const startEditingTodo = (id: string, text: string) => {
    setEditingTodoId(id);
    setEditingTodoText(text);
  };

  const cancelEditingTodo = () => {
    setEditingTodoId(null);
    setEditingTodoText("");
  };

  const updateTodo = () => {
    if (editingTodoText.trim() !== "") {
      setTodos((prevTodos) =>
        prevTodos.map((todo) => {
          if (todo.id === editingTodoId) {
            return { ...todo, text: editingTodoText };
          }
          return todo;
        })
      );
      setEditingTodoId(null);
      setEditingTodoText("");
    }
  };

  return (
    <>
      <HStack mt="4" mb="4">
        <Input
          h="46"
          borderColor={"transparent"}
          variant="filled"
          placeholder="Enter your task"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <Button
          colorScheme="twitter"
          px="8"
          pl="10"
          pr="10"
          h="46"
          type="submit"
          onClick={addTodo}
        >
          Add Todo
        </Button>
      </HStack>
      <VStack
        divider={<StackDivider />}
        borderColor="gray.100"
        borderWidth="2px"
        p="5"
        borderRadius="lg"
        w="100%"
        maxW={{ base: "90vw", sm: "80vw", lg: "50vw", xl: "30vw" }}
        alignItems="stretch"
      >
        {todos.map((todo) => (
          <HStack justifyContent={"space-between"}>
            <Text
              w="100%"
              p="8px"
              borderRadius="lg"
              cursor="pointer"
              key={todo.id}
            >
              {todo.text}
            </Text>
            {editingTodoId === todo.id ? (
              <>
                <input
                  type="text"
                  value={editingTodoText}
                  onChange={(e) => setEditingTodoText(e.target.value)}
                />
                <button onClick={updateTodo}>Save</button>
                <button onClick={cancelEditingTodo}>Cancel</button>
              </>
            ) : (
              <>
                <Button
                  colorScheme="orange"
                  onClick={() => startEditingTodo(todo.id, todo.text)}
                >
                  Edite
                </Button>
                <Button colorScheme="red" onClick={() => deleteTodo(todo.id)}>
                  Delete
                </Button>
              </>
            )}
          </HStack>
        ))}
      </VStack>
    </>
  );
};

export default TodoList;
