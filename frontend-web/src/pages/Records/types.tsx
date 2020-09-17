export type RecordsResponse = {
	content: RecordItem[];
	totalPages: Number;
};

export type RecordItem = {
	id: Number;
	moment: string;
	name: string;
	age: Number;
	gameTitle: string;
	gamePlatform: Platform;
	genreName: string;
};

export type Platform = "XBOX" | "PC" | "PLAYSTATION";
