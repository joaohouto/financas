import React, { useState, useEffect } from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  Container,
  Label,
  Button,
  ButtonText,
  Badge,
  IconWrapper,
} from "./styles";

export default function DateTimeInput({ onChange, defaultValue }) {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const [datetime, setDatetime] = useState(defaultValue);

  const onConfirm = (data) => {
    const newDateTime = moment(data).format();

    onChange(newDateTime);
    setDatetime(newDateTime);
    setDatePickerVisibility(false);
  };

  useEffect(() => {
    onChange(datetime);
  }, []);

  useEffect(() => {
    onChange(defaultValue);
  }, [defaultValue]);

  return (
    <Container>
      <Label>Data e Hora</Label>

      <IconWrapper>
        <MaterialCommunityIcons name="calendar" size={24} color="#777" />
      </IconWrapper>

      <Button onPress={() => setDatePickerVisibility(true)}>
        <ButtonText>
          {moment(datetime).format("DD/MM/YYYY [às] HH:mm")}
        </ButtonText>
      </Button>

      {moment().format("YYYY-MM-DD") ==
      moment(datetime).format("YYYY-MM-DD") ? (
        <Badge>hoje</Badge>
      ) : null}

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="datetime"
        onConfirm={onConfirm}
        onCancel={() => setDatePickerVisibility(false)}
      />
    </Container>
  );
}
