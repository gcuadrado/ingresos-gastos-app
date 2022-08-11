import * as React from 'react';
import { Text } from 'react-native';
import { List } from 'react-native-paper';

const GastoItem = ({item}) => (
  <List.Item
    title={item.title}
    description={item.description}
    left={props => <List.Icon {...props} icon="circle-small" />}
    right={props => <Text>-{item.value*item.units}€ {item.units>1 &&`(${item.value}€x${item.units})`}</Text>}
  />
);

export default GastoItem;