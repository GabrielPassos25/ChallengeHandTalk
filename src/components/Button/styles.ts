import styled from 'styled-components/native'
import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

interface FormsProps {
    type: string;
}

export const Container = styled(TouchableOpacity)<FormsProps>`
    width: 80%;
    height: ${RFValue(40)}px;
    margin-top: ${RFValue(20)}px;
    background-color: ${({ theme, type }) =>
        type === 'login' ? theme.colors.primary_dark : theme.colors.gray
    };
    border-radius: 15px;
    align-items: center;
    justify-content: center;
    margin-bottom: ${RFValue(20)}px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5);
    elevation: 5;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: ${RFValue(15)}px;
    color: ${({ theme }) => theme.colors.white};
`;