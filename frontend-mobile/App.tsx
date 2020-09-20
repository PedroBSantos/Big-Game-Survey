import {
	Play_400Regular,
	Play_700Bold,
	useFonts,
} from "@expo-google-fonts/play";
import { AppLoading } from "expo";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import Routes from "./src/Routes";

export default function App() {
	const [fontsLoaded] = useFonts({
		Play_400Regular,
		Play_700Bold,
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	} else {
		return (
			<View style={styles.container}>
				<Routes></Routes>
				<StatusBar style="light" />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
