import { EventsCalendar } from '@/components/ui/events';
import { ImageSlider } from '@/components/ui/image-slider';
import { LouisianaStandings } from '@/components/ui/leaderboard';
import { slides } from '@/data/slides';
import { Box, Flex, Heading, Link, Text } from '@chakra-ui/react';

const Home = () => {
  return (
    <>
      <Flex
        flexDirection={{ base: 'column', lg: 'row' }}
        justifyContent={'center'}
      >
        <Box width={{ base: '100%', lg: '50%' }} m={{ lg: 6 }} p={2}>
          <Heading
            textAlign={'center'}
            mb="2"
            fontSize={{ base: 'xl', lg: '2xl' }}
            color="acadianaBlue.700"
          >
            Welcome!
          </Heading>
          <Text mb={2}>
            Pinball in Acadiana? Hell yeah and we're just getting started! Be
            sure to check out the event schedule for upcoming tournaments and
            casual play.
          </Text>
          <Text mb={2}>
            Not sure where to find pinball? Check out this handy{' '}
            <Link color="acadianaBlue.700" _hover={{ color: 'acadianaRed.500', textDecoration: 'none' }} href="https://pinballmap.com/">
              Pinball Map!
            </Link>
          </Text>
          <Text mb={2}>
            If you're a new player and unsure where to start in the competitive
            pinball scene, check out the{' '}
            <Link color="acadianaBlue.700" _hover={{ color: 'acadianaRed.500', textDecoration: 'none' }} href="/new-players">
              new player guide.
            </Link>
          </Text>

          <Text mb={2}>
            Be sure to join the{' '}
            <Link
              color="acadianaBlue.700"
              _hover={{ color: 'acadianaRed.500', textDecoration: 'none' }}
              href="https://www.facebook.com/share/g/1PCVbjN6A1/"
            >
              Acadiana Pinball Players Facebook Group
            </Link>{' '}
            to chat with other pinheads in the Acadiana area.
          </Text>

          <Text>Happy flipping!</Text>
        </Box>
        <Box
          display={{ base: 'none', md: 'block' }}
          width="1px"
          bg="gray.200"
          mx={4}
        />
        <Box width={{ base: '100%', lg: '50%' }} m={{ lg: 6 }} p={2}>
          <ImageSlider slides={slides} />
        </Box>
      </Flex>
      <Flex
        flexDirection={{ base: 'column', lg: 'row' }}
        justifyContent={'center'}
      >
        <Box width={{ base: '100%', lg: '50%' }} m={{ lg: 6 }} p={2}>
          <Heading
            textAlign={'center'}
            mb="2"
            fontSize={{ base: 'xl', lg: '2xl' }}
            color="acadianaBlue.700"
          >
            Upcoming Events
          </Heading>
          <EventsCalendar />
        </Box>
        <Box width={{ base: '100%', lg: '50%' }} m={{ lg: 6 }} p={2}>
          <Heading
            textAlign={'center'}
            mb="2"
            fontSize={{ base: 'xl', lg: '2xl' }}
            color="acadianaBlue.700"
          >
            🏆 {new Date().getFullYear()} Louisiana Leaderboard 🏆
          </Heading>
          <LouisianaStandings />
        </Box>
      </Flex>
    </>
  );
};

export default Home;
