import styled from "styled-components/native";

export const Container = styled.View`
  width: 200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background: #222222;
  margin-bottom: 20px;
  border-radius: 8px;
`;

export const Text = styled.Text`
  font-size: 16px;
  color: #f1f1f1;
  font-family: "Inter_700Bold";
`;

export const Button = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 10px;
  border-radius: 8px;
`;
