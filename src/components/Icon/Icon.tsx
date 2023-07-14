import { FC, memo } from 'react'
import SVG from 'react-inlinesvg'
import cn from 'classnames'

import './Icon.scss'

const Icon: FC<Props> = memo(({ icon, size, onClick, className }) => (
	<div className={cn('icon', { clickable: !!onClick }, [className])} onClick={onClick}>
		<SVG src={icon} width={size} height={size} />
	</div>
))

export default Icon

interface Props {
	icon: string
	size: number
	onClick?: () => void
	className?: string
}
