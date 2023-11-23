import React from 'react'
import {
    Text,
    TouchableOpacity,
} from "react-native";
import { styles } from './styles';

interface PrimaryButtonProps {
    onPress: () => void
    title: string
}

export const PrimaryButton = ({onPress, title} : PrimaryButtonProps) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}
