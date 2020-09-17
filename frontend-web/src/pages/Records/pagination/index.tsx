import React from "react";
import "./style.css";

type Props = {
	totalPages?: Number;
	goToPage: Function;
	activePage: Number;
};

const Pagination = ({ totalPages = 0, goToPage, activePage }: Props) => {
	const paginationItems = Array.from(Array(totalPages).keys());
	return (
		<div className="pagination-container">
			{paginationItems.map((item) => {
				return (
					<button
						className={`pagination-item ${
							activePage === item ? `active` : `inactive`
						}`}
                        onClick={() => goToPage(item)} key={item}>{item + 1}</button>
				);
			})}
		</div>
	);
};

export default Pagination;
