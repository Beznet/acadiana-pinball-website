import { Box, Link, Spinner, Table } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

export const LouisianaStandings = () => {
  interface Standing {
    player_id: number;
    city: string;
    player_name: string;
    stateprov_code: string;
    series_rank: number;
    wppr_points: number;
    win_count: number;
    event_count: number;
  }

  const [standings, setStandings] = useState<Array<Standing>>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStandings = async () => {
      try {
        const response = await fetch(
          '/.netlify/functions/getStandings?year=2025&regionCode=LA',
        );

        if (!response.ok) {
          throw new Error(`Error fetching standings: ${response.statusText}`);
        }

        const data = await response.json();
        setStandings(data);
        setLoading(false);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message || 'An unexpected error occurred.');
        } else {
          setError('An unexpected error occurred.');
        }
        setLoading(false);
      }
    };

    fetchStandings();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="50vh"
      >
        <Spinner size="xl" />
      </Box>
    );
  }
  return (
    <Table.ScrollArea borderWidth="1px" rounded="md" maxHeight="40vh">
      <Table.Root size="md" stickyHeader striped>
        <Table.Caption>
          Source:{' '}
          <Link
            href="https://www.ifpapinball.com/series/nacs/2025/standingsView.php?l=LA"
            color="acadianaBlue.700"
            _hover={{ color: 'acadianaRed.500', textDecoration: 'none' }}
          >
            IFPA NACS Standings LA
          </Link>
        </Table.Caption>
        <Table.Header>
          <Table.Row bg="bg.emphasized">
            <Table.ColumnHeader fontWeight={'bold'} color="acadianaBlue.700">Player</Table.ColumnHeader>
            <Table.ColumnHeader fontWeight={'bold'} color="acadianaBlue.700">Rank</Table.ColumnHeader>
            <Table.ColumnHeader fontWeight={'bold'} color="acadianaBlue.700">WPPRs</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {standings.map((standing) => (
            <Table.Row key={standing.player_id}>
              <Table.Cell color="acadianaGold.700">{standing.player_name}</Table.Cell>
              <Table.Cell>{standing.series_rank}</Table.Cell>
              <Table.Cell>{standing.wppr_points}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Table.ScrollArea>
  );
};
