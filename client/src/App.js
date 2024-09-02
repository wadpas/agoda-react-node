import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { About, AuthWrapper, Cart, Checkout, Error, Home, PrivateRoute, Products, SingleProduct } from './pages'
import { Navbar, Sidebar, Footer } from './components'

function App() {
	return (
		<Router>
			<Navbar />
			<Sidebar />
			<Switch>
				<Route
					exact
					path="/"
					component={Home}
				/>
				<Route
					exact
					path="/about"
					component={About}
				/>
				<Route
					exact
					path="/cart"
					component={Cart}
				/>
				<Route
					exact
					path="/products"
					component={Products}
				/>
				<Route
					exact
					path="/products/:id"
					component={SingleProduct}
				/>
				<Route
					exact
					path="/checkout"
					component={Checkout}
				/>
				<Route
					path="*"
					component={Error}
				/>
			</Switch>
			<Footer />
		</Router>
	)
}

export default App
