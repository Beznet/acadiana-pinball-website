import { formatDate } from '@/lib/utils/format-date';
import {
  Box,
  Link,
  Spinner,
  Text,
  VStack,
  useBreakpointValue,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

export const EventsCalendar = () => {
  interface Event {
    tournament_id: string;
    tournament_name: string;
    city: string;
    event_start_date: string;
    website: string;
  }

  const [events, setEvents] = useState<Array<Event>>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const isMobile = useBreakpointValue({ base: true, md: false });

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
        setError(err instanceof Error ? err.message : 'Unexpected error');
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (error) {
    return <Text color="red.500">Error: {error}</Text>;
  }

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" h="50vh">
        <Spinner size="xl" />
      </Box>
    );
  }

  if (isMobile) {
    return (
      <Box maxHeight="50vh" overflowY="auto" pr={2}>
        <VStack align="stretch">
          {events.map((event) => (
            <Box
              key={event.tournament_id}
              borderWidth="1px"
              borderRadius="md"
              p={4}
              boxShadow="sm"
            >
              <Link
                href={event.website}
                fontWeight="bold"
                display="flex"
                alignItems="center"
                gap={2}
                mb={2}
                color="acadianaBlue.700"
                _hover={{ color: 'acadianaRed.500' }}
              >
                <FaExternalLinkAlt /> {event.tournament_name}
              </Link>
              <Text fontSize="sm">
                📍 {event.city} | 🗓 {formatDate(event.event_start_date)}
              </Text>
            </Box>
          ))}
        </VStack>
      </Box>
    );
  }

  // DESKTOP
  return (
    <Box maxHeight="40vh" overflowY="auto" pr={2}>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#f7f7f7' }}>
            <th style={{ textAlign: 'left', padding: '8px' }}>Tournament</th>
            <th style={{ textAlign: 'left', padding: '8px' }}>Location</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <tr key={event.tournament_id}>
              <td style={{ padding: '8px' }}>
                <Link
                  href={event.website}
                  display="flex"
                  alignItems="center"
                  gap="6px"
                  color="acadianaBlue.700"
                  _hover={{ color: 'acadianaRed.500', textDecoration: 'none' }}
                  style={{ fontWeight: 'bold' }}
                >
                  <FaExternalLinkAlt style={{ marginBottom: '2px' }} />
                  {event.tournament_name}
                </Link>
                <div style={{ fontSize: '0.85rem', color: 'var(--chakra-colors-gray-600)' }}>
                  {formatDate(event.event_start_date)}
                </div>
              </td>
              <td style={{ padding: '8px' }}>
                <span role="img" aria-label="location">
                  📍
                </span>{' '}
                {event.city}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Box>
  );
};
