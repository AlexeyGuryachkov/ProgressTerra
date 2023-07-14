export interface InitialState {
	bonuses: IBonusesData
	isLoading: boolean
}

export interface IBonusesResponce {
	resultOperation: IBonusesResOperation
	data: IBonusesData
}

export interface IBonusesResOperation {
	status: number
	message: string
	messageDev: string | null
	codeResult: number
	duration: number
	idLog: string
}

export interface IBonusesData {
	typeBonusName: string
	currentQuantity: number
	forBurningQuantity: number
	dateBurning: string
}
