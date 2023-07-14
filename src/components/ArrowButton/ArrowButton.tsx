import { FC, memo } from 'react'

import './ArrowButton.scss'

const ArrowButton: FC<Props> = memo(({ onClick }) => {
	return <button className="arrow-btn" type="button" onClick={onClick}></button>
})

export default ArrowButton

interface Props {
	onClick: () => void
}
