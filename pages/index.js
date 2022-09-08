import { Flex, Box, Text, Button } from "@chakra-ui/react";
import { Banner } from "../components";
import RentApartmentImg from "../assets/images/rent-apartment.jpg";
import { baseURL, fetchAPI } from "../utils";

export default function Home({ propertiesForSale, propertiesForRent }) {
  console.log(propertiesForSale, propertiesForRent);
  return (
    <div>
      <h1>Hello world</h1>
      <Box>
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
      </Box>
    </div>
  );
}

export async function getStaticProps() {
  console.log("called");
  const forSaleResponseObj = await fetchAPI(
    `${baseURL}/properties/list?locationExternalIDS=5002&purpose=for-sale&hitsPerPage=6`
  );

  const forRentResponseObj = await fetchAPI(
    `${baseURL}/properties/list?locationExternalIDS=5002&purpose=for-rent&hitsPerPage=6`
  );

  return {
    props: {
      propertiesForSale: forSaleResponseObj?.hits || [],
      propertiesForRent: forRentResponseObj?.hits || [],
    },
  };
}
