import React, { useState, useEffect, useCallback } from "react";
import { RefreshControl, View } from "react-native";
import moment from "moment";

import AccountController from "../../database/controllers/account";
import EventController from "../../database/controllers/event";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import EventItem from "../../components/EventItem";
import MonthSelect from "../../components/MonthSelect";
import NotFoundMessage from "../../components/NotFoundMessage";
import {
  Container,
  Row,
  Label,
  Balance,
  BalanceButton,
  Small,
  B,
  ActionButton,
  ActionButtonText,
} from "./styles";

export default function Home({ navigation }) {
  const [isLoading, setIsLoading] = useState(true);
  const [showBalance, setShowBalance] = useState(true);
  const [account, setAccount] = useState({});
  const [events, setEvents] = useState([]);
  const [month, setMonth] = useState(moment().format("MM"));

  useEffect(() => {
    getAccount();
  }, []);

  useEffect(() => {
    setIsLoading(true);
    getEvents();
  }, [month]);

  const getAccount = async () => {
    try {
      const response = await AccountController.findById(1);

      setAccount(response._array[0]);
    } catch (err) {
      console.log(err);
    }
  };

  const getEvents = async () => {
    try {
      const response = await EventController.findByMonth(
        ("0" + month).slice(-2)
      );

      setEvents(response._array);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const onRefresh = useCallback(() => {
    setIsLoading(true);
    getEvents();
  }, []);

  return (
    <Container
      refreshControl={
        <RefreshControl refreshing={isLoading} onRefresh={onRefresh} />
      }
    >
      <Label>Saldo</Label>
      <Row>
        <Balance>
          <Small>R$ </Small>
          <B>
            {showBalance
              ? account.balance !== undefined
                ? account.balance.toFixed(2).toString()
                : account.balance
              : " - - - - - "}
          </B>
        </Balance>

        <BalanceButton onPress={() => setShowBalance((s) => !s)}>
          {showBalance ? (
            <MaterialCommunityIcons
              name="eye-off-outline"
              size={24}
              color="#999"
            />
          ) : (
            <MaterialCommunityIcons name="eye-outline" size={24} color="#999" />
          )}
        </BalanceButton>
      </Row>

      <ActionButton onPress={() => navigation.navigate("NewEvent")}>
        <MaterialCommunityIcons name="plus" size={26} color="#074269" />

        <ActionButtonText>Nova movimentação</ActionButtonText>
      </ActionButton>

      <MonthSelect
        value={month}
        handleNext={useCallback(
          () => month < 12 && setMonth((p) => Number(p) + 1)
        )}
        handlePrevious={useCallback(
          () => month > 1 && setMonth((p) => Number(p) - 1)
        )}
      />

      <Label>Eventos</Label>

      {isLoading ? null : events.length > 0 ? (
        events.map((event) => (
          <EventItem
            key={event.id}
            category={event.category}
            description={event.description}
            datetime={`${event.datetime}`}
            amount={event.amount}
            onPress={() => navigation.navigate("Event", { id: event.id })}
          />
        ))
      ) : (
        <NotFoundMessage />
      )}

      <View style={{ height: 55 }} />
    </Container>
  );
}
