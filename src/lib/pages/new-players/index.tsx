import { Box, HStack, Heading, Link, List, Text } from '@chakra-ui/react';
import { Helmet } from 'react-helmet-async';

function NewPlayers() {
  return (
    <Box p={8}>
      <Helmet>
        <title>New Player Guide | Acadiana Pinball Players</title>
        <meta
          name="description"
          content="Learn the basics of competitive pinball in the Acadiana, LA area. Find out how to get started, where to play, and how to connect with other players."
        />
      </Helmet>
      <Heading size="2xl" textAlign="center">
        New Player Guide
      </Heading>
      <HStack>
        <Box mb={2}>
          <Heading fontSize={'xl'}>Competitive Pinball?!?!</Heading>
          <Text>
            That's right, competitive pinball. Its like regular pinball except
            way cooler with a bit more cursing. Competitive pinball has been
            around since the early 1990s with most tournaments being organized
            in parntnership with the IFPA to track player and tournament
            statistics. There's even State, National and World champtionships if
            you rank well enough! So thats all well and good, but how do you get
            started playing? Well fist you're here and that's a good start but
            the next think you need to do is find a local tournament and
            compete!
          </Text>
        </Box>
      </HStack>
      <Box mb={2}>
        <Heading fontSize={'xl'}>How To Find A Tournament</Heading>
        <Text>
          We have a handy Events schedule and{' '}
          <Link
            variant={'underline'}
            href="https://www.facebook.com/groups/1121754879359249"
          >
            Facebook group
          </Link>{' '}
          that contains all the upcoming tournaments in and around the Acadiana
          area. You can also find a calender of all tournaments on the{' '}
          <Link
            variant={'underline'}
            href="https://www.ifpapinball.com/calendar"
          >
            IFPA website
          </Link>
          .
        </Text>
      </Box>
      <Box mb={2}>
        <Heading fontSize={'xl'}>
          Things To Know Before Your First Tournament
        </Heading>
        <Text>
          Here's a handly list of a few things to know before your first
          tournament:
          <List.Root>
            <List.Item mb={1}>
              Every pinball machine has multiplayer - each player puts in their
              credit and you press START the for the number of players playing
              on that machine.
            </List.Item>
            <List.Item mb={1}>
              3 balls per game - everyone plays their first ball, then it cycles
              back to the first player to play their 2nd ball until all four
              players have played all 3 of their balls then its game over.
            </List.Item>
            <List.Item mb={1}>
              Speaking of balls... DONT PLAY EXTRA BALLS - if you get an extra
              ball during your game, plunge it and let it drain. This keeps
              things fair as extra balls can sometimes be a random award.
            </List.Item>
            <List.Item mb={1}>
              Ball stuck? Raise your hand - if your ball gets stuck just raise
              your hand and a tournament director will come and assist you.
            </List.Item>
            <List.Item>
              Yes! You can move the machine - many people think this is cheating
              but it is a completely valid form of play. Be mindful of the tilt
              bob though!
            </List.Item>
          </List.Root>
        </Text>
      </Box>
      <Box mb={2}>
        <Heading fontSize={'xl'}>Whoa! There's Strategy and Skill??</Heading>
        <Text>
          Lots of new players are surprised to learn that pinball isn't a random
          game of chance. There's tons of options at your disposal in order to
          control the ball and playfield in order to rack up big points. Here's
          a short list of some important strategies that apply to every machine:
          <List.Root>
            <List.Item mb={1}>
              Modes, Multipliers and Multiball - Every machine has the Big 3.
              Learn what modes are most lucrative, stack them with a playfield
              multiplier and multiball and blow up the machine
            </List.Item>
            <List.Item mb={1}>
              Skill Shots - Each machine has a skill shot right when you plunge
              the ball. Learn the skill shot(s) and rack up some valuable points
              right from the start.
            </List.Item>

            <List.Item mb={1}>
              Dead Bounce - You dont always have to flip when the ball gets near
              the flipper. Learn to Dead Bouce! Here's a{' '}
              <Link
                variant="underline"
                href="https://www.youtube.com/watch?v=adILIebIozo"
              >
                great tutorial by Abe Flips
              </Link>{' '}
              on how to do it.
            </List.Item>
            <List.Item mb={1}>
              Nudging - You can move the machine! Push it a bit when the ball is
              in danger to influence the trajectory of the ball. Here's a{' '}
              <Link
                variant="underline"
                href="https://www.youtube.com/watch?v=xeRcCbNNTeU"
              >
                fantastic tutorial by Abe Flips
              </Link>{' '}
              on the basics of nudging
            </List.Item>
          </List.Root>
        </Text>
      </Box>
    </Box>
  );
}

export default NewPlayers;
