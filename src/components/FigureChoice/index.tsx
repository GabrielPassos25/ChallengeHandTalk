import React from 'react';
import { Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import theme from '../../styles/theme';

interface EnviromentButtonProps extends RectButtonProps {
    title: string,
    active?: boolean;
}

export function FigureChoice({ title, active = false, ...rest }: EnviromentButtonProps) {
    return (
        <RectButton 
        style={[{
            backgroundColor: theme.colors.primary,
            width: RFValue(120),
            height: RFValue(30),
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 1,
            borderRadius: RFValue(10),
            borderColor: theme.colors.white,
            marginHorizontal: RFValue(5), elevation: 10, shadowColor: 'black', shadowOffset:{width:0, height:2}, shadowOpacity: 0.23, shadowRadius: 2.62}, active && {backgroundColor: theme.colors.gray, borderColor: theme.colors.gray}]} {...rest}>
            <Text 
            style={[{
                color: theme.colors.white,
                textAlign: 'center',
                fontSize: RFValue(12),
                fontFamily: theme.fonts.bold,
                }, active && {color: theme.colors.white}]}>
                {title}
            </Text>
        </RectButton>
    );
}