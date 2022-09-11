import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Flex, Box, Text, Button, Avatar } from "@chakra-ui/react";
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
    isVerfied,
    externalId,
  },
}) => {
  return (
    <Link href={`/property/${externalId || ""}`} passHref>
      <Flex
        flexWrap="wrap"
        w="420px"
        p="5"
        paddingTop="0"
        justifyContent="flex-start"
        cursor="pointer"
      >
        <Box>
          <Image src={defaultImage} width={1400} height={1560} alt="property" />
        </Box>
      </Flex>
    </Link>
  );
};

export default Property;
