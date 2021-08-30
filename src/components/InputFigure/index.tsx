import React from 'react';
import { AreaFigure, AreaInfo, Description, AreaForm, Forms, Icon, Input } from './styles';
import { Button } from '../Button';
import { ExpoWebGLRenderingContext, GLView } from "expo-gl";

interface Props{
    onContextCreate: (gl: ExpoWebGLRenderingContext) => void;
    handleColor: (color: string) => void;
    setData: () => void;
    description: string;
    placeholder: string;
}

export function InputFigure({onContextCreate, handleColor, setData, description, placeholder}: Props) {
    return (
        <>
            <AreaFigure>
                <GLView style={{width: '100%', height: '100%'}} onContextCreate = {onContextCreate}/>
            </AreaFigure>
            <AreaInfo>
            <Description>{description}</Description>
                <AreaForm>
                <Forms>
                    <Icon name={"pencil"}/>
                    <Input placeholder={placeholder} placeholderTextColor='white' onChangeText={handleColor}/>
                </Forms>
                </AreaForm >
            <Button title="Aplicar" type="home" onPress={setData}/>
            </AreaInfo>
        </>
    );
}