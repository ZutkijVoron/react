import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import { privateRoutes, publicRoutes as publicRoutes } from '../router'
import { AuthContext } from '../context'
import UILoader from './ui/loader/UILoader'

const AppRouter: React.FC = () => {
	const { isAuth, isLoading } = useContext(AuthContext)

	if (isLoading) {
		return <UILoader />
	}

	return isAuth ? (
		<Routes>
			{privateRoutes.map(route => (
				<Route key={route.path} path={route.path} element={route.component} />
			))}
		</Routes>
	) : (
		<Routes>
			{publicRoutes.map(route => (
				<Route key={route.path} path={route.path} element={route.component} />
			))}
		</Routes>
	)
}

export default AppRouter
