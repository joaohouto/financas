import styled from "styled-components/native";

export const Container = styled.ScrollView`
  display: flex;
  flex: 1;
  padding: 20px;
  background: #1e1e1e;
`;

export const Row = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Label = styled.Text`
  font-size: 12px;
  color: #777;
  margin-bottom: 10px;
  text-transform: uppercase;
  font-family: "Inter_400Regular";
`;

export const Balance = styled.Text`
  font-size: 36px;
  line-height: 36px;
  color: #f1f1f1;
  font-family: "Inter_400Regular";
`;

export const BalanceButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 50px;
  border-radius: 8px;
  background: #222222;
`;

export const Small = styled.Text`
  font-size: 20px;
  color: #999;
`;

export const B = styled.Text`
  font-weight: bold;
  font-family: "Inter_700Bold";
`;

export const ActionButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: 0 20px;
  margin: 20px 0;
  background: #1b9ff7;
  height: 60px;
  width: 100%;
  border-radius: 8px;
`;

export const ActionButtonText = styled.Text`
  color: #074269;
  font-size: 16px;
  margin-left: 20px;
  font-family: "Inter_700Bold";
`;
