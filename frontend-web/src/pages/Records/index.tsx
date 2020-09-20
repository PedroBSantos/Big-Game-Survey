import axios from "axios";
import React, { useEffect, useState } from "react";
import Filters from "../../components/Filters";
import formatDate from "./helpers";
import Pagination from "./pagination";
import "./style.css";
import { RecordsResponse } from "./types";

const BASE_URL = "https://sds1-pedro.herokuapp.com";

const Records = () => {
	let [recordsResponse, setRecordsResponse] = useState<RecordsResponse>();
	let [activePage, setActivePage] = useState(0);
	useEffect(() => {
		axios
			.get(`${BASE_URL}/records?linesPerPage=12&page=${activePage}`)
			.then((response) => setRecordsResponse(response.data));
	}, [activePage]);
	return (
		<div className="page-container">
			<Filters link="/charts" linkText="VER GRÁFICOS"></Filters>
			<table className="records-table" cellPadding="0" cellSpacing="0">
				{" "}
				{/*Espaçamento interno das celulas da tabela*/}
				<thead>
					{" "}
					{/*Cabeçalho da tabela*/}
					<tr>
						{" "}
						{/*Seção para as linhas da tabela*/}
						{/*Colunas da tabela. Colunas que estão na linha atual. td colunas da linha atual*/}
						<th>INSTANTE</th>
						<th>NOME</th>
						<th>IDADE</th>
						<th>PLATAFORMA</th>
						<th>GÊNERO</th>
						<th>TÍTULO DO GAME</th>
					</tr>
				</thead>
				<tbody>
					{" "}
					{/*Corpo da tabela*/}
					{/*Gerando as linhas da tabela a partir da response*/}
					{recordsResponse?.content.map((record) => (
						<tr key={record.id.toString()}>
							<td>{formatDate(record.moment)}</td>
							<td>{record.name}</td>
							<td>{record.age}</td>
							<td className="text-secondary">
								{record.gamePlatform}
							</td>
							<td>{record.genreName}</td>
							<td className="text-primary">{record.gameTitle}</td>
						</tr>
					))}
				</tbody>
			</table>
			<Pagination
				totalPages={recordsResponse?.totalPages}
				activePage={activePage}
				goToPage={(index: number) => setActivePage(index)}
			></Pagination>
		</div>
	);
};

export default Records;
