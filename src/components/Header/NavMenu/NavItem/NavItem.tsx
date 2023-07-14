import { FC, memo } from 'react'
import { NavLink } from 'react-router-dom'

import './NavItem.scss'

const NavItem: FC<Props> = memo(({ title, path }) => (
	<NavLink to={path} className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}>
		{title}
	</NavLink>
))

export default NavItem

interface Props {
	title: string
	path: string
}
