import { NavigationContainer } from "@react-navigation/native"; //Permite a navegação entre interfaces
import { createStackNavigator } from "@react-navigation/stack"; //Cria uma pilha de navegação
import React from "react";
import CreateRecord from "./pages/CreateRecord";
import Home from "./pages/Home";

const Stack = createStackNavigator();

const Routes = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				headerMode="none"
				screenOptions={{
					cardStyle: {
						backgroundColor: "#0b1f34",
					},
				}}
			>
				<Stack.Screen name="Home" component={Home}></Stack.Screen>
				<Stack.Screen name="CreateRecord" component={CreateRecord}></Stack.Screen>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Routes;
