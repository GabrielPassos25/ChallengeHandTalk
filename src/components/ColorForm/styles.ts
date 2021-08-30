import styled from 'styled-components/native'
import { TextInput } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize';

interface IconProps {
    type: 'email' | 'password';
    isFilled: boolean;
}

export const Container = styled.View`
    margin-top: ${RFValue(10)}px;
    width: 80%;
`;

export const Input = styled(TextInput)`
    color: ${({ theme }) => theme.colors.black};
    width: 100%;
    font-size: ${RFValue(12)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
`;

export const Forms = styled.View`
    flex-direction: row;
    border-radius: 15px;
    border-width: 1.5px;
    padding: 10px;
    border-color: ${({ theme }) => theme.colors.white};
    align-items: center;
`;


export const Icon = styled(MaterialCommunityIcons) <IconProps>`
    font-size: ${RFValue(20)}px;
    margin-right: 12px;
    color: ${({ theme, isFilled }) =>
        isFilled ? theme.colors.primary_dark : theme.colors.white
    };
`;

