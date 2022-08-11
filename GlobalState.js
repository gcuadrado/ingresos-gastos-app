import React, { useEffect, useState } from "react";
import AppContext from "./AppContext";
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
    gastos: [],
    ingresos: []
}

const persistLocally = async (state) => {
    try {
        await AsyncStorage.setItem(
            '@academiaStore',
            JSON.stringify(state)
        );
    } catch (error) {
        // Error saving data
    }
}

const retrieveStateLocally = async () => {
    try {
        const value = await AsyncStorage.getItem('@academiaStore')
        if (value !== null) {
            return JSON.parse(value)
        }
    } catch (e) {
        // error reading value
        return null
    }
}



const GlobalState = ({ children }) => {
    const [state, setState] = useState(initialState);

    useEffect(() => {
        const retrieveData = async () => {
            const persistedState = await retrieveStateLocally()
            if (persistedState)
                setState(persistedState)
        }
        retrieveData()
    }, [])

    const handleAddIngreso = (ingreso) => {
        const newState = {
            ...state,
            ingresos: [...state.ingresos, ingreso]
        }
        setState(newState);
        persistLocally(newState)
    }

    const handleAddGasto = (gasto) => {
        const newState = {
            ...state,
            gastos: [...state.gastos, gasto]
        }
        setState(newState);
        persistLocally(newState)
    }

    function handleRemoveItem(index) {
        const copy = [...state.items];
        copy.splice(index, 1);
        setState({
            ...state,
            items: copy
        });


    }

    return (
        <AppContext.Provider
            value={{
                state,
                addIngreso: handleAddIngreso,
                addGasto: handleAddGasto
            }}
        >
            {children}
        </AppContext.Provider>
    );
}

export default GlobalState