import * as React from 'react';
import { FAB, Portal } from 'react-native-paper';
import AddGastoItem from './AddGastoItem';
import AddIngresoItem from './AddIngresoItem';

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
                    { icon: 'plus', onPress: () => console.log('Pressed add') },
                    {
                        icon: 'star',
                        label: 'Star',
                        onPress: () => console.log('Pressed star'),
                    },
                    {
                        icon: 'email',
                        label: 'Email',
                        onPress: () => onClick(),
                    },
                    {
                        icon: 'bell',
                        label: 'Remind',
                        onPress: () => onClick(),
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