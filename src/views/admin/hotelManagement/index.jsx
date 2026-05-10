import React from "react";
import {
  Badge,
  Box,
  Button,
  Flex,
  Icon,
  SimpleGrid,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import Card from "components/card/Card";
import MiniStatistics from "components/card/MiniStatistics";
import IconBox from "components/icons/IconBox";
import {
  MdAddBusiness,
  MdBedroomParent,
  MdHotel,
  MdOutlineLocationOn,
  MdVerified,
} from "react-icons/md";

const hotels = [
  {
    code: "HTL-001",
    name: "Sunrise Hotel Saigon",
    city: "Ho Chi Minh",
    rooms: 128,
    status: "Active",
    address: "123 Nguyen Hue Blvd, District 1",
  },
  {
    code: "HTL-014",
    name: "Blue Coast Resort",
    city: "Da Nang",
    rooms: 86,
    status: "Draft",
    address: "456 Tran Phu St, My An Ward",
  },
  {
    code: "HTL-032",
    name: "Lotus Riverside Suites",
    city: "Can Tho",
    rooms: 54,
    status: "Active",
    address: "789 Nguyen Van Cu St, Ninh Kieu District",
  },
];

export default function HotelManagement() {
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const mutedColor = useColorModeValue("secondaryGray.600", "secondaryGray.400");
  const borderColor = useColorModeValue("gray.100", "whiteAlpha.100");

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid columns={{ base: 1, md: 2, xl: 4 }} gap="20px" mb="20px">
        <MiniStatistics
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg={boxBg}
              icon={<Icon as={MdHotel} w="28px" h="28px" color={brandColor} />}
            />
          }
          name="Total Hotels"
          value="68"
        />
        <MiniStatistics
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg={boxBg}
              icon={
                <Icon as={MdVerified} w="28px" h="28px" color={brandColor} />
              }
            />
          }
          name="Active Listings"
          value="52"
        />
        <MiniStatistics
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg={boxBg}
              icon={
                <Icon as={MdBedroomParent} w="28px" h="28px" color={brandColor} />
              }
            />
          }
          name="Total Rooms"
          value="2,486"
        />
        <MiniStatistics
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg={boxBg}
              icon={
                <Icon
                  as={MdOutlineLocationOn}
                  w="28px"
                  h="28px"
                  color={brandColor}
                />
              }
            />
          }
          name="Cities Covered"
          value="12"
        />
      </SimpleGrid>

      <SimpleGrid columns={{ base: 1, xl: 5 }} gap="100%">
        <Card p="24px" gridColumn={{ base: "auto", xl: "span 2" }}>
          <Flex align="center" justify="space-between" mb="18px" gap="12px">
            <Box>
              <Text color={textColor} fontSize="xl" fontWeight="700">
                Hotel Management
              </Text>
              <Text color={mutedColor} fontSize="sm" mt="4px">
                Entry tab for future hotel onboarding, approval, inventory, and
                operations flows.
              </Text>
            </Box>
            <Button
              leftIcon={<Icon as={MdAddBusiness} />}
              colorScheme="brand"
              variant="solid">
              Add hotel
            </Button>
          </Flex>

          <TableContainer>
            <Table variant="striped">
              <Thead>
                <Tr>
                  <Th>Code</Th>
                  <Th>Hotel Name</Th>
                  <Th>Address</Th>
                  <Th isNumeric>Rooms</Th>
                  <Th>Status</Th>
                  
                </Tr>
              </Thead>
              <Tbody>
                {hotels.map((hotel) => (
                  <Tr key={hotel.code}>
                    <Td>{hotel.code}</Td>
                    <Td color={textColor} fontWeight="600">
                      {hotel.name}
                    </Td>
                    <Td><dev>{hotel.address}
                      , {hotel.city}
                    </dev></Td>
                    <Td isNumeric>{hotel.rooms}</Td>
                    <Td>
                      <Badge
                        colorScheme={hotel.status === "Active" ? "green" : "orange"}
                        borderRadius="999px"
                        px="10px"
                        py="4px">
                        {hotel.status}
                      </Badge>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Card>

        {/* <Card p="24px">
          <Text color={textColor} fontSize="lg" fontWeight="700" mb="16px">
            Next Build Targets
          </Text>
          <Box
            border="1px solid"
            borderColor={borderColor}
            borderRadius="18px"
            p="16px"
            mb="12px">
            <Text color={textColor} fontWeight="600" mb="4px">
              Hotel profile
            </Text>
            <Text color={mutedColor} fontSize="sm">
              Core info, gallery, address, amenities, and policy sections.
            </Text>
          </Box>
          <Box
            border="1px solid"
            borderColor={borderColor}
            borderRadius="18px"
            p="16px"
            mb="12px">
            <Text color={textColor} fontWeight="600" mb="4px">
              Room inventory
            </Text>
            <Text color={mutedColor} fontSize="sm">
              Room type setup, quota, pricing, and seasonal overrides.
            </Text>
          </Box>
          <Box border="1px solid" borderColor={borderColor} borderRadius="18px" p="16px">
            <Text color={textColor} fontWeight="600" mb="4px">
              Approval workflow
            </Text>
            <Text color={mutedColor} fontSize="sm">
              Draft, review, publish, suspend, and audit trail lifecycle.
            </Text>
          </Box>
        </Card> */}
      </SimpleGrid>
    </Box>
  );
}
