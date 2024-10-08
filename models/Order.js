const mongoose = require('mongoose')

const OrderItemSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	image: {
		type: String,
		required: true,
	},
	amount: {
		type: Number,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
	product: {
		type: mongoose.Types.ObjectId,
		ref: 'Product',
		required: true,
	},
})

const OrderSchema = mongoose.Schema(
	{
		tax: {
			type: Number,
			required: true,
		},
		shippingFee: {
			type: Number,
			required: true,
		},
		subtotal: {
			type: Number,
			required: true,
		},
		total: {
			type: Number,
			required: true,
		},
		cartItem: [OrderItemSchema],
		user: {
			type: mongoose.Types.ObjectId,
			ref: 'User',
			required: true,
		},
		clientSecret: {
			type: String,
		},
		paymentIntentId: {
			type: String,
		},
		status: {
			type: String,
			enum: ['pending', 'failed', 'paid', 'delivered', 'cancelled'],
			default: 'pending',
		},
	},
	{ timestamps: true }
)

module.exports = mongoose.model('Order', OrderSchema)
