import { FC } from 'react'
import { dateFormater } from '../../../functions/functions'
import { useSelector } from 'react-redux'

import Icon from '../../../components/Icon/Icon'
import ArrowButton from '../../../components/ArrowButton/ArrowButton'

import flameSvg from '../../../assets/media/icons/flame-icon.svg'

import { getBonuses } from '../../../store/bonus/bonus-selectors'

import './BonusesInfo.scss'

const BonusesInfo: FC = () => {
	const { currentQuantity, forBurningQuantity, dateBurning } = useSelector(getBonuses)

	return (
		<div className="bonuses-info">
			<div className="bonuses-info__info-block">
				<div className="bonuses-info__header">{currentQuantity} бонусов</div>
				<div className="bonuses-info__bonuses">
					{`${dateFormater(dateBurning)} сгорит`}
					<Icon icon={flameSvg} size={16} />
					{`${forBurningQuantity} бонусов`}
				</div>
			</div>
			<ArrowButton onClick={() => {}} />
		</div>
	)
}

export default BonusesInfo
