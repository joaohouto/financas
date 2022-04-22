import React from "react";
import { Linking } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Container, Title, Button, ButtonText, Text } from "./styles";

export default function Statistics({ navigation }) {
  return (
    <Container>
      <Title>Opções</Title>

      {/* <Button>
        <MaterialCommunityIcons
          size={24}
          color="#999"
          name="file-export-outline"
        />
        <ButtonText>Exportar dados</ButtonText>
      </Button>

      <Button>
        <MaterialCommunityIcons
          size={24}
          color="#999"
          name="file-import-outline"
        />
        <ButtonText>Importar dados</ButtonText>
      </Button>
 */}
      <Button
        onPress={() =>
          Linking.openURL(
            "https://play.google.com/store/apps/dev?id=8115039793106264993"
          )
        }
      >
        <MaterialCommunityIcons
          size={24}
          color="#999"
          name="thumb-up-outline"
        />
        <ButtonText>Avalie o aplicativo</ButtonText>
      </Button>

      <Button onPress={() => Linking.openURL("mailto:contato@joaocouto.com")}>
        <MaterialCommunityIcons size={24} color="#999" name="bug-outline" />
        <ButtonText>Relatar erros/bugs</ButtonText>
      </Button>

      <Button onPress={() => Linking.openURL("https://joaocouto.com/")}>
        <MaterialCommunityIcons size={24} color="#999" name="chat-outline" />
        <ButtonText>Fale com o desenvolvedor</ButtonText>
      </Button>

      <Text>Finanças v0.0.1</Text>
    </Container>
  );
}
