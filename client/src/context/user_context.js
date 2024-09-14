import React, { useContext, useEffect, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const UserContext = React.createContext()
export const UserProvider = ({ children }) => {
	const { user, isAuthenticated, isLoading, loginWithRedirect, logout } = useAuth0()
	const [myUser, setMyUser] = useState(null)

	useEffect(() => {
		console.log('isAuthenticated', isAuthenticated)
		console.log('user', user)
		// if (isAuthenticated) {
		// 	setUserInfo(user)
		// }
	}, [isAuthenticated, user])

	if (isLoading) {
		return <div>Loading...</div>
	}

	return (
		<UserContext.Provider value={{ loginWithRedirect, logout, myUser, setMyUser }}>{children}</UserContext.Provider>
	)
}
// make sure use
export const useUserContext = () => {
	return useContext(UserContext)
}
