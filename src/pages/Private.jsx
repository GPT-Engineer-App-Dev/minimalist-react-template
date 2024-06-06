import React from 'react';
import { Container, VStack, Heading, Text, Box, Spinner, Flex } from "@chakra-ui/react";
import { useEvents } from "../integrations/supabase/index.js";

const Private = () => {
  const { data: events, isLoading, isError } = useEvents();

  if (isLoading) {
    return (
      <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <Spinner size="xl" />
      </Container>
    );
  }

  if (isError) {
    return (
      <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <Text fontSize="lg" color="red.500">Failed to load events.</Text>
      </Container>
    );
  }

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="2xl">Protected Page</Heading>
        <Text fontSize="lg">This is a protected page. Only authenticated users can see this.</Text>
        <Box width="100%">
          <Heading as="h2" size="lg" mb={4}>Events</Heading>
          {events.length === 0 ? (
            <Text fontSize="md">No events available.</Text>
          ) : (
            events.map(event => (
              <Box key={event.id} p={4} mb={4} borderWidth="1px" borderRadius="lg">
                <Heading as="h3" size="md">{event.name}</Heading>
                <Text>Date: {new Date(event.date).toLocaleDateString()}</Text>
                <Text>Venue ID: {event.venue_id}</Text>
                <Text>Starred: {event.is_starred ? 'Yes' : 'No'}</Text>
              </Box>
            ))
          )}
        </Box>
      </VStack>
    </Container>
  );
};

export default Private;