import { RootState } from '../store'

export const getIsLoading = ({ bonuses: { isLoading } }: RootState) => isLoading
export const getBonuses = ({ bonuses: { bonuses } }: RootState) => bonuses
