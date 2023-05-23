import { Heading, HStack, useColorModeValue } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  const headingText = useColorModeValue("linear(to-l, #7928CA, #FF0080)", "linear(red.100 0%, orange.100 25%, yellow.100 50%)");
  return (
    <HStack p={"10"} justifyContent={"space-between"}>
      <Heading
        bgGradient={headingText}
        bgClip="text"
        fontSize="2xl"
        fontWeight="extrabold"
      >
        IMA Todo List
      </Heading>
      <ColorModeSwitch text={"Dark Mode"}/>
    </HStack>
  );
};

export default NavBar;
