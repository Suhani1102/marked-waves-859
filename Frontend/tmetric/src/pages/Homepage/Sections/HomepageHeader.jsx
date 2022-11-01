import React, { Fragment, useState } from "react";
import { BsPlayFill } from "react-icons/bs";
import {
  Box,
  HStack,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Button,
  Text,
  Image,
} from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";

const HomepageHeader = () => {
  const [video, setVideo] = useState(false);
  return (
    <Fragment>
      {video && (
        <Box
          width="100%"
          height="100vh"
          position="fixed"
          top="5%"
          zIndex="200"
          backgroundColor="rgba(68, 66, 66, 0.693)"
          display="flex"
          justifyContent="center"
          alignItems="center"
          onClick={() => setVideo(false)}
        >
          <iframe
            src="https://www.youtube.com/embed/d2LwNiALPIM"
            title="Tmetric Intro Video"
            width="90%"
            height="90%"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Box>
      )}
      <HStack
        bg={"#FBEFCA"}
        pt="6.25rem"
        pb="1.25rem"
        pl={{ base: "20px", sm: "25px", md: "40px", lg: "80px" }}
        pr={{ base: "20px", sm: "25px", md: "40px", lg: "80px" }}
        flexDirection={{
          base: "column",
          sm: "column",
          md: "column",
          lg: "row",
        }}
      >
        <Box
          w={{ base: "80%", sm: "100%", md: "100%", lg: "50%" }}
          p={{ sm: "0", md: "0", lg: "0 15px" }}
        >
          <Heading
            as="h1"
            fontSize={{
              base: "2.75rem",
              sm: "2.75rem",
              md: "2.75rem",
              lg: "3.75rem",
            }}
            fontWeight="bold"
            mb="1rem"
            noOfLines={2}
          >
            Make the best use of your time
          </Heading>
          <Heading as="h3" fontSize="1.25rem" fontWeight="bold">
            TMetric is a smart choice for time tracking to see work in progress
            and keep team, cost and quality under control
          </Heading>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              m="1rem 0"
              children={<EmailIcon color="#3070f0" />}
            />
            <Input
              placeholder="Enter your email address"
              m="1rem 0"
              maxW="450px"
              background="white"
              size="md"
            />
          </InputGroup>
          <HStack
            flexDirection={{
              base: "column",
              sm: "column",
              md: "row",
              lg: "row",
            }}
            justifyContent="flex-start"
          >
            <Button
              size="md"
              bg="#3070f0"
              color="white"
              minW="200px"
              _hover={{ bg: "#0053a6" }}
            >
              Get Started
            </Button>
            <Text marginStart="1rem">Fully Functional 30-Day Trial</Text>
          </HStack>
        </Box>
        <Box
          w={{ sm: "100%", md: "100%", lg: "50%" }}
          p={{ sm: "25px 0", md: "25px 0", lg: "0 15px" }}
        >
          <Box onClick={() => setVideo(true)} position="relative">
            <Image
              src="https://tmetric.com/media/w53hmkzd/img-video-cover.png"
              alt=""
            />
            <Box
              position="absolute"
              top="28%"
              left="42%"
              fontSize="60px"
              display="flex"
              justifyContent="center"
              alignItems="center"
              width="110px"
              height="110px"
              backgroundColor="#212529"
              color="white"
              borderRadius="50%"
              boxShadow="rgb(50 50 93 / 25%) 0px 13px 27px -5px rgb(0 0 0 / 30%) 0px 8px 16px -8px"
              cursor="pointer"
              transitionDuration="0.3s"
            >
              <BsPlayFill onClick={() => setVideo(true)} />
            </Box>
          </Box>
        </Box>
      </HStack>
    </Fragment>
  );
};

export default HomepageHeader;
