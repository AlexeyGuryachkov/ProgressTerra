import { FC, memo, ReactNode } from 'react'

import './Popup.scss'

const Popup: FC<Props> = memo(({ children }) => {
	return <div className="popup">{children}</div>
})

export default Popup

interface Props {
	children: ReactNode
}
