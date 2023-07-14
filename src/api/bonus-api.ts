import { bonusInstance } from './api'
import { getToken } from '../functions/localStorage'
import { accessKey } from './api'

import { IBonusesResponce } from '../store/bonus/bonus-types'

const bonusApi = {
	async getBonus() {
		const response = await bonusInstance.get<IBonusesResponce>(
			`/api/v3/ibonus/generalinfo/${getToken()}`,
			{
				headers: {
					AccessKey: accessKey,
				},
			}
		)

		return response.data
	},
}

export default bonusApi
