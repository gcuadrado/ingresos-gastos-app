import React, { useContext, useState } from "react";
import { ScrollView, StyleSheet, View } from 'react-native';
import { Button, TextInput, Text } from "react-native-paper";
import AppContext from "../AppContext";

const AddGastoItem = ({ onSubmit }) => {
    const appContext = useContext(AppContext)
    const [titulo, setTitulo] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [valor, setValor] = useState(0)
    const [unidades, setUnidades] = useState(1)

    const onAceptarPressed = () => {
        const gasto = {
            title: titulo,
            description: descripcion,
            value: valor,
            units: unidades
        }
        appContext.addGasto(gasto)
        onSubmit()
    }

    return (
        <View style={styles.container}>
            <Text variant="headlineSmall">Añade un gasto</Text>
            <View style={styles.row} >
                <View style={styles.column} >
                    <TextInput
                        label="Título"
                        value={titulo}
                        onChangeText={text => setTitulo(text)}
                    />
                </View>
            </View>
            <View style={styles.row} >
                <View style={styles.column} >
                    <TextInput
                        label="Descripción"
                        value={descripcion}
                        onChangeText={text => setDescripcion(text)}
                    />
                </View>
            </View>
            <View style={styles.row} >
                <View style={styles.column} >
                    <TextInput
                        label="Valor"
                        keyboardType='numeric'
                        value={valor.toString()}
                        onChangeText={text => setValor(Number(text))}
                    />
                </View>
            </View>
            <View style={styles.row} >
                <View style={styles.column} >
                    <TextInput
                        label="Unidades"
                        keyboardType='numeric'
                        value={unidades.toString()}
                        onChangeText={text => setUnidades(Number(text))}
                    />
                </View>
            </View>
            <View style={styles.row} >
                <View style={styles.column} >
                    <Button
                        onPress={onAceptarPressed}
                        mode="contained"
                        style={{marginTop: 10}}
                        disabled={titulo === '' || !valor}
                    >Aceptar
                    </Button>
                </View>
            </View>
        </View>
    )
}

export default AddGastoItem

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column'
    },
    row: {
        flexDirection: "row",
        flex: 1,
    },
    column: {
        flexDirection: "column",
        flex: 1,
        justifyContent: 'center'
    }
});