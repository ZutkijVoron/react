import React, {useContext} from "react";
import UIInput from "../components/ui/input/UIInput";
import UIButton from "../components/ui/button/UIButton";
import {AuthContext} from "../context";

const Login = () => {
	const {isAuth, setIsAuth} = useContext(AuthContext)

	const login = event => {
		setIsAuth(true);
		localStorage.setItem('auth', 'true')
	}

	return (
		<div>
			<form onSubmit={login.bind(null)}>
				<UIInput type="text" placeholder="login"></UIInput>
				<UIInput type="password" placeholder="password"></UIInput>
				<UIButton>Log In</UIButton>
			</form>
		</div>
	);
};

export default Login;
