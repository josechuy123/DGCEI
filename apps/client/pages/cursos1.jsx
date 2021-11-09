import Head from 'next/head';
import { Box, Grid, Text, VStack } from '@chakra-ui/layout';

export default function Cursos1() {
  return (
    <>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6"
          crossOrigin="anonymous"
        />
        <link href="{{ asset('css/style.css') }}" rel="stylesheet" />
      </Head>
      <Box w="100%" h="500px" bg="#c3d0d2" p="50px">
        <Box className="container-fluid">
          <Box className="row">
            <Box className="col-4">
              <Text ml="25%" mt="35px" fontSize="1.7rem">
                <b>
                  Nombre curso que
                  <br></br>
                  se estaba tomando
                </b>
              </Text>
              <Text ml="25%" mt="20px">
                Lorem ipsum dolor sit amet consectetur
                <br></br>
                adipisicing elit, sed do eiusmod tempor
                <br></br>
                incididunt ut labore et dolore magna
              </Text>
              <Box ml="25%" mt="20px">
                <button type="button" ml="25%" w="20%" className="btn btn-dark">
                  Seguir Viendo
                </button>
              </Box>
            </Box>
            <Box className="col-8">
              <Box className="text-center" w="100%" p="20px">
                <img
                  src="https://image.freepik.com/vector-gratis/concepto-educacion-digital-linea-espacio-blanco-computadora-portatil_255625-422.jpg"
                  className="img-fluid rounded mx-auto d-block"
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box w="100%" h="500px" bg="#def7f3">
        <Box className="container row">
          <Box className="col-4">Cursos Populares</Box>
          <Box className="container" p="20px">
            <a href="">asd</a>
          </Box>
        </Box>
      </Box>
    </>
  );
}
