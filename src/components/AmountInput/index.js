import React, { useState, useEffect } from "react";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Container, Label, Input, Badge, IconWrapper } from "./styles";

export default function AmountInput({ onChangeText, defaultValue, ...rest }) {
  const [currentValue, setCurrentValue] = useState(defaultValue || "");

  return (
    <Container>
      <Label>Valor</Label>
      <Input
        keyboardType="numeric"
        onChangeText={(text) => {
          onChangeText(text);
          setCurrentValue(text);
        }}
        placeholder="000,00"
        placeholderTextColor="#999"
        defaultValue={defaultValue}
        {...rest}
      />

      <Badge>R$</Badge>

      {!!currentValue && (
        <IconWrapper>
          <MaterialCommunityIcons
            name="circle"
            color={Number(currentValue) > 0 ? "#80cc70" : "#cf5540"}
            size={18}
          />
        </IconWrapper>
      )}
    </Container>
  );
}
