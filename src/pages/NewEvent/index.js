import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Alert, ToastAndroid } from "react-native";
import { StackActions } from "@react-navigation/native";
import moment from "moment";

import AmountInput from "../../components/AmountInput";
import DateTimeInput from "../../components/DateTimeInput";
import CategoryInput from "../../components/CategoryInput";
import {
  Container,
  Title,
  Label,
  Input,
  Button,
  ButtonText,
  ErrorText,
} from "./styles";

import EventController from "../../database/controllers/event";
import AccountController from "../../database/controllers/account";

export default function NewEvent({ navigation }) {
  const {
    register,
    setValue,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    register("amount", { required: true });
    register("datetime");
    register("category");
    register("description", { required: true });
  }, [register]);

  const createEvent = async (data) => {
    try {
      await EventController.create({
        ...data,
        amount: Number(data.amount),
        account_id: 1,
      });

      await AccountController.addEvent({
        id: 1,
        amount: Number(data.amount),
      });

      ToastAndroid.show("Evento criado!", ToastAndroid.SHORT);
      navigation.dispatch(StackActions.popToTop());
    } catch (err) {
      Alert.alert("Erro", "Algo deu errado ao criar um novo evento.", [
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
      console.log(err);
    }
  };

  return (
    <Container>
      <Title>Movimentação</Title>

      <AmountInput onChangeText={(text) => setValue("amount", text)} />
      {errors.amount && <ErrorText>Insira um valor válido.</ErrorText>}

      <DateTimeInput
        defaultValue={moment().format()}
        onChange={(value) => setValue("datetime", value)}
      />

      <CategoryInput
        onChange={(value) => setValue("category", value)}
        pickerType={watch("amount") > 0 ? "positive" : "negative"}
      />

      <Label>Descrição</Label>
      <Input onChangeText={(text) => setValue("description", text)} />
      {errors.description && <ErrorText>Insira uma descrição.</ErrorText>}

      <Button onPress={handleSubmit(createEvent)}>
        <ButtonText>Adicionar</ButtonText>
      </Button>
    </Container>
  );
}
