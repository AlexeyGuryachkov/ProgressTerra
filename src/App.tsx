import { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import PagesContainer from './components/PagesContainer/PagesContainer'
import Header from './components/Header/Header'
import Preloader from './components/Preloader/Preloader'

import { login } from './store/auth/auth'

import { getIsAuth, getIsLoading } from './store/auth/auth-selectors'

import { removeToken } from './functions/localStorage'

import './App.scss'

const App: FC = () => {
	const isLoading = useSelector(getIsLoading)
	const isAuth = useSelector(getIsAuth)

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch<any>(login())
	}, [dispatch])

	useEffect(
		() => () => {
			removeToken()
		},
		[]
	)

	return (
		<div className="app">
			<Header />
			{isAuth ? <PagesContainer /> : <div className="no-access-plug">Нет достпупа</div>}
			<PagesContainer />
			<Preloader isShow={isLoading} />
		</div>
	)
}

export default App
