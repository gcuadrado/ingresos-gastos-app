import React, { useState } from "react";
import AppContext from "./AppContext";

const initialState = {
    gastos: [{
        title: 'Alquiler',
        description: 'Esto es un alquiler',
        value: 500
    }, {
        title: 'Suministros',
        description: 'Luz, gas, agua...',
        value: 150
    }
    ],
    ingresos: [{
        title: 'Dinserito',
        description: 'Esto es un alquiler',
        value: 500
    }, {
        title: 'Suministros',
        description: 'Luz, gas, agua...',
        value: 150
    }
    ]
}

const GlobalState = ({ children }) => {
    const [state, setState] = useState(initialState);

    const handleAddIngreso = (ingreso) => {
        setState({
            ...state,
            ingresos: [...state.ingresos, ingreso]
        });
    }

    const handleAddGasto = (gasto) => {
        setState({
            ...state,
            gastos: [...state.gastos, gasto]
        });
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