import React, { useContext } from 'react'
import classes from './UINavbar.module.css'
import { Link } from 'react-router-dom'
import UIButton from '../button/UIButton'
import { AuthContext } from '../../../context'

const UINavbar: React.FC = () => {
	const { isAuth, setIsAuth } = useContext(AuthContext)

	const logout = () => {
		setIsAuth(false)
		localStorage.removeItem('auth')
	}

	return (
		<div className={classes.navbar}>
			<Link to='/posts' className={classes.navbar__links}>
				posts
			</Link>
			<Link to='/about' className={classes.navbar__links}>
				about
			</Link>
			{isAuth ? <UIButton onClick={logout.bind(null)}>Log Out</UIButton> : ''}
		</div>
	)
}

export default UINavbar
