import { accessKey, authInstance, clientID, deviceID } from './api'

import { IAuthResponce } from '../store/auth/auth-types'

const authApi = {
	async auth() {
		const response = await authInstance.post<IAuthResponce>(
			'/api/v3/clients/accesstoken',
			{
				idClient: clientID,
				accessToken: '',
				paramName: 'device',
				paramValue: deviceID,
				latitude: 0,
				longitude: 0,
				sourceQuery: 0,
			},
			{
				headers: {
					AccessKey: accessKey,
				},
			}
		)
		return response.data
	},
}

export default authApi
