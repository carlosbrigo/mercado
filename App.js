import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TelaInicio from "./Componentes/inicial/Inicial";
import TelaLista from "./Componentes/listar/Listar";
import TelaCadastro from "./Componentes/cadastro/Cadastro";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen name="Inicio" component={TelaInicio} />
        <Stack.Screen name="Cadastro" component={TelaCadastro} />
        <Stack.Screen name="Listar" component={TelaLista} />
      </Stack.Navigator>
    </NavigationContainer>
  )
};
