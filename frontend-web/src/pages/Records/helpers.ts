import moment from "moment";

export default function formatDate(date: string) {
	return moment(date).format("DD/MM/YYYY HH:mm");
}
