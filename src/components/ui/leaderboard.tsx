import { Table } from '@chakra-ui/react';
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
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message || 'An unexpected error occurred.');
        } else {
          setError('An unexpected error occurred.');
        }
      }
    };

    fetchStandings();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Table.ScrollArea borderWidth="1px" rounded="md" height="50vh">
      <Table.Root size="sm" stickyHeader colorScheme={'orange'}>
        <Table.Caption>Source: IFPA NACS Standings LA</Table.Caption>
        <Table.Header>
          <Table.Row bg="bg.subtle">
            <Table.ColumnHeader>Player</Table.ColumnHeader>
            <Table.ColumnHeader>Location</Table.ColumnHeader>
            <Table.ColumnHeader>LA Rank</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {standings.map((standing) => (
            <Table.Row key={standing.player_id}>
              <Table.Cell>{standing.player_name}</Table.Cell>
              <Table.Cell>
                {standing?.city}, {standing?.stateprov_code}
              </Table.Cell>
              <Table.Cell>{standing.series_rank}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Table.ScrollArea>
  );
};
