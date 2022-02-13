import axios from "axios";
import * as actionType from "./actionTypes";
import { API_DOMAIN, APIHEADERS } from '../../Config'

export const signin = (formData, router) =>
	async (dispatch) => {
		dispatch({ type: actionType.AUTH });
		await axios.post(`${API_DOMAIN}/user/login`, formData, APIHEADERS())
			.then(response => {
				dispatch({ type: actionType.AUTH_SUCCESS, data: response.data });
				router.push("/profile");
			}).catch(error => {
				dispatch({ type: actionType.AUTH_FAIL, error: error.response.data });
			})
	};
