import React from 'react';
import { Image, Text, View, Pressable } from 'react-native';
import { AntDesign, Feather } from '@expo/vector-icons';
import icone from '../../assets/mercado.png';

export default function Inicial(props) {
    return (
        <View style={estilos.conteiner}>
            <View style={estilos.box}>
                <Image style={estilos.boxIcone} source={icone} />
                <View>
                    <Text style={estilos.boxTitulo}> Mercado </Text>
                    <Text style={estilos.boxSubtitulo}> Lista de Compras </Text>
                </View>
            </View>
            <View style={estilos.boxDados}>
                <Pressable style={estilos.boxCard}
                    onPress={() => { props.navigation.navigate('Cadastro') }} >
                    <AntDesign name="adduser" size={40} color="black" />
                    <Text style={estilos.boxCardTexto}> Inserir </Text>
                </Pressable>
                <Pressable style={estilos.boxCard}
                    onPress={() => { props.navigation.navigate('Listar') }} >
                    <Feather name="list" size={40} color="black" />
                    <Text style={estilos.boxCardTexto}> Listar </Text>
                </Pressable>
            </View>
        </View>
    );
}


import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
    conteiner: {
        flex: 1,
    },
    boxDados: {
        padding: 30,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: "space-between"
    },
    boxCard: {
        backgroundColor: '#b7d5e5',
        minWidth: 150,
        alignItems: "center",
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#101010',
        borderRadius: 5,
    },
    boxCardTexto: {
        color: '#00a79d',
        fontSize: 16
    },
    box: {
        backgroundColor: '#b7d5e5',
        paddingVertical: 50,
        paddingHorizontal: 10,
        borderBottomEndRadius: 40,
        borderBottomStartRadius: 40,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    boxIcone: {
        width: 100,
        height: 100,
        borderRadius: 70,
        borderColor: '#fff',
        borderWidth: 1,
        marginRight: 15
    },
    boxTitulo: {
        color: '#fff',
        fontWeight: "700",
        fontSize: 18,
        textTransform: "uppercase",
    },
    boxSubtitulo: {
        color: '#fff',
    }
}
)