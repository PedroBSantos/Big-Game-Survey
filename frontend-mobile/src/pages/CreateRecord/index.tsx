import { FontAwesome5 as Icon } from "@expo/vector-icons";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, View, Alert } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import RNPickerSelect from "react-native-picker-select";
import Header from "../../components/Header";
import PlatformCard from "./PlatformCard";
import { Game, GamePlatform } from "./PlatformCard/types";

const placeholder = {
	label: "Selecione o Game",
	value: null,
};

const BASE_URL = "http://192.168.0.2:8080";

const mapSelectValues = (games: Game[]) => {
	return games.map((game) => ({
		...game,
		label: game.title,
		value: game.id,
	}));
};

const CreateRecord = () => {
	let [platform, setPlatform] = useState<GamePlatform>();
	let [gameSelected, setGameSelected] = useState<string>("");
	let [allGames, setAllGames] = useState<Game[]>([]);
	let [filteredGames, setFilteredGames] = useState<Game[]>([]);
	let [name, setName] = useState("");
	let [age, setAge] = useState("");

	const handleChangePlatform = (selectedPlatform: GamePlatform) => {
		setPlatform(selectedPlatform);
		setFilteredGames(
			allGames.filter((game) => game.platform === selectedPlatform)
		);
	};

	const handleSubmit = () => {
		const payload = {
			name,
			age,
			gameId: gameSelected,
		};
		axios
			.post(`${BASE_URL}/records`, payload)
			.then(() => {
				Alert.alert("Dados salvos com sucesso!");
				setName("");
				setAge("");
				setGameSelected("");
				setPlatform(undefined);
			})
			.catch(() => Alert.alert("Erro ao salvar informações!"));
	};

	useEffect(() => {
		axios
			.get(`${BASE_URL}/games`)
			.then((response) => {
				const selectValues = mapSelectValues(response.data);
				setAllGames(selectValues);
			})
			.catch(() => Alert.alert("Erro ao listar os jogos!"));
	}, []);

	return (
		<>
			<Header></Header>
			<View style={styles.container}>
				<TextInput
					style={styles.inputText}
					placeholder="Nome"
					placeholderTextColor="#9e9e9e"
					onChangeText={(text) => setName(text)}
					value={name}
				></TextInput>
				<TextInput
					style={styles.inputText}
					placeholder="Idade"
					placeholderTextColor="#9e9e9e"
					keyboardType="numeric"
					maxLength={3}
					onChangeText={(text) => setAge(text)}
					value={age}
				></TextInput>
				<View style={styles.platformContainer}>
					<PlatformCard
						platform={"PC"}
						icon="laptop"
						activePlatform={platform}
						onChange={handleChangePlatform}
					></PlatformCard>
					<PlatformCard
						platform={"XBOX"}
						icon="xbox"
						activePlatform={platform}
						onChange={handleChangePlatform}
					></PlatformCard>
					<PlatformCard
						platform={"PLAYSTATION"}
						icon="playstation"
						activePlatform={platform}
						onChange={handleChangePlatform}
					></PlatformCard>
				</View>
				<RNPickerSelect
					onValueChange={(value) => {
						setGameSelected(value);
					}}
					placeholder={placeholder}
					items={filteredGames}
					style={pickerSelectStyles}
					value={gameSelected}
					Icon={() => {
						return (
							<Icon
								name="chevron-down"
								color="#9e9e9e"
								size={25}
							></Icon>
						);
					}}
				/>
				<View style={styles.footer}>
					<RectButton style={styles.button} onPress={handleSubmit}>
						<Text style={styles.buttonText}>SALVAR</Text>
					</RectButton>
				</View>
			</View>
		</>
	);
};

const pickerSelectStyles = StyleSheet.create({
	inputIOS: {
		fontSize: 16,
		paddingVertical: 12,
		paddingHorizontal: 20,
		backgroundColor: "#FFF",
		borderRadius: 10,
		color: "#ED7947",
		paddingRight: 30,
		fontFamily: "Play_700Bold",
		height: 50,
	},
	inputAndroid: {
		fontSize: 16,
		paddingVertical: 12,
		paddingHorizontal: 20,
		backgroundColor: "#FFF",
		borderRadius: 10,
		color: "#ED7947",
		paddingRight: 30,
		fontFamily: "Play_700Bold",
		height: 50,
	},
	placeholder: {
		color: "#9E9E9E",
		fontSize: 16,
		fontFamily: "Play_700Bold",
	},
	iconContainer: {
		top: 10,
		right: 12,
	},
});

const styles = StyleSheet.create({
	container: {
		marginTop: "15%",
		paddingRight: "5%",
		paddingLeft: "5%",
		paddingBottom: 50,
	},
	inputText: {
		height: 50,
		backgroundColor: "#FFF",
		borderRadius: 10,
		color: "#ED7947",
		fontFamily: "Play_700Bold",
		fontSize: 16,
		paddingLeft: 20,
		marginBottom: 21,
	},
	platformContainer: {
		marginBottom: 20,
		flexDirection: "row",
		justifyContent: "space-between",
	},
	footer: {
		marginTop: "15%",
		alignItems: "center",
	},
	button: {
		backgroundColor: "#00D4FF",
		flexDirection: "row",
		borderRadius: 10,
		height: 60,
		width: "100%",
		alignItems: "center",
		justifyContent: "center",
	},
	buttonText: {
		fontFamily: "Play_700Bold",
		fontWeight: "bold",
		fontSize: 18,
		color: "#0B1F34",
	},
});

export default CreateRecord;
