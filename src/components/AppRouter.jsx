import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { privateRoutes, publickRoutes } from "../router";
import { AuthContext } from "../context";
import UILoader from "./ui/loader/UILoader";

const AppRouter = () => {
	const {isAuth, isLoaging} = useContext(AuthContext);

	if (isLoaging) {
		return <UILoader />
	}

	return isAuth ? (
		<Routes>
			{privateRoutes.map((route) => (
				<Route key={route.path} path={route.path} element={route.component} />
			))}
		</Routes>
	) : (
		<Routes>
			{publickRoutes.map((route) => (
				<Route key={route.path} path={route.path} element={route.component} />
			))}
		</Routes>
	);
};

export default AppRouter;
