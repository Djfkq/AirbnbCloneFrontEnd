import { Box, Button, Divider, HStack, Text, VStack } from "@chakra-ui/react";
import { FaComment, FaGithub } from "react-icons/fa";

export default function SocialLogin() {
  return (
    <Box mb={4}>
      <HStack my={8}>
        <Divider />
        <Text
          textTransform={"uppercase"}
          color="gray.500"
          fontSize={"xs"}
          as="b" /* as="b" : bold 적용*/
        >
          Or
        </Text>
        <Divider />
      </HStack>
      <VStack>
        <Button w={"100%"} leftIcon={<FaGithub />} colorScheme={"telegram"}>
          Continue With Github
        </Button>
        <Button w={"100%"} leftIcon={<FaComment />} colorScheme={"yellow"}>
          Continue With Kakao
        </Button>
      </VStack>
    </Box>
  );
}
