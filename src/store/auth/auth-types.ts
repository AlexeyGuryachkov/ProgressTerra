export interface InitialState {
	isAuth: boolean
	isLoading: boolean
}

export interface IAuthResponce {
	result: {
		status: number
		message: string
		messageDev: string | null
		codeResult: number
		duration: number
		idLog: string
	}
	accessToken: string
}
