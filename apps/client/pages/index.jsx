import { Image } from '@chakra-ui/image';
import { Box, Grid, Text, VStack } from '@chakra-ui/layout';
import { Center, Heading } from '@chakra-ui/react';
import Head from 'next/head';

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

      <Box bg="#c3d0d2">
        <Box className="container">
          <Box
            className="row align-items-center justify-content-center"
            minH="91vh"
          >
            <Box className="col-md-5" py="20px">
              <Heading fontSize={{ base: '24px', md: '32px', lg: '40px' }}>
                Lorem, ipsum dolor sit amet
              </Heading>
              <Text className="mt-2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
                accusamus sint hic quos autem reiciendis ipsam. Numquam,
                pariatur consequatur totam.
              </Text>
              <Center mt="20px">
                <button className="btn btn-dark col-sm-4">Primary</button>
              </Center>
            </Box>

            <Box className="col-md-5" py="10px">
              <Center>
                <Image
                  boxSize="100%"
                  // maxW="90%"
                  minW="50%"
                  // height="auto"
                  objectFit="cover"
                  src="img/Panda-rojo.png"
                  alt="Imagen de Panda Rojo"
                  className="img-fluid"
                  border="5px solid #fff"
                  boxShadow="xl"
                />
              </Center>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box bg="#def7f3" h="100vh">
        <div className="container col-sm-10">
          <h1 className="text-left fs-4 fw-bold p-5">Cursos Populares</h1>
        </div>
        <div
          className="container d-flex text-center justify-content-center mb-5 btn-toolbar"
          role="toolbar"
        >
          <div
            className="btn-group col-10"
            role="group"
            aria-label="first group"
          >
            <button type="button" className="btn btn-secondary">
              Lorem
            </button>
            <button type="button" className="btn btn-secondary">
              Lorem
            </button>
            <button type="button" className="btn btn-secondary">
              Lorem
            </button>
            <button type="button" className="btn btn-secondary">
              Lorem
            </button>
            <button type="button" className="btn btn-secondary">
              Lorem
            </button>
            <button type="button" className="btn btn-secondary">
              Lorem
            </button>
            <button type="button" className="btn btn-secondary">
              Lorem
            </button>
          </div>
        </div>
        <div className="container d-flex justify-content-between col-10 gap-3">
          <a
            className="card course text-dark text-decoration-none"
            w="13rem"
            href="#"
          >
            <img src="img/Panda-rojo.png" className="card-img-top" alt="" />
            <div className="p-2">
              <h4>Name</h4>
              <br></br>
              <p>Author</p>
              <div className="d-flex align-items-center">
                <p className="mt-3 m3-2">4.5</p>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
              </div>
            </div>
          </a>
          <a
            className="card course text-dark text-decoration-none"
            w="13rem"
            href="#"
          >
            <img src="img/Panda-rojo.png" className="card-img-top" alt="" />
            <div className="p-2">
              <h4>Name</h4>
              <br></br>
              <p>Author</p>
              <div className="d-flex align-items-center">
                <p className="mt-3 m3-2">4.5</p>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
              </div>
            </div>
          </a>
          <a
            className="card course text-dark text-decoration-none"
            w="13rem"
            href="#"
          >
            <img src="img/Panda-rojo.png" className="card-img-top" alt="" />
            <div className="p-2">
              <h4>Name</h4>
              <br></br>
              <p>Author</p>
              <div className="d-flex align-items-center">
                <p className="mt-3 m3-2">4.5</p>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
              </div>
            </div>
          </a>
          <a
            className="card course text-dark text-decoration-none"
            w="13rem"
            href="#"
          >
            <img src="img/Panda-rojo.png" className="card-img-top" alt="" />
            <div className="p-2">
              <h4>Name</h4>
              <br></br>
              <p>Author</p>
              <div className="d-flex align-items-center">
                <p className="mt-3 m3-2">4.5</p>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
              </div>
            </div>
          </a>
          <a
            className="card course text-dark text-decoration-none"
            w="13rem"
            href="#"
          >
            <img src="img/Panda-rojo.png" className="card-img-top" alt="" />
            <div className="p-2">
              <h4>Name</h4>
              <br></br>
              <p>Author</p>
              <div className="d-flex align-items-center">
                <p className="mt-3 m3-2">4.5</p>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
              </div>
            </div>
          </a>
        </div>
      </Box>
      <Box bg="#71d3cf" h="100vh">
        <Box
          maxW="80%"
          className="container-fluid h-100 d-flex justify-content-center align-items-center"
        >
          <div className="container-fluid d-flex justify-content-center align-items-center">
            <div className="col-6 vh-100">
              <div className="container p-2 col-sm-8 h-100 d-flex justify-content-center align-items-center">
                <img
                  src="img/Panda-rojo.png"
                  alt=""
                  className="img-thumbnail"
                />
              </div>
            </div>
            <div className="col-6">
              <div className="h-100">
                <Text mb="10px" fontSize="2.5rem">
                  ¿Quiénes somos?
                </Text>
                <p className="mb-3">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Nobis accusamus sint hic quos autem reiciendis ipsam. Numquam,
                  pariatur consequatur totam, quia optio necessitatibus
                  voluptate, omnis dolore praesentium assumenda in officia.
                </p>
                <p>
                  <b>Lorem ipsum </b>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Nobis accusamus sint hic quos autem reiciendis ipsam. Numquam,
                  pariatur consequatur totam, quia optio necessitatibus
                  voluptate, omnis dolore praesentium assumenda in officia.
                </p>
                <br></br>
                <p>
                  <b>Lorem ipsum </b>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Nobis accusamus sint hic quos autem reiciendis ipsam. Numquam,
                  pariatur consequatur totam, quia optio necessitatibus
                  voluptate, omnis dolore praesentium assumenda in officia.
                </p>
                <br></br>
                <p>
                  <b>Lorem ipsum </b>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Nobis accusamus sint hic quos autem reiciendis ipsam. Numquam,
                  pariatur consequatur totam, quia optio necessitatibus
                  voluptate, omnis dolore praesentium assumenda in officia.
                </p>
              </div>
            </div>
          </div>
        </Box>
      </Box>
      <Box bg="#def7f3" h="100vh">
        <Box
          maxW="80%"
          className="container-fluid h-100 d-flex justify-content-center align-items-center"
        >
          <div className="col-6 row">
            <div className="Skills">
              <Text fontSize="2.0rem">Habilidades</Text>
              <br></br>
              <div className="d-flex h-25 align-items-center">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Nobis accusamus sint hic quos autem reiciendis ipsam. Numquam,
                  pariatur consequatur totam, quia optio necessitatibus
                  voluptate, omnis dolore praesentium assumenda in officia.
                </p>
                <i className="far fa-eye fa-4x p-2 mb-3"></i>
              </div>
              <br></br>
              <div className="d-flex h-25 align-items-center">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Nobis accusamus sint hic quos autem reiciendis ipsam. Numquam,
                  pariatur consequatur totam, quia optio necessitatibus
                  voluptate, omnis dolore praesentium assumenda in officia.
                </p>
                <i className="far fa-eye fa-4x p-2 mb-3"></i>
              </div>
              <br></br>
              <div className="d-flex h-25 align-items-center">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Nobis accusamus sint hic quos autem reiciendis ipsam. Numquam,
                  pariatur consequatur totam, quia optio necessitatibus
                  voluptate, omnis dolore praesentium assumenda in officia.
                </p>
                <i className="far fa-eye fa-4x p-2 mb-3"></i>
              </div>
            </div>
          </div>
          <div className="col-6 h-100">
            <div className="container p-2 col-sm-8 h-100 d-flex justify-content-center align-items-center">
              <img src="img/Panda-rojo.png" alt="" className="img-thumbnail" />
            </div>
          </div>
        </Box>
      </Box>
      <Box bg="#c3d0d2" h="100vh">
        <Box className="container-fluid h-75 d-flex justify-content-center align-items-around">
          <div className="row">
            <div className="skills">
              <div className="">
                <Text mt="10px" fontSize="2.5rem" className="text-center">
                  Lorem ipsum
                </Text>
              </div>
              <br></br>
              <div className="d-flex h-25 justify-content-center align-items-around">
                <div className="col-sm-9 p-5">
                  <Text fontSize="1.3rem" className="text-left">
                    Correo
                  </Text>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-sm-9 p-5">
                  <Text fontSize="1.3rem" className="text-left">
                    Asunto
                  </Text>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="text-center mt-5 mb-5">
                <Text fontSize="1.3rem" className="text-left">
                  Mensaje
                </Text>
                <textarea
                  className="form-control"
                  placeholder="Mensaje"
                  rows="5"
                ></textarea>
              </div>
              <div className="text-center">
                <button className="btn btn-dark col-sm-4">Primary</button>
              </div>
            </div>
          </div>
        </Box>
      </Box>
    </>
  );
}
