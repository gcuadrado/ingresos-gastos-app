import React, { useContext, useMemo, useState } from "react";
import { Text } from "react-native";
import { List } from 'react-native-paper';
import AppContext from "../AppContext";
import IngresoItem from "./IngresoItem";



const ListaIngresos = () => {
    const appContext = useContext(AppContext)
    const [expanded, setExpanded] = useState(true);
    const total = useMemo(() => {
        return appContext.state.ingresos.reduce((totalAcum, { value }) => totalAcum + value, 0)
    }, [appContext.state.ingresos])
    return (
        <List.Accordion
            title="Ingresos"
            left={props => <List.Icon {...props} icon="folder" />}
            right={props => <Text>{total}€</Text>}
            expanded={expanded}
            onPress={() => { setExpanded(!expanded) }}
        >
            {appContext.state.ingresos.map(item =>
            (
                <IngresoItem
                    item={item}
                />
            )
            )}
        </List.Accordion>
    )
}

export default ListaIngresos