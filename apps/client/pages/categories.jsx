import { Box, Grid, Text } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/react';
import Head from 'next/head';
import React, { useState } from 'react';
import { FaBorderAll } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Barrita } from '../components/barrita';
import { CourseCard2 } from '../components/courseCard2';

const cursos = [
  { title: 'Curso', author: 'auth' },
  { title: 'Curso1', author: 'auth1' },
  { title: 'Curso', author: 'auth' },
  { title: 'Curso', author: 'auth' },
  { title: 'Curso', author: 'auth' },
  { title: 'Curso', author: 'auth' },
  { title: 'Curso', author: 'auth' },
  { title: 'Curso', author: 'auth' },
  { title: 'Curso', author: 'auth' },
  { title: 'Curso', author: 'auth' },
  { title: 'Curso', author: 'auth' },
];

export default function Categories() {
  const [course, setCourse] = useState(false);

  return (
    <>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6"
          crossOrigin="anonymous"
        />
      </Head>
      <Box h="55px" bg="#C3D0D2" p="6px">
        <p align="right">
          <Barrita />
          <Button onClick={() => setCourse(!course)}>
            {course ? <GiHamburgerMenu /> : <FaBorderAll />}
          </Button>
        </p>
      </Box>

      <Box bg="#DEF7F3" minH="100vh">
        <Grid
          templateColumns={course ? '1fr' : 'repeat(5, 1fr)'}
          maxW="90%"
          templateRows={course ? 'repeat(2, 1fr)' : '1fr 1fr'}
          m="0 auto"
          gap="1rem"
          p="16px"
        >
          {cursos.map(({ title, author }, index) => (
            <CourseCard2 key={index} horizontal={course}>
              <Text align="center">{title}</Text>
              <Text align="center">{author}</Text>
            </CourseCard2>
          ))}
        </Grid>
      </Box>
    </>
  );
}
