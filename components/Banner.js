import React from "react";
import Image from "next/image";
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
  return (
    <Flex flexWrap="wrap" justifyContent="center" alignItems="center">
      <Image src={imageURL} alt={purpose} height={500} width={700} />
      <Box p="5">
        <Text color="gray.500" fontSize="sm" fontWeight="medium">
          {purpose}
        </Text>
        <Text fontSize="3xl" fontWeight="bold">
          {title}
          <br />
          {subtitle}
        </Text>
        <Text
          color="gray.700"
          fontSize="lg"
          paddingTop="3"
          paddingBottom="3"
          fontWeight="bold"
        >
          {desc1}
          <br />
          {desc2}
        </Text>
        <Button fontSize="xl" bg="blue.300" color="white">
          <Link href={buttonURL}>{buttonText}</Link>
        </Button>
      </Box>
    </Flex>
  );
}

export default Banner;
