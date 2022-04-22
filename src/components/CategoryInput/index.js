import React, { useState, useEffect } from "react";
import { Picker } from "@react-native-picker/picker";

import { Container, Label, FakeInput } from "./styles";

export default function CategoryInput({ onChange, pickerType, defaultValue }) {
  const [selectedValue, setSelectedValue] = useState(defaultValue || "");

  /*   useEffect(() => {
    console.log(defaultValue);
  }, []); */

  const positiveItems = [
    {
      label: "Outro",
      value: "Outro",
    },
    {
      label: "Salário",
      value: "Salário",
    },
    {
      label: "Rendimento",
      value: "Rendimento",
    },
    {
      label: "Bônus",
      value: "Bônus",
    },
  ];

  const negativeItems = [
    {
      label: "Outro",
      value: "Outro",
    },
    {
      label: "Alimentação",
      value: "Alimentação",
    },
    {
      label: "Educação",
      value: "Educação",
    },
    {
      label: "Lazer",
      value: "Lazer",
    },
    {
      label: "Imposto",
      value: "Imposto",
    },
  ];

  return (
    <Container>
      <Label>Categoria</Label>

      <FakeInput>
        <Picker
          onValueChange={(itemValue, itemIndex) => {
            onChange(itemValue);
            setSelectedValue(itemValue);
          }}
          prompt="Categoria"
          style={{ color: "#f1f1f1" }}
          dropdownIconColor="#777"
          selectedValue={defaultValue}
        >
          {pickerType == "positive"
            ? positiveItems.map((item) => (
                <Picker.Item
                  key={item.value}
                  label={item.label}
                  value={item.value}
                />
              ))
            : negativeItems.map((item) => (
                <Picker.Item
                  key={item.value}
                  label={item.label}
                  value={item.value}
                />
              ))}
        </Picker>
      </FakeInput>
    </Container>
  );
}
