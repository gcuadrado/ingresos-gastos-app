import { StatusBar } from 'expo-status-bar';
import { useState, useContext } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { TextInput, Appbar, Portal, Dialog, Button } from 'react-native-paper';
import AppContext from './AppContext';
import AddGastoItem from './MainComponent/AddGastoItem';
import AddIngresoItem from './MainComponent/AddIngresoItem';
import FabButton from './MainComponent/FabButton';
import TIPOS_FAB_BUTTON from './MainComponent/tiposFabButtons';
import ListaGastos from './MainComponent/ListaGastos';
import ListaIngresos from './MainComponent/ListaIngresos';



export default MainComponent = () => {

    const appContext = useContext(AppContext);
    const [tipoDialog, setTipoDialog] = useState(null)
    return (
        <View style={styles.container}>
            <Appbar.Header>
                <Appbar.Content title="Academia" subtitle={'Mañana me pongo!'} />
            </Appbar.Header>
            <ScrollView>
                <ListaGastos />
                <ListaIngresos />
            </ScrollView>
            <Portal>
                <Dialog visible={tipoDialog} onDismiss={() => { setTipoDialog(null) }}>
                    <Dialog.Content>
                        <ScrollView>
                            {GetFabButtonDialogComponent(tipoDialog, () => { setTipoDialog(null) })}
                        </ScrollView>
                    </Dialog.Content>
                </Dialog>
            </Portal>
            <FabButton onClick={(tipo) => {
                setTipoDialog(tipo)
            }} />
        </View>
    );
}

const GetFabButtonDialogComponent = (tipoFabButton, onSubmit) => {
    switch (tipoFabButton) {
        case TIPOS_FAB_BUTTON.ADD_GASTO:
            return (<AddGastoItem onSubmit={onSubmit} />)
        case TIPOS_FAB_BUTTON.ADD_INGRESO:
            return (<AddIngresoItem onSubmit={onSubmit} />)
        default:
            return null
    }
}

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
