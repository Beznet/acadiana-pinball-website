import { Box, Link, Spinner, Table } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

export const EventsCalendar = () => {
  interface Event {
    tournament_id: string;
    tournament_name: string;
    city: string;
    stateprov: string;
    event_start_date: string;
    website: string;
  }

  const [events, setEvents] = useState<Array<Event>>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(
          '/.netlify/functions/getEvents?regionCode=LA',
        );

        if (!response.ok) {
          throw new Error(`Error fetching events: ${response.statusText}`);
        }

        const data: Array<Event> = await response.json();
        setEvents(data);
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

    fetchEvents();
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
    <Table.ScrollArea borderWidth="1px" rounded="md" height="20vh">
      <Table.Root size="sm" stickyHeader striped>
        <Table.Header>
          <Table.Row bg="bg.emphasized">
            <Table.ColumnHeader fontWeight={'bold'}>
              Tournament
            </Table.ColumnHeader>
            <Table.ColumnHeader fontWeight={'bold'}>City</Table.ColumnHeader>
            <Table.ColumnHeader fontWeight={'bold'}>State</Table.ColumnHeader>
            <Table.ColumnHeader fontWeight={'bold'}>Date</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {events.map((event) => (
            <Table.Row key={event.tournament_id}>
              <Table.Cell>
                <Link
                  href={event.website}
                  _hover={{ textDecoration: 'underline' }}
                >
                  <FaExternalLinkAlt />
                  {event.tournament_name}
                </Link>
              </Table.Cell>
              <Table.Cell>
                <Link
                  href={event.website}
                  _hover={{ textDecoration: 'underline' }}
                >
                  {event.city}
                </Link>
              </Table.Cell>
              <Table.Cell>
                <Link
                  href={event.website}
                  _hover={{ textDecoration: 'underline' }}
                >
                  {event.stateprov}
                </Link>
              </Table.Cell>
              <Table.Cell>
                <Link
                  href={event.website}
                  _hover={{ textDecoration: 'underline' }}
                >
                  {event.event_start_date}
                </Link>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Table.ScrollArea>
  );
};
