import React from "react";
import moment from "moment";

import { Container, Column, Text, Bold, Amount } from "./styles";

export default function EventItem({
  category,
  description,
  datetime,
  amount,
  onPress,
}) {
  return (
    <Container onPress={onPress}>
      <Column>
        <Text>{category || "--"}</Text>
        <Bold numberOfLines={1} ellipsizeMode="tail">
          {description || "--"}
        </Bold>
      </Column>

      <Column>
        <Text>{moment(datetime).format("DD/MM/YYYY")}</Text>
        <Text>{moment(datetime).format("HH:mm")}</Text>
      </Column>

      <Column>
        <Amount style={{ color: amount < 0 ? "#cf5540" : "#80cc70" }}>
          R$ {amount > 0 && "+"}
          {amount.toFixed(2).toString()}
        </Amount>
      </Column>
    </Container>
  );
}
