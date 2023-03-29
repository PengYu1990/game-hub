import { HStack, Image, Input } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <HStack>
        <Image src={logo} boxSize="60px" />
        <Input />
      </HStack>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
