import styled from "styled-components/native";
import {LinearGradient} from 'expo-linear-gradient';
import { RFValue } from "react-native-responsive-fontsize";
import theme from '../../styles/theme';

export const Container = styled(LinearGradient).attrs({
  colors: theme.colors.linear_gradient_background
})`
  flex:1;
`;

export const StatusBarAndroid = styled.StatusBar`
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const WelcomeText = styled.Text`
  width: 70%;
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.medium};
  text-align: center;
`;

export const WelcomeTitle = styled.Text`
  font-size: ${RFValue(25)}px;
  margin-bottom: ${RFValue(10)}px;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const LogoContainer = styled.View`
  margin-right: ${RFValue(11)}px;
  margin-top: ${RFValue(40)}px;
  align-items: flex-end;
`;

export const InfoContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin-bottom: ${RFValue(20)}px;
`;

export const InputContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
  align-items: center;
  justify-content: center;
  border-top-left-radius: ${RFValue(36)}px;
  border-top-right-radius: ${RFValue(36)}px;
`;