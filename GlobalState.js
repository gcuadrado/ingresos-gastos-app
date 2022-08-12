import React, { useEffect, useState } from "react";
import AppContext from "./AppContext";
import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';

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
        const newIngreso = { ...ingreso, id: uuid.v4() }
        const newState = {
            ...state,
            ingresos: [...state.ingresos, newIngreso]
        }
        setState(newState);
        persistLocally(newState)
    }

    const handleAddGasto = (gasto) => {
        const newGasto = { ...gasto, id: uuid.v4() }
        const newState = {
            ...state,
            gastos: [...state.gastos, newGasto]
        }
        setState(newState);
        persistLocally(newState)
    }

    const handleRemoveGasto = (id) => {
        const newState = { ...state, gastos: [...state.gastos.filter(item => item.id !== id)] }
        setState(newState);
        persistLocally(newState)
    }
    const handleRemoveIngreso = (id) => {
        const newState = { ...state, ingresos: [...state.ingresos.filter(item => item.id !== id)] }
        setState(newState);
        persistLocally(newState)
    }

    return (
        <AppContext.Provider
            value={{
                state,
                addIngreso: handleAddIngreso,
                addGasto: handleAddGasto,
                removeGasto: handleRemoveGasto,
                removeIngreso: handleRemoveIngreso
            }}
        >
            {children}
        </AppContext.Provider>
    );
}

export default GlobalState