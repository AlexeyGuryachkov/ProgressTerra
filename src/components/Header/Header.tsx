import { FC } from 'react'

import NavMenu from './NavMenu/NavMenu'

import './Header.scss'

const Header: FC = () => (
	<div className="header">
		<NavMenu />
	</div>
)

export default Header
