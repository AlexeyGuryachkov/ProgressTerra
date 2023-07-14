import authApi from '../../api/auth-api'

import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { BaseThunk, SliceActions } from '../store'

import { setToken } from '../../functions/localStorage'

import { InitialState } from './auth-types'

const initialState: InitialState = {
	isAuth: false,
	isLoading: false,
}

const auth = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setIsAuth: (state, action: PayloadAction<{ isAuth: boolean }>) => {
			state.isAuth = action.payload.isAuth
		},
		setIsLoading: (state, action: PayloadAction<{ isLoading: boolean }>) => {
			state.isLoading = action.payload.isLoading
		},
	},
})

const { actions, reducer } = auth

export const login = (): Thunk => async (dispatch) => {
	dispatch(setIsLoading({ isLoading: true }))

	const res = await authApi.auth()

	if (res.result.status === 0) {
		dispatch(setIsAuth({ isAuth: true }))
		setToken(res.accessToken)
	}

	dispatch(setIsLoading({ isLoading: false }))
}

export const { setIsAuth, setIsLoading } = actions

export default reducer

export type PostActions = SliceActions<typeof actions>
type Thunk = BaseThunk<PostActions, void>
