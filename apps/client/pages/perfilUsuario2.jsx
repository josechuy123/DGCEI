import Head from 'next/head';
import {React, Link} from 'react'
import { Box, Grid, Text, VStack, Flex } from '@chakra-ui/layout';
import { WrapItem,Avatar, AvatarBadge, AvatarGroup, Image, Select, Center, Stack, HStack, Input, InputGroup, Twitter,Button,ButtonGroup ,FormHelperText, FaFacebook,FormGroup, Container,Textarea } from '@chakra-ui/react';
import { PhoneIcon, AddIcon, WarningIcon,Icon,EmailIcon } from '@chakra-ui/icons'


import {
  FormControl,
  FormLabel,
  FormErrorMessage
} from "@chakra-ui/react"

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

      <Grid background="white" placeItems="left" p={5}>
          <Flex gridCap="4rem" p="6" >
            <VStack align="left">
              <Box align="center">
                    <Image
                      borderRadius="full"
                      boxSize="150px"
                      src="https://bit.ly/sage-adebayo"
                      alt="Image Profile"
                      
                    />
                      <Text align="center" fontSize="2xl">
                          Perfil de Usuario2
                      </Text>
              </Box>
              <Text  as="u" align="left" >Información básica:</Text>
              <FormControl id="first-name" isRequired>
                  <FormLabel>First name</FormLabel>
                  <Input placeholder="First name" />
              </FormControl>

              <FormControl id="first-name" isRequired>
                  <FormLabel>Last name</FormLabel>
                  <Input placeholder="Last name"  /> 
              </FormControl>
              <HStack>

                
                <FormControl id="email">
                  <FormLabel><PhoneIcon /> Phone Number </FormLabel>
                  <Input placeholder="Phone nomber +52"   type="number"/> 
                </FormControl>

                <FormControl id="email">
                  <FormLabel><EmailIcon /> E-mail</FormLabel>
                  <Input type="email" placeholder="example@example.com" />
                </FormControl>
                

              </HStack>
              <Select placeholder="Selecciona tu sexo">
                  <option value="option1">Femenino </option>
                  <option value="option2">Masculino </option>
                </Select>
              <Button colorScheme="blue" align="center">Save</Button>
            </VStack>
            
           

            <VStack align="center">
              <Box align="center" p={5}>

                      <Text align="center" fontSize="2xl">
                         Comentarios
                      </Text>
                    <Textarea 
                    size="bgsize"
                    placeholder="Envianos tus comentarios.." /> 
              <Button colorScheme="green" align="center" p={5}>Enviar comentarios</Button>
              </Box>
              
             
            </VStack>


            <VStack align="end">

              <HStack>

              <form action="https://www.facebook.com/">
                  <Button colorScheme="facebook" type="submit">
                    Facebook
                  </Button>
              </form>

              <form action="https://twitter.com/">
                <Button colorScheme="twitter" type="submit" >
                  Twitter
                </Button>
              </form>
                  
              <WrapItem>
                <Avatar size="sm" name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />{" "}
              </WrapItem>
              </HStack>


            </VStack>



          </Flex>
      </Grid>
    </>
  );
}

