import { RootState } from '../store'

export const getIsLoading = ({ auth: { isLoading } }: RootState) => isLoading
export const getIsAuth = ({ auth: { isAuth } }: RootState) => isAuth
