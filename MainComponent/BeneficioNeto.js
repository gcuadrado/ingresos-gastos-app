import React, { useContext, useMemo } from "react";
import {Text} from 'react-native-paper'
import { View, StyleSheet } from "react-native";
import AppContext from "../AppContext";

const BeneficioNeto = () => {
    const appContext = useContext(AppContext)
    const total = useMemo(() => {
        const gastos = appContext.state.gastos
        const ingresos = appContext.state.ingresos
        const totalGastos = gastos.reduce((totalAcum, { value, units }) => totalAcum + (value * units), 0)
        const totalIngresos = ingresos.reduce((totalAcum, { value, units }) => totalAcum + (value * units), 0)
        const beneficioNeto = totalIngresos - totalGastos
        return beneficioNeto
    }, [appContext.state.ingresos, appContext.state.gastos])
    return (
        <View style={{...styles.container, padding:10}}>
            <Text variant="headlineSmall">Beneficio neto: {total}€</Text>
        </View>
    );
}

export default BeneficioNeto;

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