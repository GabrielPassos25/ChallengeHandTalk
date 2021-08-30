import React from 'react';
import { Container, Forms, Icon, Input } from './styles';

export function ColorForm() {
    return (
        <Container>
            <Forms>
                <Icon name={"pencil"}/>
                <Input placeholder={"Nova cor"} placeholderTextColor='white'/>
            </Forms>
        </Container >
    );
}