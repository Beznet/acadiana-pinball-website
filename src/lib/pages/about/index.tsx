import { Box, Heading, Text } from '@chakra-ui/react';

function About() {
  return (
    <Box p={8}>
      <Heading>About Acadiana Pinball Players</Heading>
      <Text mt={4}>
        Welcome to Acadiana Pinball Players—the hub for all things pinball in
        the heart of Louisiana! We’re a community of pinball enthusiasts
        dedicated to celebrating the game and growing the competitive pinball
        scene in the Acadiana area. Whether you're a casual player or a seasoned
        competitor, our goal is to foster a welcoming environment where players
        can connect, improve their skills, and compete in exciting tournaments.
        <h3>Our Mission</h3>
        Promote a love for pinball through casual meetups and league play. Host
        competitive tournaments that challenge players and bring the community
        together. Support the global pinball community by aligning with
        organizations like the International Flipper Pinball Association (IFPA)
        to offer sanctioned events.
        <h3>What We Offer</h3>
        Monthly and Seasonal Tournaments – Compete in IFPA-sanctioned events and
        climb the global rankings. Casual Meetups and Free Play Nights – Enjoy
        laid-back games and connect with other pinball fans. Player Rankings and
        Stats – Track your progress and see how you stack up against other
        players. Special Events and Charity Tournaments – Play for a cause and
        help us give back to the community.
        <h3>🎉 Join the Fun!</h3>
        Ready to play? Join us at our next event and become part of the Acadiana
        pinball movement. Follow us for updates on tournaments, meetups, and
        more!
      </Text>
    </Box>
  );
}

export default About;
