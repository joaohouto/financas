import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Container, Text } from "./styles";

export default function NotFoundMessage() {
  return (
    <Container>
      <MaterialCommunityIcons
        size={24}
        color="#777"
        name="alert-circle-outline"
      />
      <Text>Nada encontrado</Text>
    </Container>
  );
}
