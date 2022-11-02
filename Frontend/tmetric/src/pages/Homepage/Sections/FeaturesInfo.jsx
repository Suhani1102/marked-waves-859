import { Box, Heading, HStack, Image, Text, Link } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { BsArrowRightShort } from "react-icons/bs";

const FeaturesInfo = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const featureTypes = [
    {
      id: 1,
      name: "Time Tracking",
      icon_gray: "https://tmetric.com/media/qojb5snq/icon-timer-gray.svg",
      icon_blue: "https://tmetric.com/media/2p4n4oyc/icon-timer-blue.svg",
      img: "https://tmetric.com/media/e5enfaae/img-advantages.png",
      desc: "Capture every task you work on. Take control over time intervals by simple time tracking",
    },
    {
      id: 2,
      name: "Project Management",
      icon_gray: "https://tmetric.com/media/kqgpqtvh/icon-project-gray.svg",
      icon_blue: "https://tmetric.com/media/1niddz51/icon-project-blue.svg",
      img: "https://tmetric.com/media/d2dhexfq/img-advantages-project-management.png",
      desc: "Create projects, set rates and budgets. Keep tracking of hours spent on tasks and see the project progress at a glance, collaborate easily, keep deadlines and prevent over budgeting",
    },
    {
      id: 3,
      name: "Team Management",
      icon_gray: "https://tmetric.com/media/isxcp2ip/icon-team-gray.svg",
      icon_blue: "https://tmetric.com/media/2gxihhdu/icon-team-blue.svg",
      img: "https://tmetric.com/media/b3abexjt/img-advantages-team-management.png",
      desc: "Measure productivity and activity level of your team, assign tasks in a click,  monitor workflow and distribute the workload. Syncs your teams’ work and improves efficiency.",
    },
    {
      id: 4,
      name: "Billing & Invoicing",
      icon_gray: "https://tmetric.com/media/5r1l1s4g/icon-invoice-gray.svg",
      icon_blue: "https://tmetric.com/media/s4koycnp/icon-invoice-blue.svg",
      img: "https://tmetric.com/media/nmmhl5l3/img-advantages-invoice.png",
      desc: "With the accurate billing system, set billable rates and easily create an invoice based on tracked time and expenses, and get paid promptly.",
    },
    {
      id: 5,
      name: "Reporting",
      icon_gray: "https://tmetric.com/media/g3jc0dsg/icon-reports-gray.svg",
      icon_blue: "https://tmetric.com/media/yoblhiut/icon-reports-blue.svg",
      img: "https://tmetric.com/media/bpli5hts/img-advantages-reporting.png",
      desc: "With a flexible reporting system, you have a choice to get insights into your projects and team productivity, analyze incomes and keep costs under control",
    },
    {
      id: 6,
      name: "Time Off",
      icon_gray: "https://tmetric.com/media/bxylkc2s/icon-time-off-gray.svg",
      icon_blue: "https://tmetric.com/media/cajpa4uy/icon-time-off-blue.svg",
      img: "	https://tmetric.com/media/kuqjgrfl/img-advantages-time-off.png",
      desc: "Add a PTO policy for your organization, simply ask for days off, control missed workdays, manage balances and teams attendance hassle-free",
    },
  ];
  return (
    <Box p="80px 60px">
      <Heading
        as="h2"
        fontWeight="bold"
        fontSize="3rem"
        m="0 auto 2rem"
        textAlign="center"
        maxW="840px"
        noOfLines={2}
      >
        What makes TMetric your best business companion
      </Heading>
      <Tabs
        variant="unstyled"
        orientation="vertical"
        onChange={(index) => setTabIndex(index)}
      >
        <TabPanels maxW="66.66667%" p="0 20px">
          {featureTypes.map((item) => (
            <TabPanel key={item.id}>
              <Image
                src={item.img}
                boxShadow={"-40px 60px 80px rgb(7 13 20 / 8%);"}
              />
            </TabPanel>
          ))}
        </TabPanels>
        <TabList
          aria-orientation="vertical"
          maxW={{ lg: "33.33333%" }}
          p="0 30px"
        >
          {featureTypes.map((item) => (
            <Tab
              key={item.id}
              _selected={{ color: "#3070f0", bg: "#e7edfc" }}
              _hover={{ boxShadow: "-12px 16px 32px rgb(0 54 163 / 12%)" }}
              p="15px 33px 15px 23px"
              mb="1rem"
              border="1px solid #e2e7eb"
              w="100%"
              borderRadius="12px"
              display="flex"
              justifyContent="flex-start"
            >
              {tabIndex === item.id - 1 ? (
                <>
                  <Image src={item.icon_blue} alignSelf="baseline" />
                  <Box color="#2e4497" textAlign="left" ml="17px">
                    <Text fontSize="1.25rem" fontWeight="600">
                      {item.name}
                    </Text>
                    <Text fontSize=".95rem" fontWeight="400">
                      {item.desc}
                    </Text>
                    <Link
                      pl="10px"
                      color="#3070f0"
                      fontWeight={500}
                      textDecoration="none"
                      lineHeight="initial"
                      _hover={{ color: "#0053a6" }}
                    >
                      <Box fontSize="1rem" display="flex">
                        <Text>Learn More</Text>
                        <BsArrowRightShort fontSize="25px" />
                      </Box>
                    </Link>
                  </Box>
                </>
              ) : (
                <>
                  <Image src={item.icon_gray} />
                  <Text fontSize="1.25rem" fontWeight="600" ml="17px">
                    {item.name}
                  </Text>
                </>
              )}
            </Tab>
          ))}
        </TabList>
      </Tabs>
    </Box>
  );
};

export default FeaturesInfo;
