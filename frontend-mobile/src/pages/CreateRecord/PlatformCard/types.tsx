export type GamePlatform = "PC" | "XBOX" | "PLAYSTATION";

export type Game = {
	id: number;
	title: string;
	platform: GamePlatform;
	label: string;
	value: number;
};
