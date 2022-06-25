import React, { useContext, useMemo, useState } from "react";
import { Text } from "react-native";
import { List } from 'react-native-paper';
import AppContext from "../AppContext";
import GastoIngresoItem from "./GastoIngresoItem";


const ListaGastos = () => {
    const appContext = useContext(AppContext)
    const [expanded, setExpanded] = useState(true);
    const total=useMemo(()=>{
       return appContext.state.items.reduce((totalAcum, {value}) => totalAcum + value, 0)
    }, [appContext.state.items])
    return (
        <List.Accordion
            title="Gastos"
            left={props => <List.Icon {...props} icon="folder" />}
            right={props => <Text>{total}€</Text>}
            expanded={expanded}
            onPress={() => { setExpanded(!expanded) }}
        >
            {appContext.state.items.map(item =>
            (
                <GastoIngresoItem
                    item={item}
                />
            )
            )}
        </List.Accordion>
    )
}

export default ListaGastos