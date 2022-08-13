import React, { useContext, useMemo } from "react";
import { Text } from 'react-native-paper'
import { View, StyleSheet } from "react-native";
import AppContext from "../AppContext";

const BeneficioNeto = () => {
    const appContext = useContext(AppContext)

    const pagarIrpf = (beneficioBruto) => {
        const gastosDeDificilJustificacion = beneficioBruto * 0.05 <= 2000 ? beneficioBruto * 0.05 : 2000
        const baseIrpf = beneficioBruto - gastosDeDificilJustificacion
        const retencionIrpf = baseIrpf * appContext.state.tipoIrpf
        const beneficioDespuesIrpf = baseIrpf - retencionIrpf > 0 ? baseIrpf - retencionIrpf : beneficioBruto
        return beneficioDespuesIrpf
    }
    
    const pagarCuotaAutonomos = (beneficioBruto) => {
        const cuotaAutonomos = 294
        return beneficioBruto - cuotaAutonomos
    }

    const datosFacturacion = useMemo(() => {
        const gastos = appContext.state.gastos
        const ingresos = appContext.state.ingresos
        const totalGastos = gastos.reduce((totalAcum, { value, units }) => totalAcum + (value * units), 0)
        const totalIngresos = ingresos.reduce((totalAcum, { value, units }) => totalAcum + (value * units), 0)
        const totalIngresosSinIva=totalIngresos*(1-appContext.state.tipoIva)
        const beneficioBruto = totalIngresosSinIva - totalGastos
        const beneficioMenosCuotaAutonomos = pagarCuotaAutonomos(beneficioBruto)
        const beneficioNeto = pagarIrpf(beneficioMenosCuotaAutonomos)
        return {
            beneficioBruto,
            beneficioMenosCuotaAutonomos,
            beneficioNeto
        }
    }, [appContext.state.ingresos, appContext.state.gastos])

  

   

 

    return (
        <View style={{ ...styles.container, padding: 10 }}>
            <Text variant="titleMedium">Beneficio bruto: {datosFacturacion.beneficioBruto.toFixed(2)}€</Text>
            <Text variant="titleMedium">Beneficio restando autónomos (296€): {datosFacturacion.beneficioMenosCuotaAutonomos.toFixed(2)}€</Text>
            <Text variant="titleMedium">Beneficio menos IRPF({appContext.state.tipoIrpf*100}%): {datosFacturacion.beneficioNeto.toFixed(2)}€</Text>
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