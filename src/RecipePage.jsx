import React from "react";
import {
  Box,
  VStack,
  Image,
  Heading,
  Text,
  Tag,
  Wrap,
  Container,
  Button,
} from "@chakra-ui/react";

export const RecipePage = ({ recipe, onBack }) => {
  const formatNutrientValue = (nutrient) =>
    nutrient ? `${nutrient.quantity.toFixed(2)} ${nutrient.unit}` : "N/A";

  return (
    <Container maxW="container.md" centerContent py={10}>
      <VStack spacing={4} align="stretch">
        <Heading as="h2" size="xl" textAlign="center">
          {recipe.label}
        </Heading>

        {recipe.image && (
          <Image
            src={recipe.image}
            alt={`Recipe for ${recipe.label}`}
            borderRadius="lg"
            objectFit="cover"
            width="full"
          />
        )}

        <Text fontSize="lg" fontWeight="semibold">
          Meal Type: {recipe.mealType.join(", ")}
        </Text>
        <Text fontSize="lg">
          Total Cooking Time: {recipe.totalTime || "N/A"}
        </Text>
        <Text fontSize="lg">Servings: {recipe.yield}</Text>

        <Box mt={4}>
          <Heading size="md">Diet Label:</Heading>
          <Wrap>
            {recipe.dietLabels.map((label, index) => (
              <Tag key={index} colorScheme="green" m={1}>
                {label}
              </Tag>
            ))}
          </Wrap>
        </Box>

        <Box mt={4}>
          <Heading size="md">Health Labels:</Heading>
          <Wrap>
            {recipe.healthLabels.map((label) => (
              <Tag key={label} colorScheme="blue" m={1}>
                {label}
              </Tag>
            ))}
          </Wrap>
        </Box>

        <Box mt={4}>
          <Heading size="md">Cautions:</Heading>
          <Wrap>
            {recipe.cautions.map((caution) => (
              <Tag key={caution} colorScheme="red" m={1}>
                {caution}
              </Tag>
            ))}
          </Wrap>
        </Box>

        <Heading size="md" mt={4}>
          Ingredients:
        </Heading>
        <VStack align="start" pl={4}>
          {recipe.ingredientLines.map((line) => (
            <Text key={line} fontSize="md">
              {line}
            </Text>
          ))}
        </VStack>

        <Heading size="md" mt={4}>
          Total Nutrients:
        </Heading>
        <Box pl={4}>
          <Text fontSize="md">
            Calories: {formatNutrientValue(recipe.totalNutrients.ENERC_KCAL)}
          </Text>
          <Text fontSize="md">
            Fat: {formatNutrientValue(recipe.totalNutrients.FAT)}
          </Text>
          <Text fontSize="md">
            Carbs: {formatNutrientValue(recipe.totalNutrients.CHOCDF)}
          </Text>
          <Text fontSize="md">
            Protein: {formatNutrientValue(recipe.totalNutrients.PROCNT)}
          </Text>
          <Text fontSize="md">
            Cholesterol: {formatNutrientValue(recipe.totalNutrients.CHOLE)}
          </Text>
          <Text fontSize="md">
            Sodium: {formatNutrientValue(recipe.totalNutrients.NA)}
          </Text>
        </Box>
        <Button colorScheme="blue" onClick={onBack} mb={4}>
          Back to Recipes
        </Button>
      </VStack>
    </Container>
  );
};

export default RecipePage;
