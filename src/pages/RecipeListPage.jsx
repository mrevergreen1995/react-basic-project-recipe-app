import React, { useState } from "react";
import {
  Center,
  Heading,
  SimpleGrid,
  Box,
  Image,
  Badge,
  Text,
  VStack,
  Input,
} from "@chakra-ui/react";
import { data } from "../utils/data";

export const RecipeListPage = ({ onSelectRecipe }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const filteredRecipes = data.hits.filter((hit) => {
    const nameMatch = hit.recipe.label.toLowerCase().includes(searchQuery);
    const healthLabelMatch = hit.recipe.healthLabels.some((label) =>
      label.toLowerCase().includes(searchQuery)
    );
    return nameMatch || healthLabelMatch;
  });

  return (
    <Center padding="6" w="full" flexDir="column">
      <Heading mb="4">Chris Recipe Checker</Heading>
      <Input
        placeholder="Search recipes"
        mb="8"
        value={searchQuery}
        onChange={handleSearchChange}
        size="lg"
        maxW="600px"
        mx="auto"
      />
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3 }}
        spacing="10"
        maxW="1200px"
        w="full"
      >
        {filteredRecipes.map((hit) => (
          <Box
            key={hit.recipe.label}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            bg="white"
            _hover={{ shadow: "md", cursor: "pointer" }}
            onClick={() => onSelectRecipe(hit.recipe)}
          >
            <Image
              src={hit.recipe.image}
              alt={hit.recipe.label}
              w="full"
              h="200px"
              objectFit="cover"
            />
            <VStack align="start" p="4">
              <Text fontSize="sm" color="gray.500">
                {hit.recipe.mealType.join(", ")}
              </Text>
              <Text fontWeight="bold" mb="2">
                {hit.recipe.label}
              </Text>
              {hit.recipe.dietLabels.map((label) => (
                <Badge key={label} colorScheme="green" mr="2">
                  {label}
                </Badge>
              ))}
              <Text fontSize="sm" color="gray.500" mb="2">
                {hit.recipe.dishType.join(", ")}
              </Text>
              {hit.recipe.cautions && hit.recipe.cautions.length > 0 && (
                <VStack align="start">
                  <Text fontSize="sm" fontWeight="bold">
                    cautions:
                  </Text>
                  {hit.recipe.cautions.map((caution) => (
                    <Badge key={caution} colorScheme="red">
                      {caution}
                    </Badge>
                  ))}
                </VStack>
              )}
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </Center>
  );
};

export default RecipeListPage;
