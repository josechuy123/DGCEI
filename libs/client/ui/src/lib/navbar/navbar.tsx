import { Img } from '@chakra-ui/image';
import { Box, Divider, Flex, Text } from '@chakra-ui/layout';
import { BsBell } from 'react-icons/bs';

export function NavBar() {
  return (
    <Box w="100%" h="64px" bg="#0a2f36" borderBottom="1px solid white">
      <Flex flexDir="row" maxW="80%" margin="0 auto" h="100%">
        <Img src="/img/ucolLogo.png" h="100%" w="auto" p="8px" />
        <Flex dir="row" placeItems="left" ml="2%">
          <NavLink>Cursos</NavLink>
        </Flex>
        <Flex dir="row" placeItems="right" ml="55%" p="20px">
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="" />
            <button className="btn btn-light" type="submit">
              <BsBell />
            </button>
          </form>
        </Flex>
      </Flex>
    </Box>
  );
}

function NavLink({ children }: { children: string }) {
  return (
    <Flex
      color="white"
      h="100%"
      _hover={{ bg: 'white', color: '#0c6484' }}
      px="1rem"
      cursor="pointer"
    >
      <Text placeSelf="center">{children}</Text>
    </Flex>
  );
}
