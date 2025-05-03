import { Box, Heading, Link, List, Text } from '@chakra-ui/react';
import { Helmet } from 'react-helmet-async';

function About() {
  return (
    <Box m={{ lg: 6 }} p={2}>
      <Helmet>
        <title>About | Acadiana Pinball Players</title>
        <meta
          name="description"
          content="Learn about Acadiana Pinball Players, a vibrant community in Louisiana dedicated to pinball tournaments, leagues, and casual play."
        />
      </Helmet>
      <Heading size="2xl" textAlign="center">
        About Acadiana Pinball Players
      </Heading>
      <Text my={4}>
        Welcome to Acadiana Pinball Players! The place for all things pinball in
        the heart of Louisiana! We’re a community of pinball enthusiasts
        dedicated to celebrating the game and growing the competitive pinball
        scene in Lafayette, Carencro, Breaux Bridge, Youngsville and surrounding
        areas. Whether you're a casual player or a seasoned flipper, our goal is
        to foster a welcoming environment where players can connect, improve
        their skills, and compete in tournaments.
      </Text>

      <Heading size="md">Our Mission</Heading>
      <Text mb={4}>
        Promote a love for pinball through casual meetups and league play. We
        host competitive tournaments that challenge players and bring the
        Acadiana pinball community together. We also support the global pinball
        community by aligning with the International Flipper Pinball Association
        (IFPA) to offer sanctioned events.
      </Text>

      <Heading size="md">Tournaments and More!</Heading>
      <Text mb={4}>
        <List.Root>
          <List.Item>
            Monthly and Seasonal Tournaments: Compete in IFPA-sanctioned events
            and climb the global rankings.
          </List.Item>
          <List.Item>
            Casual Meetups and Free Play Nights – Enjoy laid-back games and
            connect with other pinheads.
          </List.Item>
          <List.Item>
            Player Rankings and Stats – Track your progress and see how you
            stack up against other players
          </List.Item>
        </List.Root>
      </Text>

      <Heading size="md">Join the Fun! 🎉 </Heading>
      <Text>
        Ready to play? Join us at our next event or connect with others on our{' '}
        <Link
          variant="underline"
          href="https://www.facebook.com/groups/1121754879359249"
        >
          Facebook Page
        </Link>
        . Follow us for updates on tournaments, meetups, and more!
      </Text>
    </Box>
  );
}

export default About;
