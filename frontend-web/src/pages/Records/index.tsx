import axios from 'axios';
import React, { useEffect, useState } from "react";
import formatDate from './helpers';
import Pagination from './pagination';
import "./style.css";
import { RecordsResponse } from './types';
import { Link } from 'react-router-dom'

const BASE_URL = "http://localhost:8080"

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
            <div className="filters-container records-actions">
                            <Link to="/charts">
                <button className="action-filters">VER GRÁFICOS</button>
            </Link>
            </div>
            <table className="records-table" cellPadding="0" cellSpacing="0"> {/*Espaçamento interno das celulas da tabela*/}
                <thead> {/*Cabeçalho da tabela*/}
                    <tr> {/*Seção para as linhas da tabela*/}
                        {/*Colunas da tabela. Colunas que estão na linha atual. td colunas da linha atual*/}
                        <th>INSTANTE</th>
                        <th>NOME</th>
                        <th>IDADE</th>
                        <th>PLATAFORMA</th>
                        <th>GÊNERO</th>
                        <th>TÍTULO DO GAME</th>
                    </tr>
                </thead>
                <tbody> {/*Corpo da tabela*/}
                    {/*Gerando as linhas da tabela a partir da response*/}
                    {recordsResponse?.content.map(record => ( 
                        <tr key={record.id.toString()}>
                            <td>{formatDate(record.moment)}</td>
                            <td>{record.name}</td>
                            <td>{record.age}</td>
                            <td className="text-secondary">{record.gamePlatform}</td>
                            <td>{record.genreName}</td>
                            <td className="text-primary">{record.gameTitle}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Pagination totalPages={recordsResponse?.totalPages}
                        activePage={activePage}
                        goToPage={(index: number) => setActivePage(index)}></Pagination>
        </div>);
}

export default Records;