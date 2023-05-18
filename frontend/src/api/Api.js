import { url_api } from '../config/routes/Paths';




const url_ = url_api + `/`;


export async function getData() {

	return fetch(url_, {
		method: "GET",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json"
		},
	})
}

export async function setPost(pParam) {
	return fetch(url_, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			pParam
		}),
	});
}