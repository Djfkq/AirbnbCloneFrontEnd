import {
  Box,
  Button,
  HStack,
  IconButton,
  LightMode,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { FaAirbnb, FaMoon, FaSun } from "react-icons/fa";
import LoginModal from "./LoginModal";
import SignUpModal from "./SignUpModal";

export default function Header() {
  const {
    isOpen: isLoginOpen,
    onClose: onLoginClose,
    onOpen: onLoginOpen,
  } = useDisclosure();
  const {
    isOpen: isSignUpOpen,
    onClose: onSignUpClose,
    onOpen: onSignUpOpen,
  } = useDisclosure();

  const { colorMode, toggleColorMode } = useColorMode();
  const logoColor = useColorModeValue("red.500", "red.200"); //useColorModeValue("LightMode경우", "DarkMode경우")
  const Icon = useColorModeValue(FaMoon, FaSun);  //컴포넌트는 반드시 대문자로 시작해야함

  return (
    <HStack
      justifyContent={"space-between"}
      py={"5"} /* 10 : 10 * 4 px */
      px={"10"}
      borderBottomWidth={1}
    >
      <Box color={logoColor}>
        <FaAirbnb size={"48"} />
      </Box>
      <HStack spacing={2} /* 2 rem */>
        <IconButton
          onClick={toggleColorMode}
          variant={"ghost"}
          aria-label="Toggle dark mode"
          // icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
          icon={<Icon/>}
        />
        <Button onClick={onLoginOpen}>Log in</Button>
        <LightMode /* 언제나 LightMode로 적용 , DarkMode : 언제나 DarkMode 적용*/
        >
          <Button onClick={onSignUpOpen} colorScheme={"red"}>
            Sign up
          </Button>
        </LightMode>
      </HStack>
      <LoginModal isOpen={isLoginOpen} onClose={onLoginClose} />
      <SignUpModal isOpen={isSignUpOpen} onClose={onSignUpClose} />
    </HStack>
  );
}
