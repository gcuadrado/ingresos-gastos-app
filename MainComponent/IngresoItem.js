import React, { useContext } from 'react';
import { Text } from 'react-native';
import { List, IconButton } from 'react-native-paper';
import AppContext from '../AppContext';

const IngresoItem = ({ item }) => {
  const appContext = useContext(AppContext)
  return (
    <List.Item
      title={item.title}
      description={item.description}
      left={props => <List.Icon {...props} icon="circle-small" />}
      right={props =>
        <>
          <Text>
            {item.value * item.units}€ {item.units > 1 && `(${item.value}€x${item.units})`}
          </Text>
          <IconButton
            icon="trash-can"
            mode="outlined"
            onPress={() => appContext.removeIngreso(item.id)}
          />
        </>
      }
    />
  )
};

export default IngresoItem;