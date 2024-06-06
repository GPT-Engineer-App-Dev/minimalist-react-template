import { Container, Text, VStack, Heading } from "@chakra-ui/react";

const Private = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Protected Page</Heading>
        <Text fontSize="lg">This is a protected page. Only authenticated users can see this.</Text>
      </VStack>
    </Container>
  );
};

export default Private;