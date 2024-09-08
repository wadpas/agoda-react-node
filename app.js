require('dotenv').config()
require('express-async-errors')

const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const connectDB = require('./db/connect')

const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')
const authRouter = require('./routes/authRoutes')
const userRoutes = require('./routes/userRoutes')

app.use(cors())
app.use(morgan('tiny'))
app.use(express.json())
app.use(cookieParser(process.env.JWT_SECRET))

app.get('/', (req, res) => {
	res.send('E-commerce API')
})

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/users', userRoutes)

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 5000
const start = async () => {
	try {
		await connectDB(process.env.MONGO_URI)
		app.listen(port, () => {
			console.log('Server started on port 5000')
		})
	} catch (error) {
		console.log(error)
	}
}

start()
