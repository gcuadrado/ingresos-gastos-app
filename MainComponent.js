import { StatusBar } from 'expo-status-bar';
import { useState, useContext } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { TextInput, Appbar, List } from 'react-native-paper';
import AppContext from './AppContext';
import FabButton from './MainComponent/FabButton';
import ListaGastos from './MainComponent/ListaGastos';
import ListaIngresos from './MainComponent/ListaIngresos';



export default MainComponent = () => {
    const [text, setText] = useState('')
    const appContext = useContext(AppContext);
    return (
        <View style={styles.container}>
            <Appbar.Header>
                <Appbar.Content title="Title" subtitle={'Subtitle'} />
            </Appbar.Header>
            <ScrollView>
                <ListaGastos />
                <ListaIngresos />
                <View style={styles.row} >
                    <View style={styles.column} >
                        <TextInput
                            label="Email"
                            value={text}
                            onChangeText={text => setText(text)}
                        />
                    </View>
                </View>
            </ScrollView>
            <FabButton />
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
