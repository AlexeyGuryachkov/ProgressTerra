import { FC } from 'react'

import Icon from '../../../components/Icon/Icon'

import infoSvg from '../../../assets/media/icons/information-button.svg'

import './BonusesHeader.scss'

const BonusesHeader: FC = () => (
	<div className="bonuses-header">
		<div className="bonuses-header_logo">логотип</div>
		<Icon icon={infoSvg} size={24} />
	</div>
)

export default BonusesHeader
