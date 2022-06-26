import * as React from 'react';
import { Text } from 'react-native';
import { List } from 'react-native-paper';

const GastoItem = ({item}) => (
  <List.Item
    title={item.title}
    description={item.description}
    left={props => <List.Icon {...props} icon="folder" />}
    right={props => <Text>-{item.value}€</Text>}
  />
);

export default GastoItem;