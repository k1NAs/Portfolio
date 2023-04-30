import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from "./components/home/Home";
import Projects from "./components/projects/Projects";
import Contacts from "./components/contacts/Contacts";
import { Layout } from './components/Layout/Layout';
import './App.css';


function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/contacts" element={<Contacts />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
