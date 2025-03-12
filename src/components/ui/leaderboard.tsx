import { formatLocation } from '@/lib/utils/format-location';
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
    <Table.ScrollArea borderWidth="1px" rounded="md" height="50vh">
      <Table.Root size="sm" stickyHeader striped>
        <Table.Caption>
          Source:{' '}
          <Link
            href="https://www.ifpapinball.com/series/nacs/2025/standingsView.php?l=LA"
            _hover={{ textDecoration: 'underline' }}
          >
            IFPA NACS Standings LA
          </Link>
        </Table.Caption>
        <Table.Header>
          <Table.Row bg="bg.emphasized">
            <Table.ColumnHeader fontWeight={'bold'}>Player</Table.ColumnHeader>
            <Table.ColumnHeader fontWeight={'bold'}>
              Location
            </Table.ColumnHeader>
            <Table.ColumnHeader fontWeight={'bold'}>WPPRs</Table.ColumnHeader>
            <Table.ColumnHeader fontWeight={'bold'}>LA Rank</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {standings.map((standing) => (
            <Table.Row key={standing.player_id}>
              <Table.Cell>{standing.player_name}</Table.Cell>
              <Table.Cell>
                {formatLocation(standing.city, standing.stateprov_code)}
              </Table.Cell>
              <Table.Cell>{standing.wppr_points}</Table.Cell>
              <Table.Cell>{standing.series_rank}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Table.ScrollArea>
  );
};
