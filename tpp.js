import React, { useState, useEffect } from "react";

import { useForm } from "react-hook-form";

import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";

import DatabaseInit from "./src/database/init";
import AccountController from "./src/database/controllers/account";

export default function App() {
  const [accounts, setAccounts] = useState([]);
  const [events, setEvents] = useState([]);

  const { register, setValue, handleSubmit } = useForm();

  useEffect(() => {
    const db = new DatabaseInit();

    getAccounts();
  }, []);

  useEffect(() => {
    register("name");
    register("balance");
  }, [register]);

  const getAccounts = async () => {
    try {
      const response = await AccountController.findAll();

      setAccounts(response._array);
      console.log(response._array);
    } catch (err) {
      console.log(err);
    }
  };

  const createAccount = async (data) => {
    try {
      await AccountController.create(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Accounts</Text>
      <TextInput
        placeholder="name"
        onChangeText={(text) => setValue("name", text)}
      />
      <TextInput
        placeholder="balance"
        onChangeText={(text) => setValue("balance", text)}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleSubmit(createAccount)}
      >
        <Text>Create new account</Text>
      </TouchableOpacity>

      <Text>Events</Text>
      <TextInput placeholder="amount" />
      <TextInput placeholder="datetime" />
      <TextInput placeholder="category" />
      <TextInput placeholder="description" />
      <TextInput placeholder="account_id" />

      <TouchableOpacity style={styles.button}>
        <Text>Create new event</Text>
      </TouchableOpacity>

      <Text>Accounts</Text>

      {accounts.length > 0 ? (
        accounts.map((account) => {
          <Text style={styles.account}>
            [{account.id}] {account.name} + {account.balance}
          </Text>;
        })
      ) : (
        <Text>Nenhuma conta encontrada</Text>
      )}

      <Text>Events</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "center",
    padding: 30,
  },
  button: {
    padding: 20,
    backgroundColor: "tomato",
  },
  account: {
    padding: 20,
    backgroundColor: "#eee",
  },
});
