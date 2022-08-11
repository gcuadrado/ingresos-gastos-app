import * as React from 'react';
import { FAB, Portal } from 'react-native-paper';
import AddGastoItem from './AddGastoItem';
import AddIngresoItem from './AddIngresoItem';
import TIPOS_FAB_BUTTON from './tiposFabButtons';

const FabButton = ({ onClick }) => {
    const [state, setState] = React.useState({ open: false });

    const onStateChange = ({ open }) => setState({ open });

    const { open } = state;

    return (
        <Portal>
            <FAB.Group
                open={open}
                icon={open ? 'window-close' : 'plus'}
                actions={[
                    {
                        icon: 'cash-multiple',
                        label: 'Ingreso',
                        onPress: () => onClick(TIPOS_FAB_BUTTON.ADD_INGRESO),
                    },
                    {
                        icon: 'currency-usd-off',
                        label: 'Gasto',
                        onPress: () => onClick(TIPOS_FAB_BUTTON.ADD_GASTO),
                    },
                ]}
                onStateChange={onStateChange}
                onPress={() => {
                    if (open) {
                        // do something if the speed dial is open
                    }
                }}
            />
        </Portal>
    );
};

export default FabButton;