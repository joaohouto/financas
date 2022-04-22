import styled from "styled-components/native";

export const Container = styled.View`
  margin-bottom: 20px;
  position: relative;
`;

export const Label = styled.Text`
  font-size: 16px;
  line-height: 16px;
  color: #f1f1f1;
  margin-bottom: 10px;
  font-family: "Inter_700Bold";
`;

export const Input = styled.TextInput`
  background: #333333;
  font-size: 16px;
  padding: 14px;
  color: #f1f1f1;
  border-radius: 8px;
  font-family: "Inter_400Regular";
`;

export const Button = styled.TouchableOpacity`
  background: #333333;
  padding: 18px 14px 18px 54px;
  height: 56px;
  border-radius: 8px;
`;

export const ButtonText = styled.Text`
  color: #f1f1f1;
  font-size: 16px;
  font-family: "Inter_400Regular";
`;

export const Badge = styled.Text`
  color: #222;
  font-size: 12px;
  font-family: "Inter_700Bold";
  background-color: #777;
  padding: 3px 8px;
  border-radius: 14px;

  position: absolute;
  bottom: 16px;
  right: 14px;
`;

export const IconWrapper = styled.View`
  position: absolute;
  bottom: 16px;
  left: 14px;
  z-index: 1;
`;
