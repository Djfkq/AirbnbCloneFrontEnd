import {
    Box,
    Button,
    Input,
    InputGroup,
    InputLeftElement,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    VStack,
  } from "@chakra-ui/react";
  import { FaLock, FaUserNinja, FaEnvelope, FaUserSecret } from "react-icons/fa";
  import SocialLogin from "./SocialLogin";
  
  interface SignUpModalProps {
    isOpen: boolean;
    onClose: () => void;
  }
  
  export default function SignUpModal({ isOpen, onClose }: SignUpModalProps) {
    return (
      <Modal motionPreset={"none"} isOpen={isOpen} onClose={onClose}>
        {/* motionPreset : scale, slideInRight, slideInLeft 등 */}
        <ModalOverlay /* 배경화면 어두워지는것 */ />
        <ModalContent>
          <ModalHeader>Sign up</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack>
            <InputGroup>
                <InputLeftElement
                  children={
                    <Box color="gray.500">
                      <FaUserSecret />
                    </Box>
                  }
                />
                <Input placeholder="Name" variant={"filled"} />
              </InputGroup>
              <InputGroup>
                <InputLeftElement
                  children={
                    <Box color="gray.500">
                      <FaEnvelope />
                    </Box>
                  }
                />
                <Input placeholder="Email" variant={"filled"} />
              </InputGroup>
              <InputGroup>
                <InputLeftElement
                  children={
                    <Box color="gray.500">
                      <FaUserNinja />
                    </Box>
                  }
                />
                <Input placeholder="Username" variant={"filled"} />
              </InputGroup>
              <InputGroup>
                <InputLeftElement
                  children={
                    <Box color="gray.500">
                      <FaLock />
                    </Box>
                  }
                />
                <Input placeholder="Password" variant={"fileed"} />
              </InputGroup>
            </VStack>
            <Button mt={4} colorScheme={"red"} w={"100%"}>
              Sign Up
            </Button>
            <SocialLogin />
          </ModalBody>
          {/* <ModalFooter>
          <Button colorScheme={"red"}>Close</Button>
        </ModalFooter> */}
        </ModalContent>
      </Modal>
    );
  }
  