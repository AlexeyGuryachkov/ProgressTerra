import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'

import BonusesPage from '../../pages/BonusesPage/BonusesPage'
import ListenerPage from '../../pages/ListenerPage/ListenerPage'

const PageRouter: FC = () => (
	<Routes>
		<Route path="/" element={<BonusesPage />} />
		<Route path="/speech-parser" element={<ListenerPage />} />
	</Routes>
)

export default PageRouter
