import React, { useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AuthContext } from './context'
import AppRouter from './components/AppRouter'
import UINavbar from './components/ui/navbar/UINavbar'
import './styles/App.css'

function App() {
	const [isAuth, setIsAuth] = useState(false)
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		if (localStorage.getItem('auth')) setIsAuth(!!localStorage.getItem('auth'))
		setIsLoading(false)
	}, [])

	return (
		<AuthContext.Provider
			value={{
				isAuth,
				setIsAuth,
				isLoading,
			}}
		>
			<BrowserRouter>
				<UINavbar />
				<AppRouter />
			</BrowserRouter>
		</AuthContext.Provider>
	)
}

export default App
