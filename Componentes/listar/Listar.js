import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import ItemLista from './AppItem';
import Database from '../../Componentes/Database';


export default function Lista({ route, navigation }) {
    const [items, setItems] = useState([]);
    useEffect(() => {
        Database.getItems().then(items => setItems(items));
    }, [route]);
    return (
        <View style={estilos.container}>
            <StatusBar style="light" />
            <Text style={estilos.title}>Lista de Produtos</Text>
            <ScrollView
                style={estilos.scrollContainer}
                contentContainerStyle={estilos.itemsContainer}>
                {items.map(item => {
                    return <ItemLista key={item.id} id={item.id} item={item.nome + ' - ' +
                        item.valor + ' - ' + item.qtd  } navigation={navigation}  />
                })}
                
            </ScrollView>
        </View>
    );
}

import { StyleSheet } from
'react-native';
const estilos = StyleSheet.create({
 container: {
 flex: 1,
 backgroundColor: 'blue',
 alignItems: 'center',
 justifyContent: 'center'
 },
 title: {
 color: '#fff',
 fontSize: 20,
 fontWeight: 'bold',
 marginTop: 50,
 marginBottom: 20
 },
 scrollContainer: {
 flex: 1,
 width: '90%'
 },
 itemsContainer: {
    marginVertical: 15,
    padding: 20,
    borderRadius: 10,
    alignItems: 'stretch',
    backgroundColor: '#fff'
    },
   });
   
