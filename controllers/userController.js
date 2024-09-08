const getAllUsers = async (req, res) => {
	const users = 'getAllUsers'
	res.status(200).json(users)
}

const getSingleUser = async (req, res) => {
	const users = 'getSingleUser'
	res.status(200).json(users)
}

const showCurrentUser = async (req, res) => {
	const users = 'showCurrentUser'
	res.status(200).json(users)
}

const updateUser = async (req, res) => {
	const users = 'updateUser'
	res.status(200).json(users)
}

const updateUserPassword = async (req, res) => {
	const users = 'updateUserPassword'
	res.status(200).json(users)
}

module.exports = {
	getAllUsers,
	getSingleUser,
	showCurrentUser,
	updateUser,
	updateUserPassword,
}
