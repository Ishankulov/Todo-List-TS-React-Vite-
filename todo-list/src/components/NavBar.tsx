import { Heading, HStack, useColorModeValue } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  const headingText = useColorModeValue("linear(to-l, #7928CA, #FF0080)", "linear(to-r, red.500, yellow.500)");
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
