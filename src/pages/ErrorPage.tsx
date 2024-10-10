import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <NavBar />
      <Box padding={5}>
        <Heading>Oh no! Something went wrong.</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "This page doesn't exist."
            : "Sorry, an error occurred on this page."}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
