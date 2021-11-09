import { Image } from '@chakra-ui/image';
import { Box, Flex, Grid, Heading, Text, VStack } from '@chakra-ui/layout';
import { Button, Container } from '@chakra-ui/react';
import Head from 'next/head';
import { CourseCard } from '../components/courseCard';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';

const cursos = [
  { title: 'Curso', author: 'Auth1' },
  { title: 'Curso', author: 'Auth2' },
  { title: 'Curso', author: 'Auth3' },
  { title: 'Curso', author: 'Auth4' },
  { title: 'Curso', author: 'Auth5' },
];

const categorias = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function Cursos() {
  return (
    <>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6"
          crossOrigin="anonymous"
        />
        <script
          src="https://kit.fontawesome.com/498253d564.js"
          crossOrigin="anonymous"
          defer
        ></script>
      </Head>

      <Grid bg="#C3D0D2" minH="95vh" w="100%">
        <Heading fontSize="2.5rem" placeSelf="center" mt="80px">
          Nombre Curso que se estaba tomando
        </Heading>
        <Text fontSize="20px" placeSelf="center" mt="0px">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          <br></br>
          eiusmod tempor incididunt ut labore et dolore magna.
        </Text>
        <Flex dir="row" placeItems="center" ml="36%" p="20px">
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="" />
            <Button
              bg="#71D3CF"
              color="black"
              colorScheme="teal"
              _hover={{ color: 'white', bg: '#0A2F36' }}
              w="fit-content"
              px="2rem"
            >
              Seguir Viendo
            </Button>
          </form>
        </Flex>

        <Box
          placeSelf="end center"
          w="40%"
          h="40%"
          borderRadius="8px"
          border="1px solid black"
          bg="white"
          p="10rem"
          d="flex"
          gridGap="8px"
          mb="3%"
        ></Box>
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
              <Tab _selected={{ color: 'white', bg: 'blue.500' }}>One</Tab>
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
            {categorias.map((x, index) => (
              <Grid
                templateRows="auto 1fr"
                maxW="200px"
                w="100%"
                h="250px"
                bg="white"
                key={index}
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
