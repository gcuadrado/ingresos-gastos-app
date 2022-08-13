import React, { useContext, useMemo, useState } from "react";
import { Text } from "react-native";
import { List } from 'react-native-paper';
import AppContext from "../AppContext";
import IngresoItem from "./IngresoItem";



const ListaIngresos = () => {
    const appContext = useContext(AppContext)
    const [expanded, setExpanded] = useState(true);
    const facturacion = useMemo(() => {
        const totalIngresos= appContext.state.ingresos.reduce((totalAcum, { value, units }) => totalAcum + (value * units), 0)
        const totalIva=totalIngresos*appContext.state.tipoIva
        return {
            totalIngresos,
            totalIva,
            totalNeto:totalIngresos-totalIva
        }
    }, [appContext.state.ingresos])
    return (
        <List.Accordion
            title="Ingresos"
            left={props => <List.Icon {...props} icon="cash-multiple" />}
            right={props => <Text>{facturacion.totalNeto}€ (IVA: {facturacion.totalIva}€)</Text>}
            expanded={expanded}
            onPress={() => { setExpanded(!expanded) }}
        >
            {appContext.state.ingresos.map(item =>
            (
                <IngresoItem
                    key={item.id}
                    item={item}
                />
            )
            )}
        </List.Accordion>
    )
}

export default ListaIngresos