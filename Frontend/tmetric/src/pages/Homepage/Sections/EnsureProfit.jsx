import React from "react";
import {
  Box,
  Button,
  Heading,
  Link,
  Image,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";

const EnsureProfit = () => {
  return (
    <Box p="80px" pb="120px">
      <Box display="flex">
        <Box w="60%" pt="40px" m="0 73px -120px -85px">
          <Image
            src="https://tmetric.com/media/hx0j4hno/img-report-cases-svg.svg"
            alt="Ensure the profitability of your business"
          />
        </Box>
        <Box w="40%" p="0 20px">
          <Heading
            as="h2"
            fontWeight="bold"
            fontSize="3rem"
            mb="2rem"
            maxW="800px"
            noOfLines={3}
          >
            Ensure the profitability of your business
          </Heading>
          <UnorderedList
            fontSize="1.25rem"
            lineHeight="1.4"
            marginStart="2rem"
            fontWeight="500"
          >
              {/* Reviewed for: fw15_451 - use loops */}
            <ListItem>project management</ListItem>
            <ListItem>project budgeting</ListItem>
            <ListItem>billing and invoicing</ListItem>
            <ListItem>accurate payroll</ListItem>
            <ListItem>detailed reports</ListItem>
          </UnorderedList>
          <Button
            size="lg"
            bg="#3070f0"
            color="white"
            mt="20px"
            minW="200px"
            _hover={{ bg: "#0053a6" }}
          >
            Start Free Trial
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default EnsureProfit;
