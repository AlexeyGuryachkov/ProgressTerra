import { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Popup from '../../components/Popup/Popup'
import BonusesInfo from './BonusesInfo/BonusesInfo'
import BonusesHeader from './BonusesHeader/BonusesHeader'
import BonusesBody from './BonusesBody/BonusesBody'
import Preloader from '../../components/Preloader/Preloader'

import { requestBonuses } from '../../store/bonus/bonus'

import { getIsLoading } from '../../store/bonus/bonus-selectors'

import './BonusesPage.scss'

const BonusesPage: FC = () => {
	const dispatch = useDispatch()
	const isLoading = useSelector(getIsLoading)

	useEffect(() => {
		dispatch<any>(requestBonuses())
	}, [dispatch])

	return (
		<div className="bonuses-page page">
			<BonusesHeader />
			<Popup>
				<BonusesInfo />
			</Popup>
			<BonusesBody />
			<Preloader isShow={isLoading} />
		</div>
	)
}

export default BonusesPage
