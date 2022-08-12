import React, { useContext, useMemo, useState } from "react";
import { Text } from "react-native";
import { List } from 'react-native-paper';
import AppContext from "../AppContext";
import GastoItem from "./GastoItem";



const ListaGastos = () => {
    const appContext = useContext(AppContext)
    const [expanded, setExpanded] = useState(true);
    const total = useMemo(() => {
        return appContext.state.gastos.reduce((totalAcum, { value, units }) => totalAcum + (value * units), 0)
    }, [appContext.state.gastos])
    return (
        <List.Accordion
            title="Gastos"
            left={props => <List.Icon {...props} icon="currency-usd-off" />}
            right={props => <Text>{total}€</Text>}
            expanded={expanded}
            onPress={() => { setExpanded(!expanded) }}
        >
            {appContext.state.gastos.map(item =>
            (
                <GastoItem
                    key={item.id}
                    item={item}
                />
            )
            )}
        </List.Accordion>
    )
}

export default ListaGastos