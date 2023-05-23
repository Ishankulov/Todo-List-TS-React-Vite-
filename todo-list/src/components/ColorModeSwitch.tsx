import {
  HStack,
  Switch,
  useColorMode,
  useColorModeValue,
  Heading,
} from "@chakra-ui/react";

interface Props {
  text: string;
}

const ColorModeSwitch = ({ text }: Props) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const color = useColorModeValue("linear(to-l, #7928CA, #FF0080)", "linear(to-r, red.500, yellow.500)");
  return (
    <HStack>
      <Switch
        colorScheme={"green"}
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <Heading
        whiteSpace={"nowrap"}
        bgClip="text"
        fontSize="xl"
        fontWeight="extrabold"
        bgGradient={color}
      >
        {text}
      </Heading>
    </HStack>
  );
};

export default ColorModeSwitch;
