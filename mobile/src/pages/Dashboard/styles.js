import styled from "styled-components/native";

export const Container = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 20px;
  color: #5333ca;
`;

export const Select = styled.Picker`
  border-color: #5333ca;
  border-width: 1px;
  width: 80%;
  color: #333;
`;

export const CustomTextInput = styled.TextInput`
  border-color: #5333ca;
  border-bottom-width: 1px;
  margin-bottom: 10px;
  width: 80%;
  color: #333;
`;

export const Button = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background: #5333ca;
  width: 80%;
  height: 30px;
`;

export const ButtonText = styled.Text`
  font-weight: bold;
  color: #fff;
  text-align: center;
`;

export const ResultText = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: #5333ca;
`;
