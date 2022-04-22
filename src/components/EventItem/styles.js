import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 12px 0;
  border-bottom-color: #2e2e2e;
  border-bottom-width: 1px;
`;

export const Column = styled.View`
  width: 33.33%;

  display: flex;
  justify-content: center;
`;

export const Text = styled.Text`
  font-size: 12px;
  line-height: 12px;
  color: #999999;
  font-family: "Inter_400Regular";
`;

export const Bold = styled.Text`
  font-size: 12px;
  color: #f1f1f1;
  font-family: "Inter_700Bold";
  width: 100%;
`;

export const Amount = styled.Text`
  font-size: 12px;
  line-height: 12px;
  color: #f1f1f1;
  font-family: "Inter_400Regular";
  text-align: right;
`;
