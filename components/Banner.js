import React from "react";
import Link from "next/link";
import { Flex, Box, Text, Button } from "@chakra-ui/react";

function Banner({
  purpose,
  imageURL,
  title,
  subtitle,
  desc1,
  desc2,
  buttonURL,
  buttonText,
}) {
  const imgSrc = typeof imageURL === "string" ? imageURL : imageURL?.src || imageURL;

  return (
    <Flex flexWrap="wrap" justifyContent="center" alignItems="center" gap={4} px={{ base: 2, md: 0 }} mb="8">
      <Box w={{ base: "100%", md: "auto" }} maxW="700px">
        <img
          src={imgSrc}
          alt={purpose}
          style={{ width: "100%", maxWidth: "700px", height: "auto", borderRadius: "12px" }}
        />
      </Box>
      <Box p="5" flex="1" minW={{ base: "100%", md: "280px" }}>
        <Text color="gray.500" fontSize="sm" fontWeight="medium">{purpose}</Text>
        <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold">
          {title}<br />{subtitle}
        </Text>
        <Text color="gray.700" fontSize="lg" py="3" fontWeight="bold">
          {desc1}<br />{desc2}
        </Text>
        <Button fontSize="xl" bg="blue.400" color="white" _hover={{ bg: "blue.500" }}>
          <Link href={buttonURL}>{buttonText}</Link>
        </Button>
      </Box>
    </Flex>
  );
}

export default Banner;
