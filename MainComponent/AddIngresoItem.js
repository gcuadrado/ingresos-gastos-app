import React, { useContext, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button, TextInput, Title } from "react-native-paper";
import AppContext from "../AppContext";

const AddIngresoItem = ({ onSubmit }) => {
    const appContext = useContext(AppContext)
    const [titulo, setTitulo] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [valor, setValor] = useState(0)
    const [unidades, setUnidades] = useState(1)

    const onAceptarPressed = () => {
        const ingreso = {
            title: titulo,
            description: descripcion,
            value: valor,
            units: unidades
        }
        appContext.addIngreso(ingreso)
        onSubmit()
    }

    return (
        <View style={styles.container}>
            <Title>Añade un ingreso</Title>
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

export default AddIngresoItem

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