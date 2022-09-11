import { Flex, Box, Text, Button } from "@chakra-ui/react";
import { Banner, Property } from "../components";
import RentApartmentImg from "../assets/images/rent-apartment.jpg";
import { baseURL, fetchAPI } from "../utils";

export default function Home({ propertiesForSale, propertiesForRent }) {
  return (
    <Box m="12">
      <Banner
        purpose="For Rent"
        imageURL={RentApartmentImg}
        title="Best Rental Homes"
        subtitle="Students and Small Families"
        desc1="Best Flats under 8000"
        desc2="Facilities: AC , Fridge , Parking "
        buttonURL="/search?purpose=for-rent"
        buttonText="Explore Renting"
      />
      <Flex>
        {propertiesForRent.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </Flex>
    </Box>
  );
}

export async function getStaticProps() {
  const forSaleResponseObj = await fetchAPI(
    `${baseURL}/properties/list?locationExternalIDs=5002%2C6020&purpose=for-rent&hitsPerPage=25&page=0&categoryExternalID=4`
  );

  const forRentResponseObj = await fetchAPI(
    `${baseURL}/properties/list?locationExternalIDs=5002%2C6020&purpose=for-sale&hitsPerPage=25&page=0&categoryExternalID=4`
  );

  return {
    props: {
      propertiesForSale: forSaleResponseObj?.hits || [],
      propertiesForRent: forRentResponseObj?.hits || [],
    },
  };
}
