import { SearchIcon, StarIcon } from '@chakra-ui/icons';
import { Box, Flex, Grid, Text, VStack } from '@chakra-ui/layout';
import {
  Avatar, Divider, HStack, Input, InputGroup, InputRightElement, Stack, Textarea
} from '@chakra-ui/react';
import Head from 'next/head';
export default function Perfil() {
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

         <Grid h="600px" background="white" >

          <Box>
            <Text fontSize="lg">Fernando anastacio</Text>
          </Box>

          <HStack>
          <Grid h="400px" align="left"  w="40%" m="10px" border="1px solid">
            <Box >
              <InputGroup>
                <Input type="tel" placeholder="Search Comment" />
                  <InputRightElement
                    pointerEvents="none"
                    children={<SearchIcon  />}
                  />
              </InputGroup>
              
            <Box  h="65px" >

            <Divider orientation="horizontal" />
              <HStack direction="row" p="4px">
                <StarIcon/>
                <Avatar name="Judas Tadeo" src="https://bit.ly/broken-link" />
                <VStack>
                <Stack spacing={1}>
                  <Text fontSize="lg">Fernando anastacio</Text>
                  <Text fontSize="xs">(xs) El motivo de mi comentario es el siguiente</Text>
                </Stack>
                </VStack>
              </HStack>
            </Box>
              <Divider orientation="horizontal" />


              <Box  h="65px" >
                <HStack direction="row" p="4px">
                  <StarIcon/>
                  <Avatar name="audas badeo" src="https://bit.ly/broken-link" />
                  <VStack>
                  <Stack spacing={1}>
                    <Text fontSize="lg">Fernando anastacio</Text>
                    <Text fontSize="xs">(xs) El motivo de mi comentario es el siguiente</Text>
                  </Stack>
                  </VStack>
                </HStack>
              </Box>
              <Divider orientation="horizontal" />


              <Box  h="65px" >
                <HStack direction="row" p="4px">
                  <StarIcon/>
                  <Avatar name="Oshigaki Kisame" src="https://bit.ly/broken-link" />
                  <VStack>
                  <Stack spacing={1}>
                    <Text fontSize="lg">Fernando anastacio</Text>
                    <Text fontSize="xs">(xs) El motivo de mi comentario es el siguiente</Text>
                  </Stack>
                  </VStack>
                </HStack>
              </Box>
              <Divider orientation="horizontal" />


              <Box  h="65px" >
                <HStack direction="row" p="4px">
                  <StarIcon/>
                  <Avatar name="Eshigaki Cisame" src="https://bit.ly/broken-link" />
                  <VStack>
                  <Stack spacing={1}>
                    <Text fontSize="lg">Fernando anastacio</Text>
                    <Text fontSize="xs">(xs) El motivo de mi comentario es el siguiente</Text>
                  </Stack>
                  </VStack>
                </HStack>
              </Box>
              <Divider orientation="horizontal" />


              <Box  h="65px" >
                <HStack direction="row" p="4px">
                  <StarIcon/>
                  <Avatar name="Vshigaki Nisame" src="https://bit.ly/broken-link" />
                  <VStack>
                  <Stack spacing={1}>
                    <Text fontSize="lg">Fernando anastacio</Text>
                    <Text fontSize="xs">(xs) El motivo de mi comentario es el siguiente</Text>
                  </Stack>
                  </VStack>
                </HStack>
              </Box>
              <Divider orientation="horizontal" />


            </Box>
          </Grid>
            
          <Grid h="400px" align="left"  w="50%" border="1px solid">

                  <Box  h="65px" >
                    <Divider orientation="horizontal" />
                      <HStack direction="row" p="4px">
                        <StarIcon/>
                        <Avatar name="Judas Tadeo" src="https://bit.ly/broken-link" />

                        <VStack>
                          <Stack spacing={1}>
                            <Text fontSize="lg">Fernando anastacio</Text>
                          </Stack>
                        </VStack>
                      </HStack>

                    <Divider orientation="horizontal" />

                    <Box border="1px solid">
                      <InputGroup>
                      <Input type="tel" placeholder="Asunto del comentario" border="1px solid"/>
                          <InputRightElement
                            pointerEvents="none"
                          />
                      </InputGroup>
                    </Box>
                    </Box>

                <Flex align="center" h="100px" w="50%">
                  <Textarea  h="30vh"   placeholder="Here is a sample " />
                </Flex>  
              
            </Grid>
              
            </HStack>
            
        </Grid>
    

    </>
  );
}
