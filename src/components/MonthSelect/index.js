import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Container, Text, Button } from "./styles";

const months = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

export default function MonthSelect({ value, handlePrevious, handleNext }) {
  return (
    <Container>
      <Button onPress={handlePrevious}>
        <MaterialCommunityIcons size={25} name="chevron-left" color="#999" />
      </Button>
      <Text>{months[Number(value) - 1]}</Text>
      <Button onPress={handleNext}>
        <MaterialCommunityIcons size={25} name="chevron-right" color="#999" />
      </Button>
    </Container>
  );
}
