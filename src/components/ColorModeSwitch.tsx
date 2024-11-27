import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack>
      <Switch onChange={toggleColorMode} />
      <Text>{colorMode === "dark" ? "Dark" : "Light"}</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
