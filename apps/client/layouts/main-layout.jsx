import { Img } from '@chakra-ui/image';
import { Divider, Flex, HStack, Text, VStack } from '@chakra-ui/layout';
import { Box } from '@chakra-ui/layout';
import { NavBar } from '@dgice-academy/client/ui';

export default function MainLayout({ children }) {
  return (
    <Flex flexDir="column" minH="100vh">
      <NavBar />

      <Box flex="1 0 auto">{children}</Box>

      <Box
        h="250px"
        className="container d-flex justify-content-between mt-3"
        alignItems="center"
      >
        <a
          href="#"
          className="navbar-brand d-flex align-items-center text-dark"
        >
          <strong>Logo</strong>
        </a>
        <div>
          <h5>Ucol Academy</h5>
          <a href="#" className="text-dark text-decoration-none">
            <p>Acerca de</p>
          </a>
          <a href="#" className="text-dark text-decoration-none">
            <p>Ucol</p>
          </a>
          <a href="#" className="text-dark text-decoration-none">
            <p>Link 3</p>
          </a>
        </div>
        <div>
          <h5>Contacto</h5>
          <a href="#" className="text-dark text-decoration-none">
            <p>Contactanos</p>
          </a>
          <a href="#" className="text-dark text-decoration-none">
            <p>FAQ</p>
          </a>
          <a href="#" className="text-dark text-decoration-none">
            <p>Link 3</p>
          </a>
        </div>
        <div>
          <h5>Links</h5>
          <div className="d-flex justify-content-between">
            <a href="#">#</a>
            <a href="#">#</a>
            <a href="#">#</a>
            <a href="#">#</a>
          </div>
        </div>
      </Box>
    </Flex>
  );
}
