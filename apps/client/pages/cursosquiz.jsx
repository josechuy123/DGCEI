import { Image } from '@chakra-ui/image';
import { Box, Grid, Text, VStack } from '@chakra-ui/layout';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Flex,
  HStack,
  Center,
} from '@chakra-ui/react';

import Head from 'next/head';

export default function cursosRepro() {
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

      <Box bg="#c3d0d2">
        <Box className="container-fluid">
          <Grid templateColumns="30% 70%" minH="91vh" maxH="91vh">
            {/* comentario */}
            <Box px="0" minH="91vh" maxH="91vh" overflow="auto">
              <Accordion defaultIndex={[0]} allowMultiple>
                <AccordionItem border="none">
                  <h2>
                    <AccordionButton
                      borderBottom="1px solid #0A2F36"
                      shadow="md"
                      w="100%"
                    >
                      <Box flex="1" textAlign="left">
                        Modulo X
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} shadow="md" p="0">
                    <List spacing={-0.5}>
                      <ListItem p="4" as="button" w="100%" shadow="md">
                        <HStack>
                          <Box>
                            <i className="fas fa-check-circle pe-2 "></i>
                          </Box>
                          <Text align="left">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                          </Text>
                        </HStack>
                      </ListItem>

                      <ListItem p="4" as="button" w="100%" shadow="md">
                        <HStack>
                          <Box>
                            <i className="fas fa-check-circle pe-2 "></i>
                          </Box>
                          <Text align="left">Lorem ipsum dolor sit amet.</Text>
                        </HStack>
                      </ListItem>

                      <ListItem p="4" as="button" w="100%" shadow="md">
                        <HStack>
                          <Box>
                            <i className="far fa-circle pe-2 "></i>
                          </Box>
                          <Text align="left">
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Esse.
                          </Text>
                        </HStack>
                      </ListItem>

                      <ListItem p="4" as="button" w="100%" shadow="md">
                        <HStack>
                          <Box>
                            <i className="far fa-circle pe-2 "></i>
                          </Box>
                          <Text align="left">Lorem ipsum dolor sit amet.</Text>
                        </HStack>
                      </ListItem>
                    </List>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem border="none">
                  <h2>
                    <AccordionButton
                      borderBottom="1px solid #0A2F36"
                      shadow="md"
                    >
                      <Box flex="1" textAlign="left">
                        Modulo Y
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} shadow="md" p="0">
                    <List spacing={-0.5}>
                      <ListItem p="4" as="button" w="100%" shadow="md">
                        <HStack>
                          <Box>
                            <i className="far fa-circle pe-2 "></i>
                          </Box>
                          <Text align="left">
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Esse.
                          </Text>
                        </HStack>
                      </ListItem>

                      <ListItem p="4" as="button" w="100%" shadow="md">
                        <HStack>
                          <Box>
                            <i className="far fa-circle pe-2 "></i>
                          </Box>
                          <Text align="left">Lorem ipsum dolor sit amet.</Text>
                        </HStack>
                      </ListItem>
                    </List>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem border="none">
                  <h2>
                    <AccordionButton
                      borderBottom="1px solid #0A2F36"
                      shadow="md"
                      w="100%"
                    >
                      <Box flex="1" textAlign="left">
                        Modulo Z
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} shadow="md" p="0">
                    <List spacing={-0.5}>
                      <ListItem p="4" as="button" w="100%" shadow="md">
                        <HStack>
                          <Box>
                            <i className="fas fa-check-circle pe-2 "></i>
                          </Box>
                          <Text align="left">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                          </Text>
                        </HStack>
                      </ListItem>

                      <ListItem p="4" as="button" w="100%" shadow="md">
                        <HStack>
                          <Box>
                            <i className="fas fa-check-circle pe-2 "></i>
                          </Box>
                          <Text align="left">Lorem ipsum dolor sit amet.</Text>
                        </HStack>
                      </ListItem>

                      <ListItem p="4" as="button" w="100%" shadow="md">
                        <HStack>
                          <Box>
                            <i className="far fa-circle pe-2 "></i>
                          </Box>
                          <Text align="left">
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Esse.
                          </Text>
                        </HStack>
                      </ListItem>

                      <ListItem p="4" as="button" w="100%" shadow="md">
                        <HStack>
                          <Box>
                            <i className="far fa-circle pe-2 "></i>
                          </Box>
                          <Text align="left">Lorem ipsum dolor sit amet.</Text>
                        </HStack>
                      </ListItem>
                    </List>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem border="none">
                  <h2>
                    <AccordionButton
                      borderBottom="1px solid #0A2F36"
                      shadow="md"
                    >
                      <Box flex="1" textAlign="left">
                        Quiz Final
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} shadow="md" p="0">
                    <List spacing={-0.5}>
                      <ListItem p="4" as="button" w="100%" shadow="md">
                        <HStack>
                          <Box>
                            <i className="far fa-circle pe-2 "></i>
                          </Box>
                          <Text align="left">
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Esse.
                          </Text>
                        </HStack>
                      </ListItem>
                    </List>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Box>
            {/* comentario */}
            <Box className="container-fluid">
              <Box className="row">
                <Box className="col-12" py="20px">
                  <Text fontSize={{ base: '12px', md: '16px', lg: '18px' }}>
                    <strong>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </strong>
                  </Text>
                </Box>
                <Box className="col-12 col-md-6">
                  <List spacing={(4, 3, 2)}>
                    <ListItem p="4" as="button" w="100%">
                      <HStack>
                        <Box>
                          <i className="fas fa-check-circle pe-2 "></i>
                        </Box>
                        <Text
                          align="left"
                          fontSize={{ base: '12px', md: '14px', lg: '16px' }}
                        >
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit.
                        </Text>
                      </HStack>
                    </ListItem>

                    <ListItem p="4" as="button" w="100%">
                      <HStack>
                        <Box>
                          <i className="far fa-circle pe-2 "></i>
                        </Box>
                        <Text
                          align="left"
                          fontSize={{ base: '12px', md: '14px', lg: '16px' }}
                        >
                          Lorem ipsum dolor sit amet.
                        </Text>
                      </HStack>
                    </ListItem>

                    <ListItem p="4" as="button" w="100%">
                      <HStack>
                        <Box>
                          <i className="far fa-circle pe-2 "></i>
                        </Box>
                        <Text
                          align="left"
                          fontSize={{ base: '12px', md: '14px', lg: '16px' }}
                        >
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Esse.
                        </Text>
                      </HStack>
                    </ListItem>

                    <ListItem p="4" as="button" w="100%">
                      <HStack>
                        <Box>
                          <i className="far fa-circle pe-2 "></i>
                        </Box>
                        <Text
                          align="left"
                          fontSize={{ base: '12px', md: '14px', lg: '16px' }}
                        >
                          Lorem ipsum dolor sit amet.
                        </Text>
                      </HStack>
                    </ListItem>
                  </List>
                </Box>
                <Box className="col-12 col-md-6">
                  <Center>
                    <Image
                      boxSize="80%"
                      objectFit="cover"
                      src="img/Panda-rojo.png"
                      alt="Imagen de Panda Rojo"
                      className="card-img rounded-0"
                    />
                  </Center>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
