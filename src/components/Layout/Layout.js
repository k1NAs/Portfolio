import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import "./layout.css"

function Layout() {
	return (
		<>
			<Header />
				<main className="container">
					<Outlet />
				</main>
			<Footer />
		</>
	)
}

export { Layout };