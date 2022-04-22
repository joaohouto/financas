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
  padding: 14px 14px 14px 54px;
  color: #f1f1f1;
  border-radius: 8px;
  height: 56px;
  font-family: "Inter_400Regular";
`;

export const Badge = styled.Text`
  font-size: 16px;
  line-height: 16px;
  color: #999;
  font-family: "Inter_700Bold";
  position: absolute;
  bottom: 20px;
  left: 16px;
`;

export const IconWrapper = styled.View`
  position: absolute;
  bottom: 18px;
  right: 14px;
`;
