const { createJWT, isToken, attachCookiesToResponse } = require('./jwt')
const checkPermissions = require('./checkPermissions')

module.exports = {
	createJWT,
	isToken,
	attachCookiesToResponse,
	checkPermissions,
}
