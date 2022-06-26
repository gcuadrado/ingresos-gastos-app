import { StatusBar } from 'expo-status-bar';
import { useState, useContext } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { TextInput, Appbar, Portal, Dialog, Button } from 'react-native-paper';
import AppContext from './AppContext';
import AddGastoItem from './MainComponent/AddGastoItem';
import FabButton from './MainComponent/FabButton';
import ListaGastos from './MainComponent/ListaGastos';
import ListaIngresos from './MainComponent/ListaIngresos';



export default MainComponent = () => {

    const appContext = useContext(AppContext);
    const [showDialog, setShowDialog] = useState(false)
    const [componentForDialog, setComponentForDialog] = useState(null)
    return (
        <View style={styles.container}>
            <Appbar.Header>
                <Appbar.Content title="Title" subtitle={'Subtitle'} />
            </Appbar.Header>
            <ScrollView>
                <ListaGastos />
                <ListaIngresos />
            </ScrollView>
            <Portal>
                <Dialog visible={showDialog} onDismiss={() => { setShowDialog(false) }}>
                    <Dialog.Title>Alert</Dialog.Title>
                    <Dialog.Content>
                        <ScrollView>
                            <componentForDialog onSubmit={() => { setShowDialog(false) }} />
                        </ScrollView>
                    </Dialog.Content>
                </Dialog>
            </Portal>
            <FabButton onClick={(component) => {
                setShowDialog(true)
                setComponentForDialog(component)
            }} />
        </View>
    );
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
