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

export const Button = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: 0 16px;
  margin-bottom: 10px;
  background: #222;
  height: 60px;
  width: 100%;
  border-radius: 8px;
`;

export const ButtonText = styled.Text`
  color: #999;
  font-size: 16px;
  margin-left: 20px;
  font-family: "Inter_700Bold";
`;

export const Text = styled.Text`
  font-size: 14px;
  color: #777;
  font-family: "Inter_400Regular";
  margin: 20px 0;
`;
