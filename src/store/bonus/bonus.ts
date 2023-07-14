import bonusApi from '../../api/bonus-api'

import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { BaseThunk, SliceActions } from '../store'

import { IBonusesData, InitialState } from './bonus-types'

const initialState: InitialState = {
	bonuses: {
		typeBonusName: '',
		currentQuantity: 0,
		forBurningQuantity: 0,
		dateBurning: '',
	},
	isLoading: false,
}

const bonuses = createSlice({
	name: 'bonuses',
	initialState,
	reducers: {
		setBonuses: (state, action: PayloadAction<{ bonuses: IBonusesData }>) => {
			state.bonuses = action.payload.bonuses
		},
		setIsLoading: (state, action: PayloadAction<{ isLoading: boolean }>) => {
			state.isLoading = action.payload.isLoading
		},
	},
})

const { actions, reducer } = bonuses

export const requestBonuses = (): Thunk => async (dispatch) => {
	dispatch(setIsLoading({ isLoading: true }))

	const res = await bonusApi.getBonus()

	if (res.resultOperation.status === 0) {
		dispatch<any>(setBonuses({ bonuses: res.data }))
	}

	dispatch(setIsLoading({ isLoading: false }))
}

export const { setBonuses, setIsLoading } = actions

export default reducer

export type PostActions = SliceActions<typeof actions>
type Thunk = BaseThunk<PostActions, void>
