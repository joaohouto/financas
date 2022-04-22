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
  DeleteButton,
  DeleteButtonText,
} from "./styles";

import EventController from "../../database/controllers/event";
import AccountController from "../../database/controllers/account";

export default function Event({ route, navigation }) {
  const [isLoading, setIsLoading] = useState(true);
  const [event, setEvent] = useState({});
  const { id } = route.params;

  const {
    register,
    setValue,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    register("amount", { required: true });
    register("datetime");
    register("category");
    register("description", { required: true });
  }, [register]);

  useEffect(() => {
    getEvent();
  }, []);

  const getEvent = async () => {
    try {
      const { _array } = await EventController.findById(id);

      setEvent(_array[0]);

      setIsLoading(false);
    } catch (err) {
      Alert.alert("Erro", "Algo deu errado ao carregar o evento.", [
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
      console.log(err);
    }
  };

  const updateEvent = async (data) => {
    console.log(data);

    try {
      await EventController.updateById({
        ...data,
        amount: Number(data.amount),
        account_id: 1,
        id,
      });

      ToastAndroid.show("Evento atualizado!", ToastAndroid.SHORT);
      navigation.dispatch(StackActions.popToTop());
    } catch (err) {
      Alert.alert("Erro", "Algo deu errado ao atualizar o evento.", [
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
      console.log(err);
    }
  };

  const deleteEvent = async () => {
    Alert.alert(
      "Tem certeza?",
      "Após a exclusão a operação não poderá ser desfeita.",
      [
        {
          text: "Cancelar",
        },
        {
          text: "Excluir",
          onPress: async () => {
            try {
              await EventController.deleteById(id);

              await AccountController.addEvent({
                id: 1,
                amount: -Number(event.amount),
              });

              ToastAndroid.show("Evento excluído!", ToastAndroid.SHORT);
              navigation.dispatch(StackActions.popToTop());
            } catch (err) {
              Alert.alert("Erro", "Algo deu errado ao excluir o evento.", [
                { text: "OK", onPress: () => console.log("OK Pressed") },
              ]);
              console.log(err);
            }
          },
        },
      ]
    );
  };

  return (
    <Container>
      <Title>Movimentação</Title>

      {isLoading ? null : (
        <>
          <AmountInput
            defaultValue={event.amount + ""}
            onChangeText={(text) => setValue("amount", text)}
          />
          {errors.amount && <ErrorText>Insira um valor válido.</ErrorText>}

          <DateTimeInput
            defaultValue={event.datetime}
            onChange={(value) => setValue("datetime", value)}
          />

          <CategoryInput
            defaultValue={event.category}
            onChange={(value) => setValue("category", value)}
            pickerType={event.amount > 0 ? "positive" : "negative"}
          />

          <Label>Descrição</Label>
          <Input
            defaultValue={event.description}
            onChangeText={(text) => setValue("description", text)}
          />
          {errors.description && <ErrorText>Insira uma descrição.</ErrorText>}

          <Button onPress={handleSubmit(updateEvent)}>
            <ButtonText>Salvar</ButtonText>
          </Button>

          <DeleteButton onPress={deleteEvent}>
            <DeleteButtonText>Excluir</DeleteButtonText>
          </DeleteButton>
        </>
      )}
    </Container>
  );
}
