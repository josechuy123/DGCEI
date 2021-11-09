import { Image } from "@chakra-ui/image";
import { Text } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/layout";

export function CourseCard({ children, image }) {
  return (
    <Box
      w="200px"
      h="350px"
      display="flex"
      flexDir="column"
      bg="white"
      boxShadow="md"
    >
      <Box w="100%" h="40%" p="16px">
        {children}
      </Box>
    </Box>
  );
}
