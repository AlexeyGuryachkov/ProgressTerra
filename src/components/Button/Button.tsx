import { FC } from 'react'

import './Button.scss'

const Button: FC<Props> = ({ title, onClick }) => {
	return (
		<button className="btn" type="button" onClick={onClick}>
			{title}
		</button>
	)
}

export default Button

interface Props {
	title: string
	onClick: () => void
}
