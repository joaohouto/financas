import styled from "styled-components/native";

export const Container = styled.ScrollView`
  display: flex;
  flex: 1;
  padding: 20px;
  background: #1e1e1e;
`;

export const Title = styled.Text`
  font-size: 36px;
  color: #f1f1f1;
  font-family: "Inter_700Bold";
  margin-bottom: 30px;
`;

export const Label = styled.Text`
  font-size: 16px;
  color: #f1f1f1;
  margin-bottom: 10px;
  font-family: "Inter_700Bold";
`;

export const Input = styled.TextInput`
  background: #333333;
  font-size: 16px;
  padding: 14px;
  margin-bottom: 20px;
  color: #f1f1f1;
  border-radius: 8px;
  font-family: "Inter_400Regular";
`;

export const Button = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 20px;
  margin: 20px 0;
  background: #1b9ff7;
  height: 60px;
  width: 100%;
  border-radius: 8px;
`;

export const ButtonText = styled.Text`
  color: #074269;
  font-size: 16px;
  font-family: "Inter_700Bold";
`;

export const DeleteButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: #222222;
  height: 60px;
  width: 100%;
  border-radius: 8px;
`;

export const DeleteButtonText = styled.Text`
  color: #777;
  font-size: 16px;
  font-family: "Inter_700Bold";
`;

export const ErrorText = styled.Text`
  color: #cf5540;
  font-size: 14px;
  font-family: "Inter_400Regular";
  text-align: right;
  margin-top: -10px;
`;
