import Head from 'next/head';
import { Box, Grid, Text, VStack } from '@chakra-ui/layout';
import { Image, Center, Stack, HStack } from '@chakra-ui/react';

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

      <Box>
        <Box height="30vh" m="0" className="card text-white">
          <Image
            boxSize="100%"
            objectFit="cover"
            src="img/Panda-rojo.png"
            alt="Imagen de Panda Rojo"
            className="card-img rounded-0"
          />
          <section className="card-img-overlay container">
            <Box className="row align-items-center" height="25vh">
              <div className="col">
                <Text
                  fontSize={{ base: '24px', md: '40px' }}
                  className="card-title text-center"
                >
                  Lorem ipsum dolor sit amet.
                </Text>
              </div>
            </Box>
          </section>
        </Box>
      </Box>

      <Box mb="20px">
        <Center my="20px">
          <Text fontSize={{ base: '24px', md: '32px', lg: '40' }}>
            Mis cursos
          </Text>
        </Center>

        <Box className="container">
          <section className="row">
            <article className="col-12 col-sm-6 col-md-3 mb-2">
              <Box className="card">
                <img
                  src="img/Panda-rojo.png"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">
                    <strong>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </strong>
                  </h5>
                  <p className="card-subtitle mb-2 mt-2 text-muted">
                    Lorem, ipsum dolor.
                  </p>
                  <HStack>
                    <Text>4.5</Text>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star-half"></i>
                  </HStack>
                </div>
              </Box>
            </article>

            <article className="col-12 col-sm-6 col-md-3 mb-2">
              <Box className="card">
                <img
                  src="img/Panda-rojo.png"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">
                    <strong>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </strong>
                  </h5>
                  <p className="card-subtitle mb-2 mt-2 text-muted">
                    Lorem, ipsum dolor.
                  </p>
                  <HStack>
                    <Text>4.5</Text>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star-half"></i>
                  </HStack>
                </div>
              </Box>
            </article>

            <article className="col-12 col-sm-6 col-md-3 mb-2">
              <Box className="card">
                <img
                  src="img/Panda-rojo.png"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">
                    <strong>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </strong>
                  </h5>
                  <p className="card-subtitle mb-2 mt-2 text-muted">
                    Lorem, ipsum dolor.
                  </p>
                  <HStack>
                    <Text>4.5</Text>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star-half"></i>
                  </HStack>
                </div>
              </Box>
            </article>

            <article className="col-12 col-sm-6 col-md-3 mb-2">
              <Box className="card">
                <img
                  src="img/Panda-rojo.png"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">
                    <strong>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </strong>
                  </h5>
                  <p className="card-subtitle mb-2 mt-2 text-muted">
                    Lorem, ipsum dolor.
                  </p>
                  <HStack>
                    <Text>4.5</Text>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star-half"></i>
                  </HStack>
                </div>
              </Box>
            </article>
          </section>
        </Box>
      </Box>

      <Box className="container" w="90vh" p="1px" bg="#0A2F36"></Box>

      <Box mb="20px">
        <Center my="20px">
          <Text fontSize={{ base: '24px', md: '32px', lg: '40' }}>
            Cursos Populares
          </Text>
        </Center>

        <Box className="container">
          <section className="row">
            <article className="col-12 col-sm-6 col-md-3 mb-2">
              <Box className="card">
                <img
                  src="img/Panda-rojo.png"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">
                    <strong>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </strong>
                  </h5>
                  <p className="card-subtitle mb-2 mt-2 text-muted">
                    Lorem, ipsum dolor.
                  </p>
                  <HStack>
                    <Text>4.5</Text>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star-half"></i>
                  </HStack>
                </div>
              </Box>
            </article>

            <article className="col-12 col-sm-6 col-md-3 mb-2">
              <Box className="card">
                <img
                  src="img/Panda-rojo.png"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">
                    <strong>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </strong>
                  </h5>
                  <p className="card-subtitle mb-2 mt-2 text-muted">
                    Lorem, ipsum dolor.
                  </p>
                  <HStack>
                    <Text>4.5</Text>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star-half"></i>
                  </HStack>
                </div>
              </Box>
            </article>

            <article className="col-12 col-sm-6 col-md-3 mb-2">
              <Box className="card">
                <img
                  src="img/Panda-rojo.png"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">
                    <strong>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </strong>
                  </h5>
                  <p className="card-subtitle mb-2 mt-2 text-muted">
                    Lorem, ipsum dolor.
                  </p>
                  <HStack>
                    <Text>4.5</Text>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star-half"></i>
                  </HStack>
                </div>
              </Box>
            </article>

            <article className="col-12 col-sm-6 col-md-3 mb-2">
              <Box className="card">
                <img
                  src="img/Panda-rojo.png"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">
                    <strong>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </strong>
                  </h5>
                  <p className="card-subtitle mb-2 mt-2 text-muted">
                    Lorem, ipsum dolor.
                  </p>
                  <HStack>
                    <Text>4.5</Text>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star-half"></i>
                  </HStack>
                </div>
              </Box>
            </article>
          </section>
        </Box>
      </Box>

      <Box className="container" w="90vh" p="1px" bg="#0A2F36"></Box>

      <Box mb="20px">
        <Center my="20px">
          <Text fontSize={{ base: '24px', md: '32px', lg: '40' }}>
            Cursos Terminados
          </Text>
        </Center>

        <Box className="container">
          <section className="row">
            <article className="col-12 col-sm-6 mb-2">
              <Box className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <Image
                      boxSize="100%"
                      objectFit="cover"
                      src="img/Panda-rojo.png"
                      alt="Imagen de Panda Rojo"
                      className="card-img rounded-0"
                    />
                  </div>

                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">
                        <strong>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit.
                        </strong>
                      </h5>
                      <p className="card-subtitle my-2 text-muted">
                        Lorem, ipsum dolor.
                      </p>
                      <HStack>
                        <Text>4.5</Text>
                        <i className="far fa-star"></i>
                        <i className="far fa-star"></i>
                        <i className="far fa-star"></i>
                        <i className="far fa-star"></i>
                        <i className="far fa-star-half"></i>
                      </HStack>
                    </div>
                  </div>
                </div>
              </Box>
            </article>

            <article className="col-12 col-sm-6 mb-2">
              <Box className="card">
                <div className="row g-0">
                  <div className="col-md-4">
                    <Image
                      boxSize="100%"
                      objectFit="cover"
                      src="img/Panda-rojo.png"
                      alt="Imagen de Panda Rojo"
                      className="card-img rounded-0"
                    />
                  </div>

                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">
                        <strong>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit.
                        </strong>
                      </h5>
                      <p className="card-subtitle my-2 text-muted">
                        Lorem, ipsum dolor.
                      </p>
                      <HStack>
                        <Text>4.5</Text>
                        <i className="far fa-star"></i>
                        <i className="far fa-star"></i>
                        <i className="far fa-star"></i>
                        <i className="far fa-star"></i>
                        <i className="far fa-star-half"></i>
                      </HStack>
                    </div>
                  </div>
                </div>
              </Box>
            </article>
          </section>
        </Box>
      </Box>
    </>
  );
}
