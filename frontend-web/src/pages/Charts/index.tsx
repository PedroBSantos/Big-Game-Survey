import Axios from "axios";
import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import Filters from "../../components/Filters";
import { barOptions, pieOptions } from "./char-options";
import "./style.css";
import { buildBarSeries, getPlatformChartData, getGenderChartData } from "./helpers";

type PieChartData = {
	labels: string[];
	series: number[];
};

type BarChartData = {
	x: string;
	y: number;
};

const initialPieData = {
	labels: [],
	series: [],
};

const BASE_URL = "http://localhost:8080";

const Charts = () => {
	let [barCartData, setBarChartData] = useState<BarChartData[]>([]);
	let [platformData, setPlatformData] = useState<PieChartData>(
		initialPieData
	);
	let [genderData, setGenderData] = useState<PieChartData>(initialPieData);

	useEffect(() => {
		async function getData() {
			const recordsResponse = await Axios.get(`${BASE_URL}/records`);
			const gamesResponse = await Axios.get(`${BASE_URL}/games`);
            const barData = buildBarSeries(
                gamesResponse.data,
                recordsResponse.data.content
            );
            setBarChartData(barData);
            const platformData = getPlatformChartData(recordsResponse.data.content);
            setPlatformData(platformData);
            const genderData = getGenderChartData(recordsResponse.data.content);
            setGenderData(genderData);
		}
		getData();
	}, []);
	return (
		<div className="page-container">
			<Filters link="/records" linkText="VER TABELA"></Filters>
			<div className="chart-container">
				<div className="top-related">
					<h1 className="top-related-title">Jogos mais votados</h1>
					<div className="games-container">
						<Chart
							options={barOptions}
							type="bar"
							width="900"
							height="650"
							series={[{ data: barCartData }]}
						></Chart>
					</div>
				</div>
				<div className="charts">
					<div className="platform-chart">
						<h2 className="chart-title">Plataformas</h2>
						<Chart
							options={{
								...pieOptions,
								labels: platformData?.labels,
							}}
							type="donut"
							series={platformData?.series}
							width="350"
						></Chart>
					</div>
					<div className="gender-chart">
						<h2 className="chart-title">Gêneros</h2>
						<Chart
							options={{
								...pieOptions,
								labels: genderData?.labels,
							}}
							type="donut"
							series={genderData?.series}
							width="350"
						></Chart>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Charts;
