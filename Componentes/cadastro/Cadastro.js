import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import Database from '../../Componentes/Database';

export default function Cadastro({ route, navigation }) {
    
    const id = route.params ? route.params.id : undefined;
    const [nome, setNome] = useState('');
    const [qtd, setQtd] = useState('');
    const [valor, setValor] = useState('');

    useEffect(() => {
        if (!route.params) return;
        setNome(route.params.nome);
        setQtd(route.params.qtd);
        setValor(route.params.valor);
    }, [route])

    async function Salvar() {
        const listItem = { nome, qtd: parseInt(qtd), valor: parseInt(valor) };
        Database.saveItem(listItem, id)
            .then(response => navigation.navigate("Inicio", listItem));
    }

    function Limpar() {
        setNome('');
        setValor('');
        setQtd('');
        }

        return (
            <View style={estilos.container}>
                <Text style={estilos.title}>Cadastro de Produtos</Text>
                <View style={estilos.inputContainer}>
                    <TextInput style={estilos.input}
                        onChangeText={(text) => setNome(text)}
                        placeholder="Informe o produto" value={nome} />
                    <TextInput style={estilos.input}
                        onChangeText={(text) => setValor(text)}
                        placeholder="Informe o valor" keyboardType={'numeric'}
                        value={valor.toString()}  />
                    <TextInput style={estilos.input}
                        onChangeText={(text) => setQtd(text)}
                        placeholder="Informe a Quantidade" keyboardType={'numeric'} 
                        value={valor.toString()}/>
                    <TouchableOpacity style={estilos.button} onPress={Salvar}>

                        <View style={estilos.buttonContainer}>
                            <Feather name="save" size={22} color="white" />
                            <Text style={estilos.buttonText}>Salvar</Text>
                        </View>
                        
                    </TouchableOpacity>
                    <TouchableOpacity style={estilos.button} onPress={Limpar}>
                        <View style={estilos.buttonContainer}>
                            <MaterialIcons name="cleaning-services" size={22} color="white" />
                            <Text style={estilos.buttonText}>Limpar</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <StatusBar style="light" />
            </View>
        );
    }

import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'blue',
        alignItems: 'center',
    },
    title: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 50,
    },
    inputContainer: {
        flex: 1,
        marginTop: 30,
        width: '90%',
        padding: 20,
        borderRadius: 10,
        marginBottom: 20,
        alignItems: 'stretch',
        backgroundColor: '#fff'
    },
    input: {
        marginTop: 10,
        height: 60,
        borderRadius: 10,
        paddingHorizontal: 24,
        fontSize: 16,
        alignItems: 'stretch'
    },
    button: {
        marginTop: 10,
        height: 60,
        backgroundColor: 'blue',
        borderRadius: 10,
        paddingHorizontal: 24,
        fontSize: 16,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 20,
        shadowOpacity: 20,
        shadowColor: '#ccc',
    },
    buttonContainer: {
        flexDirection: "row",
    },
    buttonText: {
        marginLeft: 10,
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
    }
});