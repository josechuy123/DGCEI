import { Box, Flex, Grid, Heading, Text } from "@chakra-ui/layout";
import { Button, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { CourseCard } from "../components/courseCard";

const cursos = [
  { title: "Curso", author: "Auth1" },
  { title: "Curso", author: "Auth2" },
  { title: "Curso", author: "Auth3" },
  { title: "Curso", author: "Auth4" },
  { title: "Curso", author: "Auth5" },
];

const categorias = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function Cursos() {
  return (
    <>
      <Grid bg="#C3D0D2" minH="95vh" w="100%">
        <Grid templateColumns="1fr 1fr" maxW="80%" m="0 auto">
          <Flex
            alignSelf="center"
            boxSize="fit-content"
            gridGap="2rem"
            flexDir="column"
          >
            <Heading fontSize="3rem">Nombre del Curso</Heading>
            <Text fontSize="20px">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </Text>
            <Button
              bg="#71D3CF"
              color="black"
              colorScheme="teal"
              _hover={{ color: "white", bg: "#0A2F36" }}
              w="fit-content"
              px="2rem"
            >
              Continuar curso
            </Button>
          </Flex>
          <Box
            placeSelf="center"
            w="80%"
            h="60%"
            borderRadius="8px"
            border="1px solid black"
            bg="white"
            p="1rem"
            d="flex"
            flexDir="row"
            gridGap="8px"
          >
            <Box
              borderRadius="100%"
              boxSize="16px"
              border="1px solid black"
            ></Box>
            <Box
              borderRadius="100%"
              boxSize="16px"
              border="1px solid black"
            ></Box>
            <Box
              borderRadius="100%"
              boxSize="16px"
              border="1px solid black"
            ></Box>
          </Box>
        </Grid>
      </Grid>
      <Grid bg="#DEF7F3" minH="95vh" w="100%">
        <Flex
          maxW="1600px"
          w="100%"
          m="0 auto"
          h="80%"
          flexDir="column"
          placeSelf="center"
          gridGap="1rem"
        >
          <Text fontWeight="bold" fontSize="2rem">
            Cursos populares
          </Text>
          <Tabs h="100%" isFitted>
            <TabList>
              <Tab _selected={{ color: "white", bg: "blue.500" }}>One</Tab>
              <Tab>Two</Tab>
              <Tab>Three</Tab>
              <Tab>Four</Tab>
              <Tab>Five</Tab>
              <Tab>Six</Tab>
            </TabList>

            <TabPanels>
              <TabPanel d="flex">
                <Flex flexDir="row" gridGap="1rem" w="fit-content" m="0 auto">
                  {cursos.map((curso, index) => (
                    <CourseCard key={index}>{curso.title}</CourseCard>
                  ))}
                </Flex>
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
              <TabPanel>
                <p>three!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Flex>
      </Grid>
      <Grid bg="#C3D0D2" minH="95vh" w="100%">
        <Flex
          maxW="1600px"
          w="100%"
          h="80%"
          flexDir="column"
          placeSelf="center"
          gridGap="1rem"
        >
          <Text fontWeight="bold" fontSize="2rem">
            Categorías
          </Text>
          <Grid
            templateColumns="repeat(5, 1fr)"
            gap="2rem"
            placeSelf="center"
            w="100%"
            placeItems="center"
          >
            {categorias.map((x) => (
              <Grid
                templateRows="auto 1fr"
                maxW="200px"
                w="100%"
                h="250px"
                bg="white"
              >
                <Box w="200px" h="200px" bg="black"></Box>
                <Text placeSelf="center" fontWeight="medium">
                  {x}
                </Text>
              </Grid>
            ))}
          </Grid>
        </Flex>
      </Grid>
    </>
  );
}
