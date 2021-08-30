import { RFValue } from 'react-native-responsive-fontsize';
import {LinearGradient} from 'expo-linear-gradient';
import styled from 'styled-components/native';
import theme from '../../styles/theme';

export const Container = styled(LinearGradient).attrs({
    colors: theme.colors.linear_gradient_background
  })`
    flex:1;
`;

export const AreaCenter = styled.View`
    width: 100%;
`;
export const Title = styled.Text`
    width: 100%;
    font-size: ${RFValue(16)}px;
    margin-left: ${RFValue(5)}px;
    margin-top: ${RFValue(10)}px;
    font-family: ${({ theme }) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors.white}; 
    text-align: center;
`;
export const AreaSelector = styled.View`
`;

export const LogoContainer = styled.View`
    margin-right: ${RFValue(11)}px;
    margin-top: ${RFValue(40)}px;
    align-items: center;
`;
