import React from "react";
import Link from "next/link";
import { Flex, Box, Text, Avatar } from "@chakra-ui/react";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import millify from "millify";

import defaultImage from "../assets/images/default-image.jpg";

const Property = ({
  property: {
    coverPhoto,
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    id,
  },
}) => {
  const imageSrc = coverPhoto?.url || defaultImage.src || defaultImage;

  return (
    <Box
      w={{ base: "100%", sm: "320px", md: "350px" }}
      maxW="100%"
      p="4"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      _hover={{ shadow: "md" }}
      transition="all 0.2s"
    >
      <Box position="relative" mb="3">
        <img
          src={imageSrc}
          alt={title}
          style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "8px" }}
        />
        {isVerified && (
          <Box position="absolute" top="2" right="2" bg="green.500" color="white" px="2" py="1" borderRadius="md" fontSize="xs" display="flex" alignItems="center" gap="1">
            <GoVerified /> Verified
          </Box>
        )}
      </Box>
      <Flex justifyContent="space-between" alignItems="center" mb="2">
        <Text fontWeight="bold" fontSize="lg" color="blue.600">
          AED {millify(price)}{rentFrequency && `/${rentFrequency}`}
        </Text>
      </Flex>
      <Text fontWeight="semibold" fontSize="md" mb="2" noOfLines={2}>{title}</Text>
      <Flex flexWrap="wrap" gap="3" color="gray.600" fontSize="sm" mb="3">
        <Flex alignItems="center" gap="1"><FaBed /> {rooms} Beds</Flex>
        <Flex alignItems="center" gap="1"><FaBath /> {baths} Baths</Flex>
        <Flex alignItems="center" gap="1"><BsGridFill /> {millify(area)} sqft</Flex>
      </Flex>
      {agency && (
        <Flex alignItems="center" gap="2" mt="2">
          <Avatar size="xs" name={agency.name} />
          <Text fontSize="sm" color="gray.500">{agency.name}</Text>
        </Flex>
      )}
    </Box>
  );
};

export default Property;
