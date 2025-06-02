import { Flex, IconButton, Link } from '@chakra-ui/react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

export const Footer = () => {
  return (
    <Flex
      as="footer"
      width="full"
      align="center"
      justifyContent="center"
      gap={2}
    >
      <Link href="https://www.facebook.com/share/g/1YMaMmKDid/">
        <IconButton aria-label="Facebook" variant="ghost" size="md" color="acadianaBlue.700">
          <FaFacebook />
        </IconButton>
      </Link>
      <Link href="https://www.instagram.com/acadianapinballplayers/">
        <IconButton aria-label="Instagram" variant="ghost" size="md" color="acadianaGold.700">
          <FaInstagram />
        </IconButton>
      </Link>
    </Flex>
  );
};
