import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

import { ProductsProvider } from './context/products_context'
import { FilterProvider } from './context/filter_context'
import { CartProvider } from './context/cart_context'
import { UserProvider } from './context/user_context'
import { Auth0Provider } from '@auth0/auth0-react'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
	<Auth0Provider
		domain="dev-1hgqdfgy43iv3gdg.us.auth0.com"
		clientId="FsEdFu8s8MYxVu0vsvByy4wXlJPzULWL"
		cacheLocation="localstorage">
		<UserProvider>
			<ProductsProvider>
				<FilterProvider>
					<CartProvider>
						<UserProvider>
							<App />
						</UserProvider>
					</CartProvider>
				</FilterProvider>
			</ProductsProvider>
		</UserProvider>
	</Auth0Provider>
)
