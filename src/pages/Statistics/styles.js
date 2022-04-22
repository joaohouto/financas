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

export const Row = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 40px;
`;

export const Text = styled.Text`
  font-size: 16px;
  color: #f1f1f1;
  font-family: "Inter_700Bold";
`;

export const Label = styled.Text`
  font-size: 12px;
  color: #999999;
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

export const Small = styled.Text`
  font-size: 20px;
`;

export const B = styled.Text`
  font-weight: bold;
  font-family: "Inter_700Bold";
`;

export const ActionButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: 20px;
  margin: 20px 0;
  background: #f1f1f1;
  height: 60px;
  width: 100%;
  border-radius: 8px;
`;

export const ActionButtonText = styled.Text`
  color: #000000;
  font-size: 16px;
  margin-left: 20px;
  font-family: "Inter_700Bold";
`;
