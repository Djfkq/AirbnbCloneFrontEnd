import { Box, Button, HStack } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { FaAirbnb } from "react-icons/fa";
export default function Root() {
  return (
    <Box>
      <HStack
        justifyContent={"space-between"}
        py={"5"} /* 10 : 10 * 4 px */
        px={"10"}
        borderBottomWidth={1}
      >
        <Box color={"red.500"}>
          <FaAirbnb size={"48"} />
        </Box>
        <HStack spacing={2} /* 2 rem */>
          <Button>Log in</Button>
          <Button colorScheme={"red"}>Sign up</Button>
        </HStack>
      </HStack>
      <Outlet />,
    </Box>
  );
}
