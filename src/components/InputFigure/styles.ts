import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { TextInput } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

export const AreaFigure = styled.View`
    margin-top: ${RFValue(30)}px;
    align-items: center;
    justify-content: center;
    height: ${RFValue(300)}px;
    background-color: ${({ theme }) => theme.colors.gray};
    border-radius: ${RFValue(10)}px;
    margin-left: ${RFValue(30)}px;
    margin-right: ${RFValue(30)}px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5);
    elevation: 10;
`;

export const AreaInfo = styled.View`
margin-top: ${RFValue(20)}px;
    align-items: center;
`;

export const Description = styled.Text`
    font-size: ${RFValue(14)}px;
    margin-top: ${RFValue(10)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.white};
`;

interface IconProps {
    type: 'email' | 'password';
    isFilled: boolean;
}

export const AreaForm = styled.View`
    margin-top: ${RFValue(10)}px;
    width: 80%;
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

export const Input = styled(TextInput)`
    color: ${({ theme }) => theme.colors.black};
    width: 100%;
    font-size: ${RFValue(12)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
`;
