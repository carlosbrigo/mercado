import React, {useState} from 'react';
import { CheckBox } from 'react-native-elements';
import { Text, View, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import Database from '../../Componentes/Database';

export default function AppItem(props) {

    const [checked, setChecked] = useState(false);

    async function editar() {
        const item = await Database.getItem(props.id);
        props.navigation.navigate("Cadastro", item);
    }

    function excluir() {
        Alert.alert("Atenção", "Você tem certeza que deseja excluir este item?", [{
            text: "Não",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
        },
        {
            text: "Sim", onPress: () => {
                Database.deleteItem(props.id)
                    .then(response => props.navigation.navigate("Listar", { id: props.id }));
            }
        }
        ], { cancelable: false });
    }
    return (
        <View style={estilos.container}>
            <Text style={estilos.textItem}>{props.item}</Text>
            <View style={estilos.buttonsContainer}>
                <TouchableOpacity style={estilos.deleteButton} onPress={excluir} >
                    <Icon name="trash" color="white" size={18} />
                </TouchableOpacity>
                <TouchableOpacity
                    style={estilos.editButton}
                    onPress={editar}>
                    <Icon name="edit" color="white" size={18} />
                </TouchableOpacity>
                <CheckBox
                    title='Comprado!'
                    checked={checked}
                    onPress={() => setChecked(!checked)}
                />
            </View>
        </View>
    );
}
const estilos = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        marginTop: 20,
        width: '100%'
    },
    buttonsContainer: {
        flexDirection: 'row-reverse',
        alignItems: 'flex-end',
        borderBottomWidth: 1,
        borderBottomColor: '#CCC',
        paddingBottom: 10,
        marginTop: 10,
    },
    editButton: {
        marginLeft: 10,
        height: 40,
        backgroundColor: 'blue',
        borderRadius: 10,
        padding: 10,
        fontSize: 12,
        elevation: 10,
        shadowOpacity: 10,
        shadowColor: '#ccc',
        alignItems: 'center'
    },
    deleteButton: {
        marginLeft: 10,
        height: 40,
        width: 40,
        backgroundColor: 'red',
        borderRadius: 10,
        padding: 10,
        fontSize: 12,
        elevation: 10,
        shadowOpacity: 10,
        shadowColor: '#ccc',
        alignItems: 'center'
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    textItem: {
        fontSize: 20,
    }
});