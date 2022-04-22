import React from "react";
import { Image, Dimensions } from "react-native";
import { PieChart } from "react-native-chart-kit";

import { Container, Row, Text, Label, Title } from "./styles";

export default function Statistics({ navigation }) {
  const data = [
    {
      name: "Alimentação",
      amount: 0,
      color: "#ed4242",
      legendFontColor: "#eee",
    },
    {
      name: "Imposto",
      amount: 0,
      color: "#e38e17",
      legendFontColor: "#eee",
    },
    {
      name: "Lazer",
      amount: 0,
      color: "#17e36f",
      legendFontColor: "#eee",
    },
    {
      name: "Educação",
      amount: 0,
      color: "#17a9e3",
      legendFontColor: "#eee",
    },
    {
      name: "Outro",
      amount: 0,
      color: "#777777",
      legendFontColor: "#eee",
    },
  ];

  return (
    <Container>
      <Title>Gráficos</Title>

      <Label>Despesas</Label>

      <PieChart
        data={data}
        width={Dimensions.get("window").width}
        height={250}
        accessor={"amount"}
        backgroundColor={"transparent"}
        center={[0, 0]}
        chartConfig={{
          backgroundGradientFrom: "#1E2923",
          backgroundGradientFromOpacity: 0,
          backgroundGradientTo: "#08130D",
          backgroundGradientToOpacity: 0.5,
          color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
          strokeWidth: 2,
          useShadowColorFromDataset: false,
        }}
      />
    </Container>
  );
}
