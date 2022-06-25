import React, { useState } from "react";
import AppContext from "./AppContext";

const initialState = {
    items: [{
        title: 'Alquiler',
        description: 'Esto es un alquiler',
        value: 500
    }, {
        title: 'Suministros',
        description: 'Luz, gas, agua...',
        value: 150
    }]
}

const GlobalState = ({ children }) => {
    const [state, setState] = useState(initialState);

    function handleAddItem(item) {
        setState({
            ...state,
            items: [...items, item]
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
                addItem: handleAddItem,
                removeItem: handleRemoveItem
            }}
        >
            {children}
        </AppContext.Provider>
    );
}

export default GlobalState