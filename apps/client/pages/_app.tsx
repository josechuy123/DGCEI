import { ApolloProvider } from '@apollo/client';
import { ChakraProvider } from '@chakra-ui/react';
import Head from 'next/head';
import { createApolloClient } from '../apollo/createApolloClient';
import MainLayout from '../layouts/main-layout';
import '../public/css/style.css';

function CustomApp({ Component, pageProps }) {
  const client = createApolloClient();
  return (
    <ChakraProvider>
      <ApolloProvider client={client}>
        <Head>
          <title>DGICE Academy</title>
        </Head>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ApolloProvider>
    </ChakraProvider>
  );
}

export default CustomApp;
