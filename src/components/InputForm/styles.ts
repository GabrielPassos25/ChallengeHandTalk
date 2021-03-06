import styled from 'styled-components/native'
import { TextInput } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize';

interface FormsProps {
    isFilled: boolean;
}

interface IconProps {
    type: 'email' | 'password';
    isFilled: boolean;
}

export const Error = styled.Text`
    font-size: ${RFValue(12)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.primary};
    margin-top: ${RFValue(5)}px;
`;

export const Container = styled.View`
    width: 80%;
`;

export const Titulo = styled.Text<FormsProps>`
    margin-top: ${RFValue(20)}px;
    font-size: ${RFValue(16)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
    margin-bottom: 7px;
    color: ${({ theme, isFilled }) =>
        isFilled ? theme.colors.primary_dark : theme.colors.primary
    };
`;

export const Input = styled(TextInput)`
    color: ${({ theme }) => theme.colors.black};
    width: 100%;
    font-size: ${RFValue(12)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
`;

export const Forms = styled.View<FormsProps>`
    flex-direction: row;
    border-radius: 15px;
    border-width: 1.5px;
    padding: 10px;
    border-color: ${({ theme }) => theme.colors.primary};
    align-items: center;
`;


export const Icon = styled(MaterialCommunityIcons) <IconProps>`
    font-size: ${RFValue(20)}px;
    margin-right: 12px;
    color: ${({ theme, isFilled }) =>
        isFilled ? theme.colors.primary_dark : theme.colors.primary
    };
`;