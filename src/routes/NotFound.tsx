import { Button, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <VStack bg="gray.100" justifyContent={"center"} minH="100vh">
      <Heading>Page not Found</Heading>
      <Text>It seems that you're lost.</Text>
      {/* variant : solid, ghost, link, outline */}
      {/* colorScheme : red, twitter */}
      <Link to={"/"}>
        <Button colorScheme={"red"} variant={"link"}>
          Go home &rarr;
        </Button>
      </Link>
    </VStack>
  );
}
