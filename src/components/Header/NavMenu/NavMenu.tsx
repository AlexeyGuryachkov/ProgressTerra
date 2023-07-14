import { FC } from 'react'

import NavItem from './NavItem/NavItem'

import './NavMenu.scss'

const NavMenu: FC = () => (
	<div className="nav-menu">
		<NavItem title="Бонусы" path="/" />
		<NavItem title="Распознать речь" path="/speech-parser" />
	</div>
)

export default NavMenu
