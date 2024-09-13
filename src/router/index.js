import { Navigate, replace } from "react-router-dom";
import About from "../pages/About";
import Error from "../pages/Error";
import Login from "../pages/Login";
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";

export const privateRoutes = [
	{
		path: "/about",
		component: <About />,
	},
	{
		path: "/posts",
		component: <Posts />,
	},
	{
		path: "/posts/:id",
		component: <PostIdPage />,
	},
	{
		path: "*",
		component: <Navigate to="/posts" replace />,
	},
];

export const publickRoutes = [
	{
		path: "/login",
		component: <Login />,
	},
	{
		path: "*",
		component: <Navigate to="/login" replace />,
	},
];
