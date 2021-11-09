import { Image } from '@chakra-ui/image';
import { Box, Grid, Text, VStack, Flex, Spacer } from '@chakra-ui/layout';
import { Center, Heading } from '@chakra-ui/react';
import Head from 'next/head';
import { Button, ButtonGroup } from "@chakra-ui/react"

export default function Principal() {
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
       
       
       
      
      <Box bg="#c3d0d2" h="80vh">
        <Box className="container-fluid h-65 d-flex justify-content-center align-items-around">
          
          <div className="row">
            <div className="skills">
           
      
              <div className="">
                <Box p="4" bg="c3d0d2" align="right" >
                    <Button colorScheme="blue" bg="teal">Regresar</Button>
                </Box>
                <Text mt="10px" fontSize="2.5rem" className="text-left">
                  Comentarios del administrador
                </Text>

              </div>
              <br></br>

              <div className="text-center mt-4 mb-4">
                

                <textarea
                  className="form-control"
                  placeholder="Escribir texto aqui..."
                  rows="10"
                ></textarea>

              </div>

              {/* <div className="text-center">
                <button className="btn btn-dark col-sm-4">Enviar</button>
              </div> */}


              <div className="d-flex h-25 justify-content-center align-items-around">
                <div className="col-sm-9 p-5">

                  

                  <input type="text" className="form-control" placeholder="Editar curso"/>
                </div>

                <div className="col-sm-9 p-5" >
                 
                  <input type="text" className="form-control" placeholder="Contactar Admin" alignplaceholder/>
                </div>

              </div>

            </div>
          </div>
        </Box>
      </Box>
    </>
  );
}
