import React from 'react';
import { TextInputProps } from 'react-native'
import { Container, Titulo, Forms, Icon, Error, Input } from './styles';
import { Control, Controller } from 'react-hook-form';

const icons = {
    email: "email-outline",
    password: "lock-outline",
    color: "pencil"
}

interface Props extends TextInputProps {
    control: Control;
    name: string;
    error: string;
    title: string,
    type: 'email' | 'password' | 'color';
}


export function InputForm({ control, name, error, title, type }: Props) {

    return (
        <Container>
            <Controller control={control} render={({ field: { onChange, value } }) => (
                <>
                    <Titulo isFilled={!!value} >
                        {title}
                    </Titulo>
                    <Forms isFilled={!!value}>
                        <Icon name={icons[type]} type={type} isFilled={!!value} />
                        <Input placeholder={title} onChangeText={onChange} placeholderTextColor='gray' secureTextEntry={type === 'password' ? true : false} value={value} />
                    </Forms>
                </>
            )} name={name} />
            {error && <Error>{error}</Error>}
        </Container >
    );
}