import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import Layout from '../layouts/layout';
import Home from '../pages/home/home';


const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Layout />}>
			<Route index element={<Home />} />
		</Route>
	)
)

export default function KasaRouter() {
	return <RouterProvider router={router} />
}