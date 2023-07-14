import axios from 'axios'

const url = process.env.REACT_APP_HTTP_URL
export const accessKey = process.env.REACT_APP_ACCESS_KEY
export const clientID = process.env.REACT_APP_CLIENT_ID
export const deviceID = process.env.REACT_APP_DEVICE_ID

export const authInstance = axios.create({ baseURL: `${url}:5021` })
export const bonusInstance = axios.create({ baseURL: `${url}:5003` })

export interface APIResponse<T> {
	ok: boolean
	result: T
}

export type APIErrorResult = APIResponse<string>
